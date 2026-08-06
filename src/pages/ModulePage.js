/**
 * ModulePage - Page object for navigating and testing TN EMIS modules.
 *
 * Extends BasePage for reusable browser actions.
 * Works with moduleLocators.js for module URLs and selectors.
 * Does NOT affect existing page files (TNEMISPage, LoginPage, etc.)
 *
 * Usage in spec files:
 *   import { ModulePage } from "../../src/pages/ModulePage.js";
 *   const modulePage = new ModulePage(page);
 *   await modulePage.navigateToModule("/component/library");
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getBaseURL, getModuleLocators } from "../locators/moduleLocators.js";

export class ModulePage extends BasePage {

    constructor(page) {
        super(page);
        this.baseURL = getBaseURL();
        this.modules = getModuleLocators();
    }

    // ─── Navigation ────────────────────────────────────────────────────

    /**
     * Navigate to a module by its path.
     * @param {string} modulePath - e.g. "/component/library"
     */
    async navigateToModule(modulePath) {
        await this.page.goto(this.baseURL + modulePath);
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000);
    }

    /**
     * Navigate to dashboard.
     */
    async goToDashboard() {
        await this.page.goto(this.baseURL + "/dashboard");
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000);
    }

    // ─── Menu Actions ──────────────────────────────────────────────────

    /**
     * Click a main menu item by name.
     * @param {string} menuName - e.g. "Component", "Approvals", "Reports"
     */
    async clickMainMenu(menuName) {
        const menu = this.page.getByRole("link", { name: menuName });
        await menu.click();
        await this.page.waitForTimeout(1000);
    }

    /**
     * Click a sub-menu item after opening the parent menu.
     * @param {string} parentMenu - e.g. "Component "
     * @param {string} subMenuName - e.g. "Library"
     */
    async clickSubMenu(parentMenu, subMenuName) {
        // Open parent menu
        await this.page.getByRole("link", { name: parentMenu }).click();
        await this.page.waitForTimeout(1000);

        // Click sub-menu
        await this.page.getByRole("link", { name: subMenuName }).click();
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    /**
     * Verify page loaded successfully (not blank, correct URL).
     * @param {string} expectedPath - Part of URL to verify
     */
    async verifyPageLoaded(expectedPath) {
        const content = await this.page.locator("body").textContent();
        expect(content.length).toBeGreaterThan(0);
        expect(this.page.url()).toContain(expectedPath);
    }

    /**
     * Verify page title contains "EMIS".
     */
    async verifyPageTitle() {
        const title = await this.page.title();
        expect(title).toContain("EMIS");
    }

    /**
     * Verify a specific text is visible on the page.
     * @param {string} text - Text to check
     */
    async verifyTextVisible(text) {
        const locator = this.page.locator(`text=${text}`).first();
        await expect(locator).toBeVisible();
    }

    /**
     * Verify a heading is visible.
     * @param {string} headingText - Heading text to verify
     */
    async verifyHeading(headingText) {
        const heading = this.page.getByRole("heading", { name: headingText });
        await expect(heading).toBeVisible();
    }

    /**
     * Verify a table exists on the page.
     */
    async verifyTableExists() {
        const table = this.page.locator("table").first();
        await expect(table).toBeVisible();
    }

    /**
     * Get table row count.
     * @returns {number}
     */
    async getTableRowCount() {
        const rows = this.page.locator("table tbody tr");
        return await rows.count();
    }

    // ─── Data Extraction ───────────────────────────────────────────────

    /**
     * Get all visible menu items text.
     * @returns {string[]}
     */
    async getMenuItems() {
        const items = this.page.locator("nav li a, nav li .nav-link");
        const count = await items.count();
        const texts = [];
        for (let i = 0; i < count; i++) {
            const text = (await items.nth(i).textContent()).trim();
            if (text) texts.push(text);
        }
        return texts;
    }

    /**
     * Check for console errors on current page.
     * @returns {string[]}
     */
    async captureConsoleErrors() {
        const errors = [];
        this.page.on("pageerror", (error) => errors.push(error.message));
        await this.page.waitForTimeout(3000);
        return errors;
    }

    // ─── Screenshots ───────────────────────────────────────────────────

    /**
     * Take a full page screenshot.
     * @param {string} name - Screenshot name (without extension)
     */
    async takeModuleScreenshot(name) {
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({
            path: `test-results/screenshots/${name}.png`,
            fullPage: true
        });
    }
}
