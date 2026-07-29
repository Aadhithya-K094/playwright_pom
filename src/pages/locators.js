/**
 * Environment-based Locators
 *
 * Contains XPaths/selectors for each environment (staging & production).
 * When the XPath is the same across environments, use a shared value.
 * When they differ, provide separate values per environment.
 *
 * Usage in page files:
 *   import { getLocators } from "./locators.js";
 *   const loc = getLocators();
 *   this.username = page.locator(loc.login.username);
 */
import { TEST_ENV } from "../../config/index.js";

const locators = {

    // ─── Login Page ────────────────────────────────────────────────────
    login: {
        staging: {
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
        production: {
            logo: "//img[@class='image']",
            wrapper: "//div[@class='auth-side-wrapper']",
            heading: "//h5[@class='headingcenter1 text-muted fw-normal mb-4 text-center']",
            username: "//input[@placeholder='User Name']",
            password: "//input[@placeholder='Password']",
            loginButton: "(//button[@type='submit'])[1]",
            eyeIcon: "//i[@class='pi pi-eye']",
            usernameLabel: "(//label[@class='form-label'])[1]",
            passwordLabel: "(//label[@class='form-label'])[2]",
        }
    },

    // ─── Dashboard Page ────────────────────────────────────────────────
    dashboard: {
        staging: {
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
        },
        production: {
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
        }
    },

    // ─── Forgot Password Page ──────────────────────────────────────────
    forgotPassword: {
        staging: {
            forgotPassword: "(//button[@type='submit'])[2]",
            userId: "//input[@type='text']",
            requestOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[1]",
            otp: "(//input[@type='text'])[2]",
            submitOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[2]",
            newPassword: "Enter the new password",
            submit: "Submit",
            backToLogin: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[3]",
        },
        production: {
            forgotPassword: "(//button[@type='submit'])[2]",
            userId: "//input[@type='text']",
            requestOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[1]",
            otp: "(//input[@type='text'])[2]",
            submitOtp: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[2]",
            newPassword: "Enter the new password",
            submit: "Submit",
            backToLogin: "(//button[@class='btn btn-primary me-2 mb-2 mb-md-0'])[3]",
        }
    }

};

/**
 * Get locators for the current environment.
 * Falls back to staging if env not found.
 */
export function getLocators() {
    const env = TEST_ENV === "production" ? "production" : "staging";

    return {
        login: locators.login[env],
        dashboard: locators.dashboard[env],
        forgotPassword: locators.forgotPassword[env],
    };
}

export default getLocators;
