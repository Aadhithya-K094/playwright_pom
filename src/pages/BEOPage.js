/**
 * BEOPage - Page object for Block Education Officer (BEO) flow.
 *
 * Combines Login + Dashboard into a single page object.
 * Extends BasePage for reusable browser actions.
 *
 * Locators come from: src/pages/locators.js (login + dashboard sections)
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "./locators.js";

export class BEOPage extends BasePage {

    constructor(page) {

        super(page);

        const loc = getLocators().dashboard;

        // ─── Login Elements (using dashboard locators - same as DashboardPage) ──
        this.username = page.locator(loc.username);
        this.password = page.locator(loc.password);
        this.loginButton = page.locator(loc.loginButton);
        this.eyeIcon = page.locator(loc.eyeIcon);

        // ─── Login Page Visual Elements (for verification) ──────────────
        const loginLoc = getLocators().login;
        this.logo = page.locator(loginLoc.logo).first();
        this.wrapper = page.locator(loginLoc.wrapper);
        this.heading = page.locator(loginLoc.heading);
        this.usernameLabel = page.locator(loginLoc.usernameLabel);
        this.passwordLabel = page.locator(loginLoc.passwordLabel);

        // ─── Dashboard Elements ────────────────────────────────────────
        this.dashLogo1 = page.locator(loc.logo1);
        this.dashLogo2 = page.locator(loc.logo2).first();
        this.dashboardTitle = page.locator(loc.dashboardTitle);
        this.menuLocator = page.locator(loc.menuLocator);

        // ─── Profile / Logout ──────────────────────────────────────────
        this.profile = page.locator(loc.profile);
        this.logout = page.locator(loc.logout);
    }

    // ─── Navigation ────────────────────────────────────────────────────

    async gotoLoginPage(url) {
        await this.open(url);
    }

    // ─── Login Actions ─────────────────────────────────────────────────

    async login(username, password) {

        await this.fill(this.username, username);
        await this.fill(this.password, password);

        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.loginButton.click()
        ]);
    }

    // ─── Logout ────────────────────────────────────────────────────────

    async logoutFromApplication() {
        await this.click(this.profile);
        await this.click(this.logout);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyLoginPage() {
        await expect(this.wrapper).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.heading).toBeVisible();
    }

    async verifyDashboard() {
        await expect(this.dashLogo1).toBeVisible();
        await expect(this.dashLogo2).toBeVisible();
        await expect(this.dashboardTitle).toBeVisible();
    }

    // ─── Print Details ─────────────────────────────────────────────────

    async printLoginPageDetails() {

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();

        console.log("\n═══════════ BEO - Login Page Details ═══════════");
        console.log(`URL     : ${currentUrl}`);
        console.log(`Title   : ${currentTitle}`);

        console.log("──────────── Visibility ────────────────────────");
        const elements = [
            ["Logo", this.logo],
            ["Wrapper", this.wrapper],
            ["Heading", this.heading],
            ["Username", this.username],
            ["Password", this.password],
            ["Login Button", this.loginButton],
        ];
        for (const [name, locator] of elements) {
            const visible = await locator.isVisible();
            console.log(`  ${name}: ${visible ? "Visible" : "Not Visible"}`);
        }

        console.log("──────────── Placeholders ──────────────────────");
        const usernamePlaceholder = await this.username.getAttribute("placeholder");
        const passwordPlaceholder = await this.password.getAttribute("placeholder");
        console.log(`  Username placeholder: ${usernamePlaceholder}`);
        console.log(`  Password placeholder: ${passwordPlaceholder}`);

        console.log("──────────── Labels ────────────────────────────");
        const usernameLabel = await this.usernameLabel.textContent();
        const passwordLabel = await this.passwordLabel.textContent();
        console.log(`  Username label: ${usernameLabel}`);
        console.log(`  Password label: ${passwordLabel}`);
        console.log("════════════════════════════════════════════════\n");
    }

    async printDashboardDetails() {

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();

        console.log("\n═══════════ BEO - Dashboard Details ════════════");
        console.log(`URL     : ${currentUrl}`);
        console.log(`Title   : ${currentTitle}`);

        console.log("──────────── Visibility ────────────────────────");
        const elements = [
            ["Dashboard Logo 1", this.dashLogo1],
            ["Dashboard Logo 2", this.dashLogo2],
            ["Dashboard Title", this.dashboardTitle],
        ];
        for (const [name, locator] of elements) {
            const visible = await locator.isVisible();
            console.log(`  ${name}: ${visible ? "Visible" : "Not Visible"}`);
        }

        console.log("════════════════════════════════════════════════\n");
    }

    async printMenus() {

        const menuItems = this.menuLocator.locator("a, button, [role='menuitem'], .menu-title, .nav-link, .menu-item");
        const count = await menuItems.count();

        console.log("\n═══════════ BEO - Dashboard Menus ══════════════");
        console.log(`Total Menus: ${count}`);
        console.log("─────────────────────────────────────────────────");

        for (let i = 0; i < count; i++) {
            const text = (await menuItems.nth(i).textContent()).trim();
            if (text) {
                console.log(`  ${i + 1}. ${text}`);
            }
        }

        console.log("════════════════════════════════════════════════\n");
    }

}
