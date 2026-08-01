/**
 * Locators by Environment + Framework
 *
 * Each environment (dev, staging, production) has BOTH Angular and React locators.
 * The framework is selected via the UI_FRAMEWORK environment variable.
 *
 * Set framework:
 *   UI_FRAMEWORK=angular npx playwright test   → uses Angular XPaths
 *   UI_FRAMEWORK=react npx playwright test     → uses React selectors
 *
 * Defaults to "angular" if not specified.
 *
 * Usage in page objects:
 *   import { getLocators } from "./locators.js";
 *   const loc = getLocators();
 *   this.username = page.locator(loc.login.username);
 */
import { TEST_ENV } from "../../config/index.js";

// ═══════════════════════════════════════════════════════════════════════════
// FRAMEWORK SELECTION
// ═══════════════════════════════════════════════════════════════════════════

const UI_FRAMEWORK = process.env.UI_FRAMEWORK || "react";

// ═══════════════════════════════════════════════════════════════════════════
// LOCATORS
// Structure: page → environment → framework → selectors
// ═══════════════════════════════════════════════════════════════════════════

const locators = {

    // ─── Login Page ────────────────────────────────────────────────────

    login: {

        dev: {
            angular: {
                logo: "//img[@class='image']",
                wrapper: "//div[@class='auth-side-wrapper']",
                heading: "//h5[@class='headingcenter1 text-muted fw-normal mb-4 text-center']",
                username: "//input[@placeholder='User Name']",
                password: "//input[@placeholder='Password']",
                loginButton: "(//button[@type='submit'])[1]",
                eyeIcon: "//i[@class='pi pi-eye']",
                usernameLabel: "(//label[@class='form-label'])[1]",
                passwordLabel: "(//label[@class='form-label'])[2]",
                forgotPassword: "(//button[@type='submit'])[2]"
            },
            react: {
                logo: "[data-testid='login-logo']",
                wrapper: "[data-testid='auth-wrapper']",
                heading: "[data-testid='login-heading']",
                username: "input[name='username']",
                password: "input[name='password']",
                loginButton: "button[type='submit']",
                eyeIcon: "[data-testid='toggle-password']",
                usernameLabel: "label[for='username']",
                passwordLabel: "label[for='password']",
                forgotPassword: "[data-testid='forgot-password-btn']"
            }
        },

        staging: {
            angular: {
                logo: "//img[@class='image']",
                wrapper: "//div[@class='auth-side-wrapper']",
                heading: "//h5[@class='headingcenter1 text-muted fw-normal mb-4 text-center']",
                username: "//input[@placeholder='User Name']",
                password: "//input[@placeholder='Password']",
                loginButton: "(//button[@type='submit'])[1]",
                eyeIcon: "//i[@class='pi pi-eye']",
                usernameLabel: "(//label[@class='form-label'])[1]",
                passwordLabel: "(//label[@class='form-label'])[2]",
                forgotPassword: "(//button[@type='submit'])[2]"
            },
            react: {
                logo: "[data-testid='login-logo']",
                wrapper: "[data-testid='auth-wrapper']",
                heading: "[data-testid='login-heading']",
                username: "input[name='username']",
                password: "input[name='password']",
                loginButton: "button[type='submit']",
                eyeIcon: "[data-testid='toggle-password']",
                usernameLabel: "label[for='username']",
                passwordLabel: "label[for='password']",
                forgotPassword: "[data-testid='forgot-password-btn']"
            }
        },

        production: {
            angular: {
                logo: "//img[@class='image']",
                wrapper: "//div[@class='auth-side-wrapper']",
                heading: "//h5[@class='headingcenter1 text-muted fw-normal mb-4 text-center']",
                username: "//input[@placeholder='User Name']",
                password: "//input[@placeholder='Password']",
                loginButton: "(//button[@type='submit'])[1]",
                eyeIcon: "//i[@class='pi pi-eye']",
                usernameLabel: "(//label[@class='form-label'])[1]",
                passwordLabel: "(//label[@class='form-label'])[2]",
                forgotPassword: "(//button[@type='submit'])[2]"
            },
            react: {
                logo: "[data-testid='login-logo']",
                wrapper: "[data-testid='auth-wrapper']",
                heading: "[data-testid='login-heading']",
                username: "input[name='username']",
                password: "input[name='password']",
                loginButton: "button[type='submit']",
                eyeIcon: "[data-testid='toggle-password']",
                usernameLabel: "label[for='username']",
                passwordLabel: "label[for='password']",
                forgotPassword: "[data-testid='forgot-password-btn']"
            }
        }

    },

    // ─── Dashboard Page ────────────────────────────────────────────────

    dashboard: {

        dev: {
            angular: {
                username: "//input[@placeholder='User Name']",
                password: "//input[@placeholder='Password']",
                eyeIcon: "//i[@class='pi pi-eye']",
                loginButton: "(//button[@type='submit'])[1]",
                logo1: "//div[@class='logo-area d-flex align-items-center']",
                logo2: "#profileDropdown",
                dashboardTitle: "TN EMIS",
                menuLocator: ".menu-title",
                profile: "//i[@class='pi pi-chevron-down user-chevron ']",
                logout: "Log Out",
                sidebar: "//div[contains(@class,'sidebar')]",
                notifications: "//i[contains(@class,'pi-bell')]"
            },
            react: {
                username: "input[name='username']",
                password: "input[name='password']",
                eyeIcon: "[data-testid='toggle-password']",
                loginButton: "button[type='submit']",
                logo1: "[data-testid='gov-logo']",
                logo2: "[data-testid='profile-dropdown']",
                dashboardTitle: "TN EMIS",
                menuLocator: "[data-testid='menu-item']",
                profile: "[data-testid='profile-icon']",
                logout: "[data-testid='logout-btn']",
                sidebar: "[data-testid='sidebar']",
                notifications: "[data-testid='notifications']"
            }
        },

        staging: {
            angular: {
                username: "//input[@placeholder='User Name']",
                password: "//input[@placeholder='Password']",
                eyeIcon: "//i[@class='pi pi-eye']",
                loginButton: "(//button[@type='submit'])[1]",
                logo1: "//div[@class='logo-area d-flex align-items-center']",
                logo2: "#profileDropdown",
                dashboardTitle: "TN EMIS",
                menuLocator: ".menu-title",
                profile: "//i[@class='pi pi-chevron-down user-chevron ']",
                logout: "Log Out",
                sidebar: "//div[contains(@class,'sidebar')]",
                notifications: "//i[contains(@class,'pi-bell')]"
            },
            react: {
                username: "input[name='username']",
                password: "input[name='password']",
                eyeIcon: "[data-testid='toggle-password']",
                loginButton: "button[type='submit']",
                logo1: "[data-testid='gov-logo']",
                logo2: "[data-testid='profile-dropdown']",
                dashboardTitle: "TN EMIS",
                menuLocator: "[data-testid='menu-item']",
                profile: "[data-testid='profile-icon']",
                logout: "[data-testid='logout-btn']",
                sidebar: "[data-testid='sidebar']",
                notifications: "[data-testid='notifications']"
            }
        },

        production: {
            angular: {
                username: "//input[@placeholder='User Name']",
                password: "//input[@placeholder='Password']",
                eyeIcon: "//i[@class='pi pi-eye']",
                loginButton: "(//button[@type='submit'])[1]",
                logo1: "//div[@class='logo-area d-flex align-items-center']",
                logo2: "#profileDropdown",
                dashboardTitle: "TN EMIS",
                menuLocator: ".menu-title",
                profile: "//i[@class='pi pi-chevron-down user-chevron ']",
                logout: "Log Out",
                sidebar: "//div[contains(@class,'sidebar')]",
                notifications: "//i[contains(@class,'pi-bell')]"
            },
            react: {
                username: "input[name='username']",
                password: "input[name='password']",
                eyeIcon: "[data-testid='toggle-password']",
                loginButton: "button[type='submit']",
                logo1: "[data-testid='gov-logo']",
                logo2: "[data-testid='profile-dropdown']",
                dashboardTitle: "TN EMIS",
                menuLocator: "[data-testid='menu-item']",
                profile: "[data-testid='profile-icon']",
                logout: "[data-testid='logout-btn']",
                sidebar: "[data-testid='sidebar']",
                notifications: "[data-testid='notifications']"
            }
        }

    },

    // ─── Forgot Password Page ──────────────────────────────────────────

    forgotPassword: {

        dev: {
            angular: {
                forgotPassword: "(//button[@type='submit'])[2]",
                userId: "//input[@type='text']",
                requestOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[1]",
                otp: "(//input[@type='text'])[2]",
                submitOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[2]",
                newPassword: "Enter the new password",
                submit: "Submit",
                backToLogin: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[3]"
            },
            react: {
                forgotPassword: "[data-testid='forgot-password-btn']",
                userId: "input[name='userId']",
                requestOtp: "[data-testid='request-otp-btn']",
                otp: "input[name='otp']",
                submitOtp: "[data-testid='submit-otp-btn']",
                newPassword: "input[name='newPassword']",
                submit: "[data-testid='submit-btn']",
                backToLogin: "[data-testid='back-to-login-btn']"
            }
        },

        staging: {
            angular: {
                forgotPassword: "(//button[@type='submit'])[2]",
                userId: "//input[@type='text']",
                requestOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[1]",
                otp: "(//input[@type='text'])[2]",
                submitOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[2]",
                newPassword: "Enter the new password",
                submit: "Submit",
                backToLogin: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[3]"
            },
            react: {
                forgotPassword: "[data-testid='forgot-password-btn']",
                userId: "input[name='userId']",
                requestOtp: "[data-testid='request-otp-btn']",
                otp: "input[name='otp']",
                submitOtp: "[data-testid='submit-otp-btn']",
                newPassword: "input[name='newPassword']",
                submit: "[data-testid='submit-btn']",
                backToLogin: "[data-testid='back-to-login-btn']"
            }
        },

        production: {
            angular: {
                forgotPassword: "(//button[@type='submit'])[2]",
                userId: "//input[@type='text']",
                requestOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[1]",
                otp: "(//input[@type='text'])[2]",
                submitOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[2]",
                newPassword: "Enter the new password",
                submit: "Submit",
                backToLogin: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[3]"
            },
            react: {
                forgotPassword: "[data-testid='forgot-password-btn']",
                userId: "input[name='userId']",
                requestOtp: "[data-testid='request-otp-btn']",
                otp: "input[name='otp']",
                submitOtp: "[data-testid='submit-otp-btn']",
                newPassword: "input[name='newPassword']",
                submit: "[data-testid='submit-btn']",
                backToLogin: "[data-testid='back-to-login-btn']"
            }
        }

    }

};

// ═══════════════════════════════════════════════════════════════════════════
// RESOLVER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get locators for the current environment + framework combination.
 *
 * Resolution: TEST_ENV (dev/staging/production) + UI_FRAMEWORK (angular/react)
 *
 * @param {string} [forceFramework] - Override: "angular" or "react"
 * @returns {Object} Resolved locators for all pages
 *
 * @example
 *   // Auto-detect (uses TEST_ENV + UI_FRAMEWORK env vars)
 *   const loc = getLocators();
 *
 *   // Force React locators on staging
 *   const loc = getLocators("react");
 *
 * Run commands:
 *   UI_FRAMEWORK=angular TEST_ENV=staging npx playwright test
 *   UI_FRAMEWORK=react TEST_ENV=production npx playwright test
 *
 * PowerShell:
 *   $env:UI_FRAMEWORK="angular"; $env:TEST_ENV="staging"; npx playwright test
 *   $env:UI_FRAMEWORK="react"; $env:TEST_ENV="production"; npx playwright test
 */
export function getLocators(forceFramework) {

    const env = TEST_ENV || "staging";
    const framework = forceFramework || UI_FRAMEWORK;

    console.log(`  Locators: env="${env}" | framework="${framework}"`);

    const loginLoc = (locators.login[env] && locators.login[env][framework]) || locators.login.staging.angular;
    const dashboardLoc = (locators.dashboard[env] && locators.dashboard[env][framework]) || locators.dashboard.staging.angular;
    const forgotPasswordLoc = (locators.forgotPassword[env] && locators.forgotPassword[env][framework]) || locators.forgotPassword.staging.angular;
    const blockUserLoc = (locators.blockUser[env] && locators.blockUser[env][framework]) || locators.blockUser.staging.angular;

    return {
        login: loginLoc,
        dashboard: dashboardLoc,
        forgotPassword: forgotPasswordLoc,
        blockUser: blockUserLoc
    };
}

/**
 * Get current framework and environment info.
 */
export function getLocatorInfo() {
    return {
        environment: TEST_ENV,
        framework: UI_FRAMEWORK
    };
}

export { locators, UI_FRAMEWORK };
export default getLocators;