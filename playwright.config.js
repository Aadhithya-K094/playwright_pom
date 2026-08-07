/**
 * Playwright Configuration
 *
 * Supports:
 * - Multiple environments (dev, staging, production) via TEST_ENV
 * - Multiple test types: UI (e2e), API, Visual, Mobile
 * - All major browsers + mobile viewports
 * - Auth setup project with storageState reuse
 *
 * Usage:
 *   npx playwright test                            → all projects, staging env
 *   TEST_ENV=production npx playwright test        → all projects, production env
 *   npx playwright test --project=chromium         → desktop Chrome only
 *   npx playwright test --project=api              → API tests only
 *   npx playwright test --project=mobile-chrome    → mobile Chrome only
 */
import { defineConfig, devices } from "@playwright/test";
import { currentEnv, appConfig, TEST_ENV } from "./config/index.js";
import fs from "fs";

const AUTH_STATE_PATH = "test-results/.auth/storageState.json";

// Only use storageState if the file exists (created by auth setup project)
const storageState = fs.existsSync(AUTH_STATE_PATH) ? AUTH_STATE_PATH : undefined;

export default defineConfig({

    // ─── Test Discovery ────────────────────────────────────────────────

    testDir: "./tests",

    // ─── Execution ─────────────────────────────────────────────────────

    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    timeout: currentEnv.timeout,

    // ─── Reporters ─────────────────────────────────────────────────────

    reporter: [
        ["list", { printSteps: true }],
        ["html", { open: "never" }],
        ["allure-playwright", {
            detail: true,
            outputFolder: "allure-results",
            suiteTitle: true,
            environmentInfo: {
                Environment: TEST_ENV,
                BaseURL: currentEnv.loginURL,
                NodeVersion: process.version,
                OS: process.platform
            }
        }],
        ...(process.env.CI ? [["junit", { outputFile: "test-results/junit-results.xml" }]] : [])
    ],

    // ─── Global Setup / Teardown ───────────────────────────────────────

    globalSetup: "./global-setup.js",
    globalTeardown: "./global-teardown.js",

    // ─── Shared Settings ───────────────────────────────────────────────

    use: {
        baseURL: currentEnv.loginURL,
        actionTimeout: currentEnv.timeout,
        navigationTimeout: currentEnv.navigationTimeout,
        headless: true, //!!process.env.CI,
        trace: "on",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        extraHTTPHeaders: {
            "Accept": "application/json"
        }
    },

    // ─── Expect ────────────────────────────────────────────────────────

    expect: {
        timeout: 10000,
        toHaveScreenshot: {
            threshold: appConfig.visual.threshold,
            maxDiffPixelRatio: appConfig.visual.maxDiffPixelRatio
        }
    },

    // ─── Projects ──────────────────────────────────────────────────────

    projects: [

        // ── Auth Setup (run manually: --project=setup) ──

        {
            name: "setup",
            testDir: "./tests/setup",
            testMatch: /.*\.setup\.js/,
            use: { headless: true }
        },

        // ── Desktop Browsers (UI / E2E) ──

        {
            name: "chromium",
            testDir: "./tests/e2e",
            use: {
                ...devices["Desktop Chrome"],
                viewport: appConfig.ui.viewport,
                storageState
            }
        },

        // {
        //     name: "firefox",
        //     testDir: "./tests/e2e",
        //     use: {
        //         ...devices["Desktop Firefox"],
        //         viewport: appConfig.ui.viewport,
        //         storageState
        //     }
        // },

        // {
        //     name: "webkit",
        //     testDir: "./tests/e2e",
        //     use: {
        //         ...devices["Desktop Safari"],
        //         viewport: appConfig.ui.viewport,
        //         storageState
        //     }
        // },

        // ── Mobile Browsers ──

        {
            name: "mobile-chrome",
            testDir: "./tests/e2e",
            use: {
                ...devices["Moto G4"],
                storageState
            }
        },

        {
            name: "mobile-safari",
            testDir: "./tests/e2e",
            use: {
                ...devices["iPhone 14"],
                storageState
            }
        },

        // ── Tablet ──

        {
            name: "tablet",
            testDir: "./tests/e2e",
            use: {
                ...devices["iPad Pro 11"],
                storageState
            }
        },

        // ── API Tests ──

        {
            name: "api",
            testDir: "./tests/api",
            testMatch: /.*\.api\.spec\.js/,
            use: {
                baseURL: currentEnv.apiBaseURL,
                extraHTTPHeaders: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
        },

        // ── Visual Regression ──

        {
            name: "visual",
            testDir: "./tests/visual",
            testMatch: /.*\.visual\.spec\.js/,
            use: {
                ...devices["Desktop Chrome"],
                viewport: appConfig.ui.viewport,
                storageState
            }
        }

    ]

});
