/**
 * Email Reporter - Sends Playwright test report via email
 *
 * Supports:
 * - HTML report as attachment (zipped)
 * - Allure report as attachment (zipped)
 * - Test summary in email body
 * - Multiple recipients
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
 *   (or via npm script: npm run report:email)
 */

import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "../../");

// ─── Configuration ─────────────────────────────────────────────────────────

const config = {
    smtp: {
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER || "",
            pass: process.env.SMTP_PASS || "",
        },
    },
    from: process.env.SMTP_USER || "",
    recipients: (process.env.REPORT_RECIPIENTS || "").split(",").map((e) => e.trim()).filter(Boolean),
    subject: `Playwright Test Report - ${new Date().toLocaleDateString()}`,
};

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Reads the last run results to build a summary
 */
function getTestSummary() {
    const lastRunPath = path.join(ROOT_DIR, "test-results", ".last-run.json");

    if (!fs.existsSync(lastRunPath)) {
        return { status: "unknown", message: "No test results found." };
    }

    const lastRun = JSON.parse(fs.readFileSync(lastRunPath, "utf-8"));
    return {
        status: lastRun.status === "passed" ? "PASSED ✅" : "FAILED ❌",
        message: `Overall Status: ${lastRun.status.toUpperCase()}`,
    };
}

/**
 * Builds HTML email body with test summary
 */
function buildEmailBody(summary) {
    return `
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
            .header { background: #1a73e8; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { border: 1px solid #ddd; border-top: none; padding: 20px; border-radius: 0 0 8px 8px; }
            .status-passed { color: #0d8a0d; font-weight: bold; }
            .status-failed { color: #d32f2f; font-weight: bold; }
            .info-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            .info-table td { padding: 8px 12px; border-bottom: 1px solid #eee; }
            .info-table td:first-child { font-weight: bold; width: 150px; }
            .footer { margin-top: 20px; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <h2 style="margin: 0;">🎭 Playwright Test Report</h2>
            <p style="margin: 5px 0 0;">Automated Test Execution Summary</p>
        </div>
        <div class="content">
            <h3>Test Execution Summary</h3>
            <table class="info-table">
                <tr>
                    <td>Status</td>
                    <td class="${summary.status.includes("PASSED") ? "status-passed" : "status-failed"}">
                        ${summary.status}
                    </td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>${new Date().toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Environment</td>
                    <td>${process.env.TEST_ENV || "staging"}</td>
                </tr>
                <tr>
                    <td>Node Version</td>
                    <td>${process.version}</td>
                </tr>
                <tr>
                    <td>Platform</td>
                    <td>${process.platform}</td>
                </tr>
            </table>

            <p><strong>Note:</strong> The detailed HTML report is attached to this email. 
            Open <code>index.html</code> from the attachment to view the full interactive report.</p>
        </div>
        <div class="footer">
            <p>This is an automated email sent by the Playwright test framework.</p>
        </div>
    </body>
    </html>`;
}

/**
 * Collects report file attachments
 */
function getAttachments() {
    const attachments = [];

    // Attach the Playwright HTML report
    const htmlReportPath = path.join(ROOT_DIR, "playwright-report", "index.html");
    if (fs.existsSync(htmlReportPath)) {
        attachments.push({
            filename: "playwright-report.html",
            path: htmlReportPath,
        });
    }

    // Attach the Allure mail export if available
    const allureMailPath = path.join(ROOT_DIR, "allure-report", "export", "mail.html");
    if (fs.existsSync(allureMailPath)) {
        attachments.push({
            filename: "allure-summary.html",
            path: allureMailPath,
        });
    }

    return attachments;
}

// ─── Main ──────────────────────────────────────────────────────────────────

async function sendReport() {
    // Validate configuration
    if (!config.smtp.auth.user || !config.smtp.auth.pass) {
        console.error("❌ Error: SMTP_USER and SMTP_PASS environment variables are required.");
        console.error("\nSet them before running:");
        console.error("  $env:SMTP_USER = 'your-email@gmail.com'");
        console.error("  $env:SMTP_PASS = 'your-app-password'");
        console.error("  $env:REPORT_RECIPIENTS = 'recipient1@email.com,recipient2@email.com'");
        process.exit(1);
    }

    if (config.recipients.length === 0) {
        console.error("❌ Error: REPORT_RECIPIENTS environment variable is required.");
        console.error("  $env:REPORT_RECIPIENTS = 'recipient1@email.com,recipient2@email.com'");
        process.exit(1);
    }

    console.log("📧 Preparing to send test report email...");
    console.log(`   From: ${config.from}`);
    console.log(`   To: ${config.recipients.join(", ")}`);

    // Create transporter
    const transporter = nodemailer.createTransport(config.smtp);

    // Verify SMTP connection
    try {
        await transporter.verify();
        console.log("✅ SMTP connection verified.");
    } catch (error) {
        console.error("❌ SMTP connection failed:", error.message);
        process.exit(1);
    }

    // Build email
    const summary = getTestSummary();
    const attachments = getAttachments();

    console.log(`   Attachments: ${attachments.length} file(s)`);
    attachments.forEach((a) => console.log(`     - ${a.filename}`));

    const mailOptions = {
        from: `"Playwright Reports" <${config.from}>`,
        to: config.recipients.join(", "),
        subject: config.subject,
        html: buildEmailBody(summary),
        attachments,
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`\n✅ Report email sent successfully!`);
        console.log(`   Message ID: ${info.messageId}`);
    } catch (error) {
        console.error("❌ Failed to send email:", error.message);
        process.exit(1);
    }
}

// Run if executed directly
sendReport();
