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
                logo: '//img[@src="../../../../../assets/images/GOVT_LOGO.png"]',
                wrapper: '//div[@style="background-image: url(../../../../../assets/images/login3_cover.jpg);"]',
                heading: '//h5[@class="headingcenter1 text-muted fw-normal mb-4 text-center"]',
                username: '//input[@type="email"]',
                password: '//input[@id="exampleInputPassword1"]',
                loginButton: '(//button[@type="submit"])[1]',
                eyeIcon: '//i[@class="pi pi-eye"]',
                usernameLabel: '//label[@for="exampleInputEmail1"]',
                passwordLabel: '//label[@for="exampleInputPassword1"]'
            },
            react: {
                logo: '//img[@class="image"]',
                wrapper: '//div[@class="auth-side-wrapper"]',
                heading: '//h5[@class="headingcenter1 text-muted fw-normal mb-4 text-center"]',
                username: '//input[@id="loginUsername"]',
                password: '//input[@id="loginPassword"]',
                loginButton: '//button[@type="submit"]',
                eyeIcon: '//i[@class="pi pi-eye position-absolute top-50 end-0 translate-middle-y me-3"]',
                usernameLabel: '//label[@for="loginUsername"]',
                passwordLabel: '//label[@for="loginPassword"]',
            }
        },
        production: {
            angular: {
                logo: '//img[@src="../../../../../assets/images/GOVT_LOGO.png"]',
                wrapper: '//div[@style="background-image: url(../../../../../assets/images/login3_cover.jpg);"]',
                heading: '//h5[@class="headingcenter1 text-muted fw-normal mb-4 text-center"]',
                username: '//input[@type="email"]',
                password: '//input[@id="exampleInputPassword1"]',
                loginButton: '(//button[@type="submit"])[1]',
                eyeIcon: '//i[@class="pi pi-eye"]',
                usernameLabel: '//label[@for="exampleInputEmail1"]',
                passwordLabel: '//label[@for="exampleInputPassword1"]'
            },
            react: {
                logo: '//img[@class="image"]',
                wrapper: '//div[@class="auth-side-wrapper"]',
                heading: '//h5[@class="headingcenter1 text-muted fw-normal mb-4 text-center"]',
                username: '//input[@id="loginUsername"]',
                password: '//input[@id="loginPassword"]',
                loginButton: '//button[@type="submit"]',
                eyeIcon: '//i[@class="pi pi-eye position-absolute top-50 end-0 translate-middle-y me-3"]',
                usernameLabel: '//label[@for="loginUsername"]',
                passwordLabel: '//label[@for="loginPassword"]',
            }
        }
    },


    // ____________________________dashbord_____________________________________

    dashboard: {
        staging: {
            angular: {
                username: '//input[@type="email"]',
                password: '//input[@id="exampleInputPassword1"]',
                loginButton: '(//button[@type="submit"])[1]',
                eyeIcon: '//i[@class="pi pi-eye"]',
                logo1: '//img[@src="assets/images/download.png"]',
                logo2: '(//img[@src="../../../../assets/images/user.png"])[1]',
                dashboardTitle: '//a[@class="navbar-brand nobleui-logo"]',
                menuLocator: '(//div[@class="container"])[2]',
                profile: '//a[@class="dropdown-toggle tx-12 fw-bolder nav-link mt-1"]',
                logout: '//i[@class="feather icon-log-out me-2 icon-md"]'
            },

            react: {
                username: '//input[@id="loginUsername"]',
                password: '//input[@id="loginPassword"]',
                loginButton: '//button[@type="submit"]',
                eyeIcon: '//i[@class="pi pi-eye position-absolute top-50 end-0 translate-middle-y me-3"]',
                logo1: '//img[@alt="Logo"]',
                logo2: '//div[@class="user-trigger"]',
                dashboardTitle: '//h2[@class="app-title mb-0 fs-3 ms-2 fw-semibold"]',
                menuLocator: '//div[@class="emis-navbar"]',
                profile: '//span[@class="user"]',
                logout: '(//button[@class="dropdown-item"])[4]',
            }
        },
        production: {
            angular: {
                username: '//input[@type="email"]',
                password: '//input[@id="exampleInputPassword1"]',
                loginButton: '(//button[@type="submit"])[1]',
                eyeIcon: '//i[@class="pi pi-eye"]',
                logo1: '//img[@src="assets/images/download.png"]',
                logo2: '(//img[@src="../../../../assets/images/user.png"])[1]',
                dashboardTitle: '//a[@class="navbar-brand nobleui-logo"]',
                menuLocator: '(//div[@class="container"])[2]',
                profile: '//a[@class="dropdown-toggle tx-12 fw-bolder nav-link mt-1"]',
                logout: '//i[@class="feather icon-log-out me-2 icon-md"]'
            },

            react: {
                username: '//input[@id="loginUsername"]',
                password: '//input[@id="loginPassword"]',
                loginButton: '//button[@type="submit"]',
                eyeIcon: '//i[@class="pi pi-eye position-absolute top-50 end-0 translate-middle-y me-3"]',
                logo1: '//img[@alt="Logo"]',
                logo2: '//div[@class="user-trigger"]',
                dashboardTitle: '//h2[@class="app-title mb-0 fs-3 ms-2 fw-semibold"]',
                menuLocator: '//div[@class="emis-navbar"]',
                profile: '//span[@class="user"]',
                logout: '(//button[@class="dropdown-item"])[4]',
            }
        }
    },

    // ______________________________Forgot password____________________________________

    forgotPassword: {

        staging: {
            angular: {
                forgotPassword: '(//button[@type="submit"])[2]',
                userId: '//input[@id="exampleInputEmail1"]',
                requestOtp: '(//button[@type="submit"])[1]',
                otp: '//input[@pkeyfilter="pnum"]',
                submitOtp: '(//button[@type="button"])[1]',
                newPassword: "Enter the new password",
                submit: "Submit",
                backToLogin: '(//button[@type="submit"])[3]'
            },
            react: {
                forgotPassword: '//button[@type="button"]',
                userId: '//input[@class="form-control forgot-input"]',
                requestOtp: '(//button[@type="button"])[1]',
                otp: '//input[@class="form-control otp-input"]',
                submitOtp: '//button[@class="btn-submit-otp"]',
                newPassword: "input[name='newPassword']",
                submit: "[data-testid='submit-btn']",
                backToLogin: '(//button[@type="button"])[3]'
            }
        },


        production: {
            angular: {
                forgotPassword: '(//button[@type="submit"])[2]',
                userId: '//input[@id="exampleInputEmail1"]',
                requestOtp: '(//button[@type="submit"])[1]',
                otp: '//input[@pkeyfilter="pnum"]',
                submitOtp: '(//button[@type="button"])[1]',
                newPassword: "Enter the new password",
                submit: "Submit",
                backToLogin: '(//button[@type="submit"])[3]'
            },
            react: {
                forgotPassword: '//button[@type="button"]',
                userId: '//input[@class="form-control forgot-input"]',
                requestOtp: '(//button[@type="button"])[1]',
                otp: '//input[@class="form-control otp-input"]',
                submitOtp: '//button[@class="btn-submit-otp"]',
                newPassword: "input[name='newPassword']",
                submit: "[data-testid='submit-btn']",
                backToLogin: '(//button[@type="button"])[3]'
            }
        }

    }
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
