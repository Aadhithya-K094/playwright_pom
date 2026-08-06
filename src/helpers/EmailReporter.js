/**
 * Email Reporter - Sends Playwright test report via email
 *
 * Reads Allure report data (summary.json, suites.json) and embeds
 * the full test results directly in the email body — not just as an attachment.
 *
 * Configuration via environment variables:
 *   SMTP_HOST       - SMTP server host (e.g., smtp.gmail.com)
 *   SMTP_PORT       - SMTP port (default: 587)
 *   SMTP_USER       - Email address to send from
 *   SMTP_PASS       - App password or SMTP password
 *   REPORT_RECIPIENTS - Comma-separated list of recipient emails
 *
 * Usage:
 *   node src/helpers/EmailReporter.js
 *   npm run report:email
 */

import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "../../");

// ─── Main ──────────────────────────────────────────────────────────────────

async function sendReport() {
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";
    const recipients = (process.env.REPORT_RECIPIENTS || "").split(",").map(e => e.trim()).filter(Boolean);

    if (!smtpUser || !smtpPass) {
        console.error("❌ SMTP_USER and SMTP_PASS environment variables are required.");
        console.error("  $env:SMTP_USER = 'your-email@gmail.com'");
        console.error("  $env:SMTP_PASS = 'your-app-password'");
        process.exit(1);
    }
    if (recipients.length === 0) {
        console.error("❌ REPORT_RECIPIENTS environment variable is required.");
        process.exit(1);
    }

    console.log("📧 Preparing to send test report email...");
    console.log(`   From: ${smtpUser}`);
    console.log(`   To: ${recipients.join(", ")}`);

    // Create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: { user: smtpUser, pass: smtpPass },
    });

    // Verify connection
    try {
        await transporter.verify();
        console.log("✅ SMTP connection verified.");
    } catch (error) {
        console.error("❌ SMTP connection failed:", error.message);
        process.exit(1);
    }

    // Get overall status from multiple sources
    let overallStatus = "UNKNOWN";

    // Source 1: test-results/.last-run.json (Playwright's built-in status)
    const lastRunPath = path.join(ROOT_DIR, "test-results", ".last-run.json");
    if (fs.existsSync(lastRunPath)) {
        try {
            const lastRun = JSON.parse(fs.readFileSync(lastRunPath, "utf-8"));
            if (lastRun.status === "passed") {
                overallStatus = "PASSED";
            } else if (lastRun.status === "failed") {
                overallStatus = "FAILED";
            } else if (lastRun.status === "interrupted") {
                overallStatus = "FAILED";
            }
        } catch (e) {
            // ignore parse errors
        }
    }

    // Read Allure data
    let summaryData = null;
    const summaryPath = path.join(ROOT_DIR, "allure-report", "widgets", "summary.json");
    if (fs.existsSync(summaryPath)) {
        summaryData = JSON.parse(fs.readFileSync(summaryPath, "utf-8"));
    }

    let suitesData = null;
    const suitesPath = path.join(ROOT_DIR, "allure-report", "widgets", "suites.json");
    if (fs.existsSync(suitesPath)) {
        suitesData = JSON.parse(fs.readFileSync(suitesPath, "utf-8"));
    }

    // Source 2: If .last-run.json didn't help, derive from Allure summary
    if (overallStatus === "UNKNOWN" && summaryData) {
        const stats = summaryData.statistic;
        if (stats.failed === 0 && stats.broken === 0) {
            overallStatus = "PASSED";
        } else {
            overallStatus = "FAILED";
        }
    }

    // Source 3: If still unknown but we have suites data, check individual results
    if (overallStatus === "UNKNOWN" && suitesData && suitesData.items) {
        const hasFailures = suitesData.items.some(s => s.statistic.failed > 0 || s.statistic.broken > 0);
        overallStatus = hasFailures ? "FAILED" : "PASSED";
    }

    // Extract test names from suites data for email heading
    const testNames = extractTestNames(suitesData);

    // Build email body
    const emailBody = buildReportEmail(overallStatus, summaryData, suitesData, testNames);

    // Attachments (CSV files — Gmail blocks HTML/ZIP)
    const attachments = [];

    // Attach Allure CSV data files
    const allureDataDir = path.join(ROOT_DIR, "allure-report", "data");
    if (fs.existsSync(allureDataDir)) {
        const csvFiles = ["suites.csv", "behaviors.csv", "categories.csv"];
        for (const csvFile of csvFiles) {
            const csvPath = path.join(allureDataDir, csvFile);
            if (fs.existsSync(csvPath)) {
                attachments.push({ filename: `allure-${csvFile}`, path: csvPath });
            }
        }
    }

    // Attach the report-history CSVs if they exist
    const historyDir = path.join(ROOT_DIR, "report-history");
    if (fs.existsSync(historyDir)) {
        const historyFiles = ["suites.csv", "behaviors.csv", "categories.csv"];
        for (const hFile of historyFiles) {
            const hPath = path.join(historyDir, hFile);
            if (fs.existsSync(hPath)) {
                attachments.push({ filename: `history-${hFile}`, path: hPath });
            }
        }
    }

    console.log(`   Attachments: ${attachments.length} file(s)`);

    const statusEmoji = overallStatus === "PASSED" ? "✅" : overallStatus === "FAILED" ? "❌" : "⚠️";
    const envName = (process.env.TEST_ENV || "staging").charAt(0).toUpperCase() + (process.env.TEST_ENV || "staging").slice(1);

    // Build subject with test names
    const testNamesShort = testNames.length <= 3
        ? testNames.join(", ")
        : `${testNames.slice(0, 3).join(", ")} +${testNames.length - 3} more`;
    const subjectLine = testNamesShort
        ? `${statusEmoji} [${overallStatus}] ${testNamesShort} - ${envName} - ${new Date().toLocaleDateString()}`
        : `${statusEmoji} Playwright Report [${overallStatus}] - ${envName} - ${new Date().toLocaleDateString()}`;

    // Send
    try {
        const info = await transporter.sendMail({
            from: `"Playwright Reports" <${smtpUser}>`,
            to: recipients.join(", "),
            subject: subjectLine,
            html: emailBody,
            attachments,
        });
        console.log(`\n✅ Report email sent successfully!`);
        console.log(`   Message ID: ${info.messageId}`);
    } catch (error) {
        console.error("❌ Failed to send email:", error.message);
        process.exit(1);
    }
}

// ─── Email Body Builder ────────────────────────────────────────────────────

function buildReportEmail(overallStatus, summaryData, suitesData, testNames) {
    const statusColor = overallStatus === "PASSED" ? "#0d8a0d" : overallStatus === "FAILED" ? "#d32f2f" : "#f57c00";
    const statusEmoji = overallStatus === "PASSED" ? "✅" : overallStatus === "FAILED" ? "❌" : "⚠️";
    const headerBg = overallStatus === "PASSED" ? "#0d8a0d" : overallStatus === "FAILED" ? "#d32f2f" : "#f57c00";
    const statusBannerBg = overallStatus === "PASSED" ? "#e8f5e9" : overallStatus === "FAILED" ? "#ffebee" : "#fff3e0";
    const envName = (process.env.TEST_ENV || "staging").charAt(0).toUpperCase() + (process.env.TEST_ENV || "staging").slice(1);

    // Stats
    let passed = 0, failed = 0, broken = 0, skipped = 0, total = 0, duration = "N/A";
    if (summaryData) {
        passed = summaryData.statistic.passed;
        failed = summaryData.statistic.failed;
        broken = summaryData.statistic.broken;
        skipped = summaryData.statistic.skipped;
        total = summaryData.statistic.total;
        const durationMs = summaryData.time.sumDuration || 0;
        const seconds = Math.floor(durationMs / 1000);
        const minutes = Math.floor(seconds / 60);
        duration = minutes > 0 ? `${minutes}m ${seconds % 60}s` : `${seconds}s`;
    }

    // Suite rows
    let suiteRows = "";
    if (suitesData && suitesData.items) {
        for (const suite of suitesData.items) {
            const s = suite.statistic;
            const icon = s.failed > 0 || s.broken > 0 ? "❌" : s.skipped === s.total ? "⏭️" : "✅";
            suiteRows += `
                <tr>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${icon} ${suite.name}</td>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee; text-align: center; color: #0d8a0d;">${s.passed}</td>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee; text-align: center; color: #d32f2f;">${s.failed}</td>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee; text-align: center; color: #e65100;">${s.broken}</td>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee; text-align: center; color: #666;">${s.skipped}</td>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee; text-align: center; font-weight: bold;">${s.total}</td>
                </tr>`;
        }
    }

    return `
    <html>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; color: #333;">
        <div style="max-width: 700px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

            <!-- Header -->
            <div style="background: ${headerBg}; color: white; padding: 25px 30px;">
                <h1 style="margin: 0; font-size: 22px;">🎭 ${testNames.length > 0 ? testNames.join(" | ") : "Playwright Test Report"} — ${envName}</h1>
                <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">${new Date().toLocaleString()} | ${total} tests executed</p>
            </div>

            <!-- Status Banner -->
            <div style="background: ${statusBannerBg}; padding: 15px 30px; border-bottom: 1px solid #ddd;">
                <span style="font-size: 18px; font-weight: bold; color: ${statusColor};">${statusEmoji} Status: ${overallStatus}</span>
                <span style="float: right; color: #666; font-size: 14px;">Duration: ${duration}</span>
            </div>

            <div style="padding: 25px 30px;">

                <!-- Summary Cards -->
                <h3 style="margin: 0 0 15px; color: #333; font-size: 16px;">📊 Test Summary</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 12px; background: #e8f5e9; border-radius: 8px; text-align: center; width: 20%;">
                            <div style="font-size: 24px; font-weight: bold; color: #0d8a0d;">${passed}</div>
                            <div style="font-size: 12px; color: #666; margin-top: 4px;">Passed</div>
                        </td>
                        <td style="width: 3%;"></td>
                        <td style="padding: 12px; background: #ffebee; border-radius: 8px; text-align: center; width: 20%;">
                            <div style="font-size: 24px; font-weight: bold; color: #d32f2f;">${failed}</div>
                            <div style="font-size: 12px; color: #666; margin-top: 4px;">Failed</div>
                        </td>
                        <td style="width: 3%;"></td>
                        <td style="padding: 12px; background: #fff3e0; border-radius: 8px; text-align: center; width: 20%;">
                            <div style="font-size: 24px; font-weight: bold; color: #e65100;">${broken}</div>
                            <div style="font-size: 12px; color: #666; margin-top: 4px;">Broken</div>
                        </td>
                        <td style="width: 3%;"></td>
                        <td style="padding: 12px; background: #f5f5f5; border-radius: 8px; text-align: center; width: 20%;">
                            <div style="font-size: 24px; font-weight: bold; color: #666;">${skipped}</div>
                            <div style="font-size: 12px; color: #666; margin-top: 4px;">Skipped</div>
                        </td>
                        <td style="width: 3%;"></td>
                        <td style="padding: 12px; background: #e3f2fd; border-radius: 8px; text-align: center; width: 20%;">
                            <div style="font-size: 24px; font-weight: bold; color: #1565c0;">${total}</div>
                            <div style="font-size: 12px; color: #666; margin-top: 4px;">Total</div>
                        </td>
                    </tr>
                </table>

                <!-- Suite Breakdown -->
                ${suitesData && suitesData.items.length > 0 ? `
                <h3 style="margin: 25px 0 15px; color: #333; font-size: 16px;">📋 Results by Suite / Browser</h3>
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0e0e0; border-radius: 8px;">
                    <thead>
                        <tr style="background: #f8f9fa;">
                            <th style="padding: 10px 12px; text-align: left; border-bottom: 2px solid #ddd;">Suite</th>
                            <th style="padding: 10px 12px; text-align: center; border-bottom: 2px solid #ddd; color: #0d8a0d;">✅ Pass</th>
                            <th style="padding: 10px 12px; text-align: center; border-bottom: 2px solid #ddd; color: #d32f2f;">❌ Fail</th>
                            <th style="padding: 10px 12px; text-align: center; border-bottom: 2px solid #ddd; color: #e65100;">⚠️ Broken</th>
                            <th style="padding: 10px 12px; text-align: center; border-bottom: 2px solid #ddd; color: #666;">⏭️ Skip</th>
                            <th style="padding: 10px 12px; text-align: center; border-bottom: 2px solid #ddd;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${suiteRows}
                    </tbody>
                </table>
                ` : ""}

                <!-- Environment -->
                <h3 style="margin: 25px 0 15px; color: #333; font-size: 16px;">⚙️ Environment</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; color: #666; width: 140px;">Environment</td><td style="padding: 8px 0; font-weight: 500;">${process.env.TEST_ENV || "staging"}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Duration</td><td style="padding: 8px 0; font-weight: 500;">${duration}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Node Version</td><td style="padding: 8px 0; font-weight: 500;">${process.version}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Platform</td><td style="padding: 8px 0; font-weight: 500;">${process.platform}</td></tr>
                </table>
            </div>

            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 15px 30px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
                <p style="margin: 0;">📎 Full interactive report attached (open playwright-report.html in browser)</p>
                <p style="margin: 5px 0 0;">Sent automatically by Playwright Test Framework</p>
            </div>
        </div>
    </body>
    </html>`;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Zip a directory into a .zip file using PowerShell Compress-Archive
 */
function zipDirectory(sourceDir, outPath) {
    // Remove existing zip if present
    if (fs.existsSync(outPath)) {
        fs.unlinkSync(outPath);
    }
    execSync(`pwsh -Command "Compress-Archive -Path '${sourceDir}\\*' -DestinationPath '${outPath}' -Force"`, {
        stdio: "pipe"
    });
}

/**
 * Extract test FILE NAMES from the LAST RUN only.
 * Reads allure-results/*-result.json files that match the last run timestamp.
 * Returns array like ["BEO.spec.js"] — only what was actually run last time.
 */
function extractTestNames(suitesData) {
    const names = [];
    const allureResultsDir = path.join(ROOT_DIR, "allure-results");
    const lastRunPath = path.join(ROOT_DIR, "test-results", ".last-run.json");

    if (!fs.existsSync(allureResultsDir)) return names;

    try {
        // Get the timestamp of .last-run.json (marks when last test finished)
        let lastRunTime = Date.now();
        if (fs.existsSync(lastRunPath)) {
            lastRunTime = fs.statSync(lastRunPath).mtimeMs;
        }

        // Read all result JSON files and find ones from the last run
        // (within 5 minutes of .last-run.json timestamp)
        const resultFiles = fs.readdirSync(allureResultsDir)
            .filter(f => f.endsWith("-result.json"));

        for (const file of resultFiles) {
            const filePath = path.join(allureResultsDir, file);
            const fileMtime = fs.statSync(filePath).mtimeMs;

            // Only include files from the last run (within 5 min window)
            if (Math.abs(fileMtime - lastRunTime) < 5 * 60 * 1000) {
                const result = JSON.parse(fs.readFileSync(filePath, "utf-8"));
                // Get file name from labels → "suite" label
                const suiteLabel = result.labels && result.labels.find(l => l.name === "suite");
                if (suiteLabel && suiteLabel.value) {
                    const fileName = suiteLabel.value.replace(/\\/g, "/").split("/").pop();
                    if (!names.includes(fileName)) {
                        names.push(fileName);
                    }
                }
            }
        }
    } catch (e) {
        // ignore errors
    }
    return names;
}

// Run
sendReport();
