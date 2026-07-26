/**
 * Global Teardown
 * 
 * Runs once after all tests complete. Handles:
 * 1. Cleanup of temporary auth state
 * 2. Test run summary logging
 * 3. Optional: cleanup of old artifacts
 */

import { TEST_ENV, currentEnv } from "./config/index.js";
import fs from "fs";
import path from "path";

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

export default globalTeardown;
