/**
 * Global Teardown
 * 
 * Runs once after all tests complete. Handles:
 * 1. Cleanup of temporary auth state
 * 2. Test run summary logging
 * 3. Optional: cleanup of old artifacts
 * 4. Automatic email report (when SMTP_USER is configured)
 */

import { TEST_ENV, currentEnv } from "./config/index.js";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { execSync } from "child_process";

const AUTH_STATE_PATH = path.resolve("test-results/.auth/storageState.json");

async function globalTeardown(config) {

    console.log("\n══════════════════════════════════════════════");
    console.log(`  Global Teardown — Environment: ${currentEnv.name} (${TEST_ENV})`);
    console.log(`  Timestamp: ${new Date().toISOString()}`);
    console.log("══════════════════════════════════════════════\n");

    // 1. Keep auth state file for visibility in explorer
    // (Only delete in CI to avoid leaking credentials)
    if (process.env.CI) {
        cleanupAuthState();
    } else {
        console.log("  ℹ Auth state retained at: test-results/.auth/storageState.json");
    }

    // 2. Clean up old artifacts beyond retention limit
    cleanupOldArtifacts("test-results/screenshots", 50);

    // 3. Print summary
    printSummary();

    // 4. Send report via email (always enabled)
    await sendReportEmail();

    console.log("\n✔ Global teardown complete.\n");
}

/**
 * Remove stored authentication state to avoid stale sessions.
 */
function cleanupAuthState() {

    try {
        if (fs.existsSync(AUTH_STATE_PATH)) {
            fs.unlinkSync(AUTH_STATE_PATH);
            console.log("  ✔ Auth state cleaned up.");
        }
    } catch (error) {
        console.warn(`  ⚠ Could not remove auth state: ${error.message}`);
    }
}

/**
 * Remove old artifact files if they exceed the retention limit.
 * Keeps the most recent files based on modification time.
 */
function cleanupOldArtifacts(directory, maxFiles) {

    try {
        if (!fs.existsSync(directory)) return;

        const files = fs.readdirSync(directory)
            .map(file => ({
                name: file,
                path: path.join(directory, file),
                mtime: fs.statSync(path.join(directory, file)).mtime
            }))
            .sort((a, b) => b.mtime - a.mtime);

        if (files.length > maxFiles) {
            const toRemove = files.slice(maxFiles);
            for (const file of toRemove) {
                fs.unlinkSync(file.path);
            }
            console.log(`  ✔ Cleaned up ${toRemove.length} old artifacts from ${directory}`);
        }

    } catch (error) {
        console.warn(`  ⚠ Artifact cleanup issue: ${error.message}`);
    }
}

/**
 * Print a brief test run summary.
 */
function printSummary() {

    console.log("  ────────────────────────────────────");
    console.log(`  Environment : ${currentEnv.name}`);
    console.log(`  Base URL    : ${currentEnv.baseURL}`);
    console.log(`  Completed   : ${new Date().toLocaleString()}`);
    console.log("  ────────────────────────────────────");
}

/**
 * Automatically send the test report via email after tests complete.
 */
async function sendReportEmail() {
    console.log("\n  📧 Sending test report email...");

    // ─── Email Configuration (hardcoded for auto-send) ─────────────────
    const SMTP_USER = "aadhithya.k@tnschools.gov.in";
    const SMTP_PASS = "hkkk ziad cxyp dnxv";
    const RECIPIENTS = ["aadhithya.k@tnschools.gov.in"];
    // ────────────────────────────────────────────────────────────────────

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    // Get test status from last run
    const lastRunPath = path.resolve("test-results/.last-run.json");
    let overallStatus = "UNKNOWN";
    if (fs.existsSync(lastRunPath)) {
        const lastRun = JSON.parse(fs.readFileSync(lastRunPath, "utf-8"));
        overallStatus = lastRun.status === "passed" ? "PASSED✅" : "FAILED❌";
    }

    // Read Allure summary data
    let summaryData = null;
    const summaryPath = path.resolve("allure-report/widgets/summary.json");
    if (fs.existsSync(summaryPath)) {
        summaryData = JSON.parse(fs.readFileSync(summaryPath, "utf-8"));
    }

    // Read Allure suites data
    let suitesData = null;
    const suitesPath = path.resolve("allure-report/widgets/suites.json");
    if (fs.existsSync(suitesPath)) {
        suitesData = JSON.parse(fs.readFileSync(suitesPath, "utf-8"));
    }

    // Build the report HTML
    const emailBody = buildReportEmailBody(overallStatus, summaryData, suitesData);

    // Collect attachments (CSV files — Gmail blocks HTML/ZIP)
    const attachments = [];

    // Attach Allure CSV data files
    const allureDataDir = path.resolve("allure-report/data");
    if (fs.existsSync(allureDataDir)) {
        const csvFiles = ["suites.csv", "behaviors.csv", "categories.csv"];
        for (const csvFile of csvFiles) {
            const csvPath = path.join(allureDataDir, csvFile);
            if (fs.existsSync(csvPath)) {
                attachments.push({ filename: `allure-${csvFile}`, path: csvPath });
            }
        }
    }

    // Attach report-history CSVs
    const historyDir = path.resolve("report-history");
    if (fs.existsSync(historyDir)) {
        const historyFiles = ["suites.csv", "behaviors.csv", "categories.csv"];
        for (const hFile of historyFiles) {
            const hPath = path.join(historyDir, hFile);
            if (fs.existsSync(hPath)) {
                attachments.push({ filename: `history-${hFile}`, path: hPath });
            }
        }
    }

    const statusEmoji = overallStatus === "PASSED" ? "✅" : "❌";

    try {
        await transporter.verify();
        const info = await transporter.sendMail({
            from: `"Playwright Reports" <${SMTP_USER}>`,
            to: RECIPIENTS.join(", "),
            subject: `${statusEmoji} Playwright Report [${overallStatus}] - ${currentEnv.name} - ${new Date().toLocaleDateString()}`,
            html: emailBody,
            attachments,
        });
        console.log(`  ✅ Report sent to: ${RECIPIENTS.join(", ")}`);
        console.log(`  📨 Message ID: ${info.messageId}`);
    } catch (error) {
        console.error(`  ❌ Email failed: ${error.message}`);
    }
}

/**
 * Build a detailed HTML email body with Allure test results.
 */
function buildReportEmailBody(overallStatus, summaryData, suitesData) {
    const statusColor = overallStatus === "PASSED" ? "#0d8a0d" : "#d32f2f";
    const statusEmoji = overallStatus === "PASSED" ? "✅" : "❌";
    const headerBg = overallStatus === "PASSED" ? "#0d8a0d" : "#d32f2f";

    // Summary stats
    let passed = 0, failed = 0, broken = 0, skipped = 0, total = 0, duration = "";
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
            const suiteStatus = s.failed > 0 || s.broken > 0 ? "❌" : s.skipped === s.total ? "⏭️" : "✅";
            suiteRows += `
                <tr>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${suiteStatus} ${suite.name}</td>
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
                <h1 style="margin: 0; font-size: 22px;">🎭 Playwright Test Report</h1>
                <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">Automated Test Execution Results</p>
            </div>

            <!-- Overall Status Banner -->
            <div style="background: ${overallStatus === "PASSED" ? "#e8f5e9" : "#ffebee"}; padding: 15px 30px; border-bottom: 1px solid #ddd;">
                <span style="font-size: 18px; font-weight: bold; color: ${statusColor};">${statusEmoji} Overall: ${overallStatus}</span>
                <span style="float: right; color: #666; font-size: 14px;">${new Date().toLocaleString()}</span>
            </div>

            <!-- Summary Stats -->
            <div style="padding: 25px 30px;">
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

                <!-- Environment Info -->
                <h3 style="margin: 25px 0 15px; color: #333; font-size: 16px;">⚙️ Environment</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; color: #666; width: 140px;">Environment</td><td style="padding: 8px 0; font-weight: 500;">${currentEnv.name} (${TEST_ENV})</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Base URL</td><td style="padding: 8px 0; font-weight: 500;">${currentEnv.baseURL}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Duration</td><td style="padding: 8px 0; font-weight: 500;">${duration}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Node Version</td><td style="padding: 8px 0; font-weight: 500;">${process.version}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Platform</td><td style="padding: 8px 0; font-weight: 500;">${process.platform}</td></tr>
                </table>
            </div>

            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 15px 30px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
                <p style="margin: 0;">📎 Full interactive report attached (open playwright-report.html in a browser)</p>
                <p style="margin: 5px 0 0;">Sent automatically by Playwright Test Framework</p>
            </div>
        </div>
    </body>
    </html>`;
}

/**
 * Zip a directory into a .zip file using PowerShell Compress-Archive
 */
function zipDirectory(sourceDir, outPath) {
    if (fs.existsSync(outPath)) {
        fs.unlinkSync(outPath);
    }
    execSync(`pwsh -Command "Compress-Archive -Path '${sourceDir}\\*' -DestinationPath '${outPath}' -Force"`, {
        stdio: "pipe"
    });
}

export default globalTeardown;
