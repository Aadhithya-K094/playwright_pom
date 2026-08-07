/**
 * Environment Configuration
 *
 * URLs are resolved by BOTH framework (angular/react) and environment (staging/production).
 *
 * Set via environment variables:
 *   UI_FRAMEWORK=angular TEST_ENV=staging npx playwright test
 *   UI_FRAMEWORK=react TEST_ENV=production npx playwright test
 *
 * PowerShell:
 *   $env:UI_FRAMEWORK="react"; $env:TEST_ENV="staging"; npx playwright test
 */

const UI_FRAMEWORK = process.env.UI_FRAMEWORK || "react";
const TEST_ENV = "staging";

// ═══════════════════════════════════════════════════════════════════════════
// URLs by Framework + Environment
// ═══════════════════════════════════════════════════════════════════════════

const frameworkURLs = {

    angular: {
        staging: {
            baseURL: "https://tnemis-staging.tnsed.com",
            loginURL: "https://tnemis-staging.tnsed.com/auth/login?returnUrl=%2Fdashboard",
            apiBaseURL: "https://tnemis-staging.tnsed.com/api"
        },
        production: {
            baseURL: "https://tnemis.tnschools.gov.in",
            loginURL: "https://tnemis.tnschools.gov.in/auth/login?returnUrl=%2Fcomponent%2Freports%2Fnew-report%3Freload%3Dtrue",
            apiBaseURL: "https://tnemis.tnschools.gov.in/api"
        }
    },

    react: {
        staging: {
            baseURL: "https://tnemis-react-staging.tnsed.com",
            loginURL: "https://tnemis-react-staging.tnsed.com/",
            apiBaseURL: "https://tnemis-react-staging.tnsed.com/api"
        },
        production: {
            baseURL: "https://tnemis-react-prod.tnschools.gov.in",
            loginURL: "https://tnemis-react-prod.tnschools.gov.in/auth/login?returnUrl=%2Fdashboard",
            apiBaseURL: "https://tnemis-react-prod.tnschools.gov.in/api"
        }
    }

};

// ═══════════════════════════════════════════════════════════════════════════
// Environment Settings
// ═══════════════════════════════════════════════════════════════════════════

const environments = {

    staging: {
        name: "Staging",
        credentials: {
            username: process.env.TEST_USERNAME || "4028609",
            password: process.env.TEST_PASSWORD || "test@123"
        },
        timeout: 60000,
        navigationTimeout: 90000
    },

    production: {
        name: "Production",
        credentials: {
            username: process.env.TEST_USERNAME || "4028609",
            password: process.env.TEST_PASSWORD || "test@123"
        },
        timeout: 90000,
        navigationTimeout: 120000
    }

};

// ═══════════════════════════════════════════════════════════════════════════
// Resolve current config
// ═══════════════════════════════════════════════════════════════════════════

if (!environments[TEST_ENV]) {
    throw new Error(
        `Unknown environment: "${TEST_ENV}". Available: ${Object.keys(environments).join(", ")}`
    );
}

if (!frameworkURLs[UI_FRAMEWORK]) {
    throw new Error(
        `Unknown framework: "${UI_FRAMEWORK}". Available: ${Object.keys(frameworkURLs).join(", ")}`
    );
}

if (!frameworkURLs[UI_FRAMEWORK][TEST_ENV]) {
    throw new Error(
        `No URLs defined for framework="${UI_FRAMEWORK}" + env="${TEST_ENV}"`
    );
}

// Merge: environment settings + framework-specific URLs
const currentEnv = {
    ...environments[TEST_ENV],
    ...frameworkURLs[UI_FRAMEWORK][TEST_ENV],
    framework: UI_FRAMEWORK
};

console.log(`  Config: framework="${UI_FRAMEWORK}" | env="${TEST_ENV}" | baseURL="${currentEnv.baseURL}"`);

// App-specific configuration for different test types
const appConfig = {

    ui: {
        viewport: { width: 1500, height: 900 },
        screenshotDir: "test-results/screenshots",
        videoDir: "test-results/videos",
        traceDir: "test-results/traces"
    },

    api: {
        retryOnFailure: true,
        maxRetries: 3,
        requestTimeout: 30000
    },

    visual: {
        threshold: 0.2,
        maxDiffPixelRatio: 0.05,
        snapshotDir: "test-results/snapshots"
    },

    performance: {
        maxPageLoadTime: 5000,
        maxFirstContentfulPaint: 2000,
        maxLargestContentfulPaint: 4000
    }

};

export { environments, frameworkURLs, appConfig, currentEnv, TEST_ENV, UI_FRAMEWORK };
export default currentEnv;
