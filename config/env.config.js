/**
 * Environment Configuration
 *
 * Supports multiple environments and app configurations.
 * Set the environment via the TEST_ENV variable:
 *   TEST_ENV=staging npx playwright test
 *   TEST_ENV=production npx playwright test
 *   TEST_ENV=dev npx playwright test
 *
 * Defaults to "staging" if not specified.
 */

const environments = {

    dev: {
        name: "Development",
        baseURL: "https://tnemis-dev.tnsed.com",
        loginURL: "https://tnemis-dev.tnsed.com/auth/login?returnUrl=%2Fdashboard",
        apiBaseURL: "https://tnemis-dev.tnsed.com/api",
        credentials: {
            username: process.env.TEST_USERNAME || "4028609",
            password: process.env.TEST_PASSWORD || "Test@123"
        },
        timeout: 60000,
        navigationTimeout: 90000
    },

    staging: {
        name: "Staging",
        baseURL: "https://tnemis-staging.tnsed.com",
        loginURL: "https://tnemis-staging.tnsed.com/auth/login?returnUrl=%2Fdashboard",
        apiBaseURL: "https://tnemis-staging.tnsed.com/api",
        credentials: {
            username: process.env.TEST_USERNAME || "4028609",
            password: process.env.TEST_PASSWORD || "Test@123"
        },
        timeout: 60000,
        navigationTimeout: 90000
    },

    production: {
        name: "Production",
        baseURL: "https://tnemis.tnsed.com",
        loginURL: "https://tnemis.tnsed.com/auth/login?returnUrl=%2Fdashboard",
        apiBaseURL: "https://tnemis.tnsed.com/api",
        credentials: {
            username: process.env.TEST_USERNAME || "",
            password: process.env.TEST_PASSWORD || ""
        },
        timeout: 90000,
        navigationTimeout: 120000
    }

};

// App-specific configuration for different test types
const appConfig = {

    // UI test settings
    ui: {
        viewport: { width: 1500, height: 900 },
        screenshotDir: "test-results/screenshots",
        videoDir: "test-results/videos",
        traceDir: "test-results/traces"
    },

    // API test settings
    api: {
        retryOnFailure: true,
        maxRetries: 3,
        requestTimeout: 30000
    },

    // Visual regression settings
    visual: {
        threshold: 0.2,
        maxDiffPixelRatio: 0.05,
        snapshotDir: "test-results/snapshots"
    },

    // Performance test settings
    performance: {
        maxPageLoadTime: 5000,
        maxFirstContentfulPaint: 2000,
        maxLargestContentfulPaint: 4000
    }

};

// Resolve current environment
const TEST_ENV = process.env.TEST_ENV || "staging";

if (!environments[TEST_ENV]) {
    throw new Error(
        `Unknown environment: "${TEST_ENV}". Available: ${Object.keys(environments).join(", ")}`
    );
}

const currentEnv = environments[TEST_ENV];

export { environments, appConfig, currentEnv, TEST_ENV };
export default currentEnv;
