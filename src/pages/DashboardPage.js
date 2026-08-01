/**
 * DashboardPage - Page object for the Dashboard screen.
 *
 * Credentials come from: data/excel/TestData.xlsx → "Dashboard" sheet
 * Locators come from: src/pages/locators.js (based on UI_FRAMEWORK + TEST_ENV)
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "./locators.js";
import { getDashboardData } from "../helpers/ExcelReader.js";

export class DashboardPage extends BasePage {

    constructor(page) {

        super(page);

        const loc = getLocators().dashboard;

        // Login elements
        this.username = page.locator(loc.username);
        this.password = page.locator(loc.password);
        this.eyeIcon = page.locator(loc.eyeIcon);
        this.loginButton = page.locator(loc.loginButton);

        // Dashboard elements
        this.logo1 = page.locator(loc.logo1);
        this.logo2 = page.locator(loc.logo2).first();
        this.dashboardTitle = page.getByRole("link", { name: loc.dashboardTitle });
        this.menuLocator = page.locator(loc.menuLocator);

        // Profile / Logout
        this.profile = page.locator(loc.profile);
        this.logout = page.getByRole("link", { name: loc.logout });
    }

    // ─── Data (from Excel) ─────────────────────────────────────────────

    async getData() {
        return getDashboardData();
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async gotoLoginPage() {
        const data = getDashboardData();
        await this.open(data.url);
    }

    async login() {
        const data = getDashboardData();
        await this.fill(this.username, data.username);
        await this.fill(this.password, data.password);

        if (await this.eyeIcon.isVisible().catch(() => false)) {
            await this.eyeIcon.click();
        }

        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.loginButton.click()
        ]);
    }

    async logoutFromApplication() {
        await this.click(this.profile);
        await this.click(this.logout);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyDashboard() {
        await expect(this.logo1).toBeVisible();
        await expect(this.logo2).toBeVisible();
        await expect(this.dashboardTitle).toBeVisible();
    }

    // ─── Screenshots ───────────────────────────────────────────────────

    async takeDashboardScreenshots() {
        await this.takeLocatorScreenshot(this.logo1, "Logo1");
        await this.takeLocatorScreenshot(this.logo2, "Logo2");
        await this.takeLocatorScreenshot(this.dashboardTitle, "Dashboard");
    }

    // ─── Menus ─────────────────────────────────────────────────────────

    async printMenus() {

        const count = await this.menuLocator.count();
        console.log("Total Menus:", count);

        for (let i = 0; i < count; i++) {
            console.log(await this.menuLocator.nth(i).textContent());
        }
    }

}
