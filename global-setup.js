/**
 * Global Setup
 * 
 * Runs once before all tests. Handles:
 * 1. Environment validation and logging
 * 2. Authenticated state creation (storageState)
 * 3. Directory setup for artifacts
 * 4. API health check (optional)
 */

import { chromium } from "@playwright/test";
import { currentEnv, TEST_ENV, appConfig } from "./config/index.js";
import fs from "fs";
import path from "path";

const AUTH_STATE_PATH = path.resolve("test-results/.auth/storageState.json");

async function globalSetup(config) {

    console.log("\n══════════════════════════════════════════════");
    console.log(`  Global Setup — Environment: ${currentEnv.name} (${TEST_ENV})`);
    console.log(`  Base URL: ${currentEnv.baseURL}`);
    console.log(`  Timestamp: ${new Date().toISOString()}`);
    console.log("══════════════════════════════════════════════\n");

    // 1. Create required directories
    ensureDirectories();

    // 2. Validate environment credentials
    validateCredentials();

    // 3. Create authenticated browser state
    await createAuthState(config);

    // 4. Optional: API health check
    await healthCheck();

    console.log("\n✔ Global setup complete. Starting tests...\n");
}

/**
 * Ensure output directories exist for screenshots, videos, traces, etc.
 */
function ensureDirectories() {

    const dirs = [
        appConfig.ui.screenshotDir,
        appConfig.ui.videoDir,
        appConfig.ui.traceDir,
        appConfig.visual.snapshotDir,
        "test-results/.auth"
    ];

    for (const dir of dirs) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`  ✔ Created directory: ${dir}`);
        }
    }
}

/**
 * Validate that credentials are present for the current environment.
 */
function validateCredentials() {

    const { username, password } = currentEnv.credentials;

    if (!username || !password) {
        console.warn(
            `  ⚠ WARNING: Missing credentials for "${TEST_ENV}" environment.\n` +
            `    Set TEST_USERNAME and TEST_PASSWORD environment variables.\n` +
            `    Auth state will NOT be created — tests requiring login may fail.`
        );
        return false;
    }

    console.log(`  ✔ Credentials available for user: ${username}`);
    return true;
}

/**
 * Log into the application and save browser storage state.
 * This allows tests to reuse the logged-in session without repeating login.
 */
async function createAuthState(config) {

    const { username, password } = currentEnv.credentials;

    if (!username || !password) {
        console.log("  ⏭ Skipping auth state — no credentials provided.");
        return;
    }

    console.log("  ⏳ Creating authenticated state...");

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: appConfig.ui.viewport
    });
    const page = await context.newPage();

    try {

        // Navigate to login page
        await page.goto(currentEnv.loginURL, {
            waitUntil: "load",
            timeout: currentEnv.navigationTimeout
        });

        // Fill login form
        await page.getByRole("textbox", { name: "User Name" }).fill(username);
        await page.getByRole("textbox", { name: "Password" }).fill(password);

        // Submit login
        await Promise.all([
            page.waitForLoadState("networkidle"),
            page.getByRole("button", { name: "Login" }).click()
        ]);

        // Wait for navigation away from login page (any post-login page)
        await page.waitForFunction(
            () => !window.location.href.includes("/auth/login"),
            { timeout: currentEnv.timeout }
        );
        await page.waitForLoadState("networkidle");

        // Save authenticated state
        await context.storageState({ path: AUTH_STATE_PATH });

        console.log(`  ✔ Auth state saved to: ${AUTH_STATE_PATH}`);

    } catch (error) {

        console.error(`  ✖ Auth state creation failed: ${error.message}`);
        console.error("    Tests requiring authentication may fail.");

        // Save a screenshot for debugging
        const errorScreenshot = "test-results/screenshots/global-setup-error.png";
        await page.screenshot({ path: errorScreenshot, fullPage: true });
        console.error(`    Debug screenshot: ${errorScreenshot}`);

    } finally {
        await browser.close();
    }
}

/**
 * Optional health check — verify the app is reachable before running tests.
 */
async function healthCheck() {

    console.log("  ⏳ Running health check...");

    try {

        const response = await fetch(currentEnv.baseURL, {
            method: "GET",
            signal: AbortSignal.timeout(15000)
        });

        if (response.ok || response.status === 302) {
            console.log(`  ✔ Health check passed (status: ${response.status})`);
        } else {
            console.warn(`  ⚠ Health check returned status: ${response.status}`);
        }

    } catch (error) {
        console.warn(`  ⚠ Health check failed: ${error.message}`);
        console.warn("    The application may be unreachable. Tests might fail.");
    }
}

export default globalSetup;
