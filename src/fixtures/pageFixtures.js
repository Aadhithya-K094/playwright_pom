/**
 * Page Object Fixtures
 *
 * Custom Playwright fixtures that auto-instantiate page objects.
 * Tests import { test, expect } from this file instead of @playwright/test.
 *
 * Usage in tests:
 *   import { test, expect } from "../../src/fixtures/pageFixtures.js";
 *
 *   test("Login test", async ({ loginPage }) => {
 *       await loginPage.gotoLoginPage(url);
 *       await loginPage.login("user", "pass");
 *   });
 *
 *   test("Dashboard test", async ({ dashboardPage }) => {
 *       await dashboardPage.verifyDashboard();
 *   });
 */
import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { DashboardPage } from "../pages/DashboardPage.js";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage.js";
import { BEOPage } from "../pages/BEOPage.js";
import { ScreenshotHelper } from "../helpers/ScreenshotHelper.js";
import { WaitHelper } from "../helpers/WaitHelper.js";

/**
 * Extend Playwright's base test with custom page object fixtures.
 * Each fixture is lazily created — only instantiated when used in a test.
 */
export const test = base.extend({

    // ─── Page Object Fixtures ──────────────────────────────────────────

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },

    forgotPasswordPage: async ({ page }, use) => {
        const forgotPasswordPage = new ForgotPasswordPage(page);
        await use(forgotPasswordPage);
    },

    beoPage: async ({ page }, use) => {
        const beoPage = new BEOPage(page);
        await use(beoPage);
    },


    // ─── Helper Fixtures ───────────────────────────────────────────────

    screenshotHelper: async ({ page }, use) => {
        const screenshotHelper = new ScreenshotHelper(page);
        await use(screenshotHelper);
    },

    waitHelper: async ({ page }, use) => {
        const waitHelper = new WaitHelper(page);
        await use(waitHelper);
    }

});

export { expect };
