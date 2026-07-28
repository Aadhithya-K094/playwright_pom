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

    // // 4. Send report via email (always enabled)
    // await sendReportEmail();

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

    // Attach ONLY the current run's Allure CSV data (last run report)
    const allureDataDir = path.resolve("allure-report/data");
    if (fs.existsSync(allureDataDir)) {
        const suitesPath = path.join(allureDataDir, "suites.csv");
        if (fs.existsSync(suitesPath)) {
            attachments.push({ filename: `current-run-report.csv`, path: suitesPath });
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
 * Build a detailed HTML email body with:
 * 1. CURRENT RUN — highlighted with individual test results
 * 2. HISTORY — accumulated run summary from report-history
 */
function buildReportEmailBody(overallStatus, summaryData, suitesData) {
    const statusColor = overallStatus.includes("PASSED") ? "#0d8a0d" : "#d32f2f";
    const statusEmoji = overallStatus.includes("PASSED") ? "✅" : "❌";
    const headerBg = overallStatus.includes("PASSED") ? "#0d8a0d" : "#d32f2f";

    // Current run stats
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

    // ─── Get individual test case results from suites.json ─────────────
    let currentTestRows = "";
    const suitesJsonPath = path.resolve("allure-report/data/suites.json");
    if (fs.existsSync(suitesJsonPath)) {
        const suitesJson = JSON.parse(fs.readFileSync(suitesJsonPath, "utf-8"));
        const testCases = [];
        extractTestCasesForEmail(suitesJson, testCases);

        for (const tc of testCases) {
            const statusIcon = tc.status === "passed" ? "✅" : tc.status === "failed" ? "❌" : tc.status === "broken" ? "⚠️" : "⏭️";
            const rowBg = tc.status === "failed" ? "#fff0f0" : tc.status === "broken" ? "#fff8e1" : tc.status === "skipped" ? "#f5f5f5" : "#f0fff0";
            const durationSec = (tc.duration / 1000).toFixed(1);
            currentTestRows += `
                <tr style="background: ${rowBg};">
                    <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${statusIcon}</td>
                    <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: 500;">${tc.name}</td>
                    <td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #666;">${tc.browser}</td>
                    <td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #666;">${durationSec}s</td>
                </tr>`;
        }
    }

    // ─── Get previous run history from report-history/behaviors.csv ────
    let historyRows = "";
    const historyPath = path.resolve("report-history/behaviors.csv");
    if (fs.existsSync(historyPath)) {
        const lines = fs.readFileSync(historyPath, "utf-8").trim().split("\n");
        // Skip header, get last 10 runs
        const dataLines = lines.slice(1).slice(-10);
        for (const line of dataLines) {
            const cols = line.replace(/"/g, "").split(",");
            // RUN_ID, RUN_TIMESTAMP, PASSED, FAILED, BROKEN, SKIPPED, TOTAL, DURATION_MS
            const runDate = cols[1] ? cols[1].replace("T", " ").substring(0, 16).replace(/-/g, "/") : "";
            const hPassed = cols[2] || 0;
            const hFailed = cols[3] || 0;
            const hBroken = cols[4] || 0;
            const hSkipped = cols[5] || 0;
            const hTotal = cols[6] || 0;
            const hStatus = parseInt(hFailed) > 0 || parseInt(hBroken) > 0 ? "❌" : "✅";
            historyRows += `
                <tr>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #eee; font-size: 12px;">${runDate}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #eee; text-align: center;">${hStatus}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #eee; text-align: center; color: #0d8a0d;">${hPassed}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #eee; text-align: center; color: #d32f2f;">${hFailed}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #eee; text-align: center; color: #666;">${hSkipped}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #eee; text-align: center; font-weight: bold;">${hTotal}</td>
                </tr>`;
        }
    }

    return `
    <html>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; color: #333;">
        <div style="max-width: 750px; margin: 0 auto;">

            <!-- ═══════════════════════════════════════════════════════════ -->
            <!-- CURRENT RUN (HIGHLIGHTED)                                  -->
            <!-- ═══════════════════════════════════════════════════════════ -->
            <div style="background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 25px; border: 3px solid ${headerBg};">

                <!-- Header -->
                <div style="background: ${headerBg}; color: white; padding: 20px 30px;">
                    <h1 style="margin: 0; font-size: 20px;">🎭 CURRENT RUN — ${new Date().toLocaleString()}</h1>
                    <p style="margin: 5px 0 0; opacity: 0.9; font-size: 13px;">Latest test execution results</p>
                </div>

                <!-- Status Banner -->
                <div style="background: ${overallStatus.includes("PASSED") ? "#e8f5e9" : "#ffebee"}; padding: 12px 30px; border-bottom: 1px solid #ddd;">
                    <span style="font-size: 16px; font-weight: bold; color: ${statusColor};">${statusEmoji} Status: ${overallStatus}</span>
                    <span style="float: right; color: #666; font-size: 13px;">Duration: ${duration}</span>
                </div>

                <!-- Summary Cards -->
                <div style="padding: 20px 30px;">
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                        <tr>
                            <td style="padding: 10px; background: #e8f5e9; border-radius: 8px; text-align: center;">
                                <div style="font-size: 22px; font-weight: bold; color: #0d8a0d;">${passed}</div>
                                <div style="font-size: 11px; color: #666;">Passed</div>
                            </td>
                            <td style="width: 3%;"></td>
                            <td style="padding: 10px; background: #ffebee; border-radius: 8px; text-align: center;">
                                <div style="font-size: 22px; font-weight: bold; color: #d32f2f;">${failed}</div>
                                <div style="font-size: 11px; color: #666;">Failed</div>
                            </td>
                            <td style="width: 3%;"></td>
                            <td style="padding: 10px; background: #fff3e0; border-radius: 8px; text-align: center;">
                                <div style="font-size: 22px; font-weight: bold; color: #e65100;">${broken}</div>
                                <div style="font-size: 11px; color: #666;">Broken</div>
                            </td>
                            <td style="width: 3%;"></td>
                            <td style="padding: 10px; background: #f5f5f5; border-radius: 8px; text-align: center;">
                                <div style="font-size: 22px; font-weight: bold; color: #666;">${skipped}</div>
                                <div style="font-size: 11px; color: #666;">Skipped</div>
                            </td>
                            <td style="width: 3%;"></td>
                            <td style="padding: 10px; background: #e3f2fd; border-radius: 8px; text-align: center;">
                                <div style="font-size: 22px; font-weight: bold; color: #1565c0;">${total}</div>
                                <div style="font-size: 11px; color: #666;">Total</div>
                            </td>
                        </tr>
                    </table>

                    <!-- Individual Test Results -->
                    ${currentTestRows ? `
                    <h3 style="margin: 20px 0 10px; color: #333; font-size: 14px;">📋 Test Case Results</h3>
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0e0e0; border-radius: 8px; font-size: 13px;">
                        <thead>
                            <tr style="background: #f8f9fa;">
                                <th style="padding: 8px 12px; text-align: left; border-bottom: 2px solid #ddd; width: 30px;">St</th>
                                <th style="padding: 8px 12px; text-align: left; border-bottom: 2px solid #ddd;">Test Name</th>
                                <th style="padding: 8px 12px; text-align: left; border-bottom: 2px solid #ddd;">Browser</th>
                                <th style="padding: 8px 12px; text-align: left; border-bottom: 2px solid #ddd;">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${currentTestRows}
                        </tbody>
                    </table>
                    ` : ""}

                    <!-- Environment -->
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 12px;">
                        <tr><td style="padding: 5px 0; color: #999; width: 100px;">Environment</td><td style="padding: 5px 0;">${currentEnv.name} (${TEST_ENV})</td></tr>
                        <tr><td style="padding: 5px 0; color: #999;">Base URL</td><td style="padding: 5px 0;">${currentEnv.baseURL}</td></tr>
                    </table>
                </div>
            </div>

            <!-- ═══════════════════════════════════════════════════════════ -->
            <!-- HISTORY (previous runs)                                    -->
            <!-- ═══════════════════════════════════════════════════════════ -->
            ${historyRows ? `
            <div style="background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <div style="background: #455a64; color: white; padding: 15px 30px;">
                    <h2 style="margin: 0; font-size: 16px;">📈 Run History (Last 10 runs)</h2>
                </div>
                <div style="padding: 15px 30px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
                        <thead>
                            <tr style="background: #f8f9fa;">
                                <th style="padding: 8px 10px; text-align: left; border-bottom: 2px solid #ddd;">Date</th>
                                <th style="padding: 8px 10px; text-align: center; border-bottom: 2px solid #ddd;">Status</th>
                                <th style="padding: 8px 10px; text-align: center; border-bottom: 2px solid #ddd; color: #0d8a0d;">Pass</th>
                                <th style="padding: 8px 10px; text-align: center; border-bottom: 2px solid #ddd; color: #d32f2f;">Fail</th>
                                <th style="padding: 8px 10px; text-align: center; border-bottom: 2px solid #ddd; color: #666;">Skip</th>
                                <th style="padding: 8px 10px; text-align: center; border-bottom: 2px solid #ddd;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${historyRows}
                        </tbody>
                    </table>
                </div>
            </div>
            ` : ""}

            <!-- Footer -->
            <div style="text-align: center; padding: 15px; font-size: 11px; color: #999; margin-top: 15px;">
                Sent automatically by Playwright Test Framework
            </div>
        </div>
    </body>
    </html>`;
}

/**
 * Recursively extract test cases from Allure suites.json for email body
 */
function extractTestCasesForEmail(node, results, browser = "", specFile = "") {
    if (!node) return;

    if (node.status && node.time) {
        results.push({
            name: node.name || "Unknown",
            browser: browser || (node.parameters && node.parameters[0]) || "unknown",
            specFile: specFile,
            status: node.status,
            duration: node.time.duration || 0,
        });
        return;
    }

    if (node.children) {
        let currentBrowser = browser;
        let currentSpecFile = specFile;

        if (!browser && node.name && node.name !== "suites") {
            currentBrowser = node.name;
        }
        if (browser && !specFile && node.name) {
            currentSpecFile = node.name;
        }

        for (const child of node.children) {
            extractTestCasesForEmail(child, results, currentBrowser, currentSpecFile);
        }
    }
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
