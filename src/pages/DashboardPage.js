/**
 * DashboardPage - Page object for the Dashboard screen.
 *
 * Handles dashboard verification, menu listing, screenshots, and logout.
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage {

    constructor(page) {

        super(page);

        // Login elements (for direct login from dashboard page)
        this.username = page.locator(xpath="//input[@placeholder='User Name']");
        this.password = page.locator(xpath="//input[@placeholder='Password']");
        this.eyeIcon = page.locator(xpath="//i[@class='pi pi-eye']");
        this.loginButton = page.locator(path="(//button[@type='submit'])[1]")

        // Dashboard elements
        this.logo1 = page.locator("#govlogo");
        this.logo2 = page.locator("#profileDropdown").first();
        this.dashboardTitle = page.getByRole("link", { name: "TN EMIS" });
        this.menuLocator = page.locator(".menu-title");

        // Profile / Logout
        this.profile = page.getByText("Saraswathi");
        this.logout = page.getByRole("link", { name: "Log Out" });
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async gotoLoginPage(url) {
        await this.open(url);
    }

    async login(username, password) {

        await this.fill(this.username, username);
        await this.fill(this.password, password);
        await this.click(this.eyeIcon);

        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.loginBtn.click()
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
