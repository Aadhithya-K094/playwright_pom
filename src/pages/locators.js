/**
 * Locators by Environment + Framework
 *
 * Each environment (dev, staging, production) has BOTH Angular and React locators.
 * Set framework via UI_FRAMEWORK env variable:
 *
 *   $env:UI_FRAMEWORK="angular"; npx playwright test
 *   $env:UI_FRAMEWORK="react"; npx playwright test
 *
 * Defaults to "angular" if not specified.
 *
 * Usage in page objects:
 *   import { getLocators } from "./locators.js";
 *   const loc = getLocators();
 *   this.username = page.locator(loc.login.username);
 */
import { TEST_ENV, UI_FRAMEWORK } from "../../config/index.js";

const locators = {

// ___________________________________login page___________________________________

    login: {
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
            },
            react: {
                logo: '//img[@class="image"]',
                wrapper: '//div[@class="auth-side-wrapper"]',
                heading:'//h5[@class="headingcenter1 text-muted fw-normal mb-4 text-center"]',
                username: '//input[@id="loginUsername"]',
                password: '//input[@id="loginPassword"]',
                loginButton: '//button[@type="submit"]',
                eyeIcon: '//i[@class="pi pi-eye-slash position-absolute top-50 end-0 translate-middle-y me-3"]',
                usernameLabel: '//label[@for="loginUsername"]',
                passwordLabel: '//label[@for="loginPassword"]',
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
            },
            react: {
               logo: '//img[@class="image"]',
                wrapper: '//div[@class="auth-side-wrapper"]',
                heading:'//h5[@class="headingcenter1 text-muted fw-normal mb-4 text-center"]',
                username: '//input[@id="loginUsername"]',
                password: '//input[@id="loginPassword"]',
                loginButton: '//button[@type="submit"]',
                eyeIcon: '//i[@class="pi pi-eye-slash position-absolute top-50 end-0 translate-middle-y me-3"]',
                usernameLabel: '//label[@for="loginUsername"]',
                passwordLabel: '//label[@for="loginPassword"]',
            }
        }
    },


// ____________________________dashbord_____________________________________

    dashboard: {
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


// ______________________________Forgot password____________________________________

    forgotPassword: {

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
    },

    

};

// ═══════════════════════════════════════════════════════════════════════════
// RESOLVER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get locators for the current environment + framework.
 *
 * @param {string} [forceFramework] - Override: "angular" or "react"
 * @returns {Object} Resolved locators for all pages
 */
export function getLocators(forceFramework) {

    const env = TEST_ENV || "staging";
    const framework = forceFramework || UI_FRAMEWORK;

    console.log(`  Locators: env="${env}" | framework="${framework}"`);

    return {
        login: locators.login[env][framework],
        dashboard: locators.dashboard[env][framework],
        forgotPassword: locators.forgotPassword[env][framework]
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

export { locators };
export default getLocators;
