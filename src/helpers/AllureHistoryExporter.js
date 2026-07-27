/**
 * Allure History Exporter
 *
 * Exports Allure report data to persistent CSV files that accumulate over time.
 * Each test run appends new rows — previous data is NEVER erased.
 *
 * Generated files (in report-history/):
 *   - behaviors.csv  — results grouped by epic/feature/story
 *   - categories.csv — results grouped by category (defects, etc.)
 *   - suites.csv     — individual test results with suite/browser info
 *
 * Each row includes RUN_ID and RUN_TIMESTAMP so you can track history.
 *
 * Usage:
 *   node src/helpers/AllureHistoryExporter.js
 *   npm run report:history
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "../../");

const ALLURE_DATA_DIR = path.join(ROOT_DIR, "allure-report", "data");
const ALLURE_WIDGETS_DIR = path.join(ROOT_DIR, "allure-report", "widgets");
const HISTORY_DIR = path.join(ROOT_DIR, "report-history");

// Generate a unique run ID based on timestamp
const RUN_TIMESTAMP = new Date().toISOString().replace(/[:.]/g, "-");
const RUN_ID = `run_${Date.now()}`;

// ─── Main ──────────────────────────────────────────────────────────────────

function exportHistory() {
    console.log("📊 Allure History Exporter");
    console.log(`   Run ID: ${RUN_ID}`);
    console.log(`   Timestamp: ${RUN_TIMESTAMP}\n`);

    // Ensure history directory exists
    if (!fs.existsSync(HISTORY_DIR)) {
        fs.mkdirSync(HISTORY_DIR, { recursive: true });
    }

    // Check if allure report exists
    if (!fs.existsSync(ALLURE_DATA_DIR)) {
        console.error("❌ allure-report/data not found. Run 'npm run allure:generate' first.");
        process.exit(1);
    }

    exportSuites();
    exportBehaviors();
    exportCategories();

    console.log("\n✅ History export complete!");
    console.log(`   Files saved to: report-history/`);
}

// ─── Suites Export ─────────────────────────────────────────────────────────

function exportSuites() {
    const suitesPath = path.join(ALLURE_DATA_DIR, "suites.csv");
    const historyPath = path.join(HISTORY_DIR, "suites.csv");

    if (!fs.existsSync(suitesPath)) {
        console.log("   ⏭️ suites.csv — no data");
        return;
    }

    const content = fs.readFileSync(suitesPath, "utf-8").trim();
    const lines = content.split("\n");

    if (lines.length < 2) {
        console.log("   ⏭️ suites.csv — empty");
        return;
    }

    const header = lines[0];
    const dataRows = lines.slice(1);

    // If history file doesn't exist, create with header + RUN_ID, RUN_TIMESTAMP columns
    if (!fs.existsSync(historyPath)) {
        const newHeader = `"RUN_ID","RUN_TIMESTAMP",${header}`;
        const newRows = dataRows.map(row => `"${RUN_ID}","${RUN_TIMESTAMP}",${row}`);
        fs.writeFileSync(historyPath, [newHeader, ...newRows].join("\n") + "\n", "utf-8");
    } else {
        // Append new rows (no header)
        const newRows = dataRows.map(row => `"${RUN_ID}","${RUN_TIMESTAMP}",${row}`);
        fs.appendFileSync(historyPath, newRows.join("\n") + "\n", "utf-8");
    }

    console.log(`   ✅ suites.csv — appended ${dataRows.length} test result(s)`);
}

// ─── Behaviors Export ──────────────────────────────────────────────────────

function exportBehaviors() {
    const behaviorsPath = path.join(ALLURE_DATA_DIR, "behaviors.csv");
    const historyPath = path.join(HISTORY_DIR, "behaviors.csv");

    // Also read from widgets for richer data
    const widgetPath = path.join(ALLURE_WIDGETS_DIR, "summary.json");

    if (!fs.existsSync(behaviorsPath) && !fs.existsSync(widgetPath)) {
        console.log("   ⏭️ behaviors.csv — no data");
        return;
    }

    // Use summary.json for overall stats as behaviors.csv can be sparse
    let passed = 0, failed = 0, broken = 0, skipped = 0, total = 0, duration = 0;

    if (fs.existsSync(widgetPath)) {
        const summary = JSON.parse(fs.readFileSync(widgetPath, "utf-8"));
        passed = summary.statistic.passed;
        failed = summary.statistic.failed;
        broken = summary.statistic.broken;
        skipped = summary.statistic.skipped;
        total = summary.statistic.total;
        duration = summary.time.sumDuration || 0;
    }

    const header = `"RUN_ID","RUN_TIMESTAMP","PASSED","FAILED","BROKEN","SKIPPED","TOTAL","DURATION_MS"`;
    const dataRow = `"${RUN_ID}","${RUN_TIMESTAMP}","${passed}","${failed}","${broken}","${skipped}","${total}","${duration}"`;

    if (!fs.existsSync(historyPath)) {
        fs.writeFileSync(historyPath, header + "\n" + dataRow + "\n", "utf-8");
    } else {
        fs.appendFileSync(historyPath, dataRow + "\n", "utf-8");
    }

    console.log(`   ✅ behaviors.csv — appended run summary (${passed} passed, ${failed} failed, ${total} total)`);
}

// ─── Categories Export ─────────────────────────────────────────────────────

function exportCategories() {
    const historyPath = path.join(HISTORY_DIR, "categories.csv");

    // Read detailed suites.json for individual test case data
    const suitesJsonPath = path.join(ALLURE_DATA_DIR, "suites.json");

    if (!fs.existsSync(suitesJsonPath)) {
        console.log("   ⏭️ categories.csv — no data");
        return;
    }

    const suitesJson = JSON.parse(fs.readFileSync(suitesJsonPath, "utf-8"));

    // Flatten the tree structure to extract individual test cases
    const testCases = [];
    extractTestCases(suitesJson, testCases);

    if (testCases.length === 0) {
        console.log("   ⏭️ categories.csv — no test cases found");
        return;
    }

    const header = `"RUN_ID","RUN_TIMESTAMP","TEST_NAME","BROWSER","SPEC_FILE","STATUS","CATEGORY","DURATION_MS","FLAKY","RETRIES"`;

    const dataRows = testCases.map(tc => {
        // Classify into category
        let category;
        switch (tc.status) {
            case "passed": category = "Passed Tests"; break;
            case "failed": category = "Product Defects"; break;
            case "broken": category = "Test/Infrastructure Issues"; break;
            case "skipped": category = "Skipped Tests"; break;
            default: category = "Unknown";
        }
        return `"${RUN_ID}","${RUN_TIMESTAMP}","${tc.name}","${tc.browser}","${tc.specFile}","${tc.status}","${category}","${tc.duration}","${tc.flaky}","${tc.retries}"`;
    });

    if (!fs.existsSync(historyPath)) {
        fs.writeFileSync(historyPath, [header, ...dataRows].join("\n") + "\n", "utf-8");
    } else {
        fs.appendFileSync(historyPath, dataRows.join("\n") + "\n", "utf-8");
    }

    // Print category summary
    const passed = testCases.filter(t => t.status === "passed").length;
    const failed = testCases.filter(t => t.status === "failed").length;
    const broken = testCases.filter(t => t.status === "broken").length;
    const skipped = testCases.filter(t => t.status === "skipped").length;

    console.log(`   ✅ categories.csv — appended ${testCases.length} test(s) [${passed} passed, ${failed} failed, ${broken} broken, ${skipped} skipped]`);
}

/**
 * Recursively extract test cases from Allure suites.json tree structure
 */
function extractTestCases(node, results, browser = "", specFile = "") {
    if (!node) return;

    // If this node has a "uid" and "status", it's a test case leaf
    if (node.status && node.time) {
        results.push({
            name: node.name || "Unknown",
            browser: browser || (node.parameters && node.parameters[0]) || "unknown",
            specFile: specFile,
            status: node.status,
            duration: node.time.duration || 0,
            flaky: node.flaky || false,
            retries: node.retriesCount || 0,
        });
        return;
    }

    // If this node has children, recurse
    if (node.children) {
        // Determine browser/specFile from the hierarchy
        let currentBrowser = browser;
        let currentSpecFile = specFile;

        // First level under root = browser name
        if (!browser && node.name && node.name !== "suites") {
            currentBrowser = node.name;
        }
        // Second level = spec file
        if (browser && !specFile && node.name) {
            currentSpecFile = node.name;
        }

        for (const child of node.children) {
            extractTestCases(child, results, currentBrowser, currentSpecFile);
        }
    }
}

// ─── Run ───────────────────────────────────────────────────────────────────

exportHistory();
