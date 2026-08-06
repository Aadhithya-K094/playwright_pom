/**
 * LoginPage - Page object for the Login screen.
 *
 * Credentials come from: data/excel/TestData.xlsx → "Login" sheet
 * Locators come from: src/pages/locators.js (based on UI_FRAMEWORK + TEST_ENV)
 */
import { expect, test } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "../locators/locatorsPage.js";
import { getLoginData } from "../helpers/ExcelReader.js";

export class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        const loc = getLocators().login;

        // Locators (environment + framework based)
        this.logo = page.locator(loc.logo).first();
        this.img = page.locator(loc.logo);
        this.wrapper = page.locator(loc.wrapper);
        this.heading = page.locator(loc.heading);
        this.username = page.locator(loc.username);
        this.password = page.locator(loc.password);
        this.loginButton = page.locator(loc.loginButton);
        this.eyeIcon = page.locator(loc.eyeIcon);
        this.usernameLabel = page.locator(loc.usernameLabel);
        this.passwordLabel = page.locator(loc.passwordLabel);
    }

    // ─── Data (from Excel) ─────────────────────────────────────────────

    /**
     * Get all login test data from TestData.xlsx → Login sheet.
     * @returns {{url, title, validUser, validPassword, invalidUser, invalidPassword, space}}
     */
    async getData() {
        return getLoginData();
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async gotoLoginPage() {
        const data = getLoginData();
        await this.open(data.url);
    }

    async login(username, password) {

        await this.fill(this.username, username);
        await this.fill(this.password, password);

        // Eye icon is optional — click only if visible
        if (await this.eyeIcon.isVisible().catch(() => false)) {
            await this.eyeIcon.click();
        }

        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.loginButton.click()
        ]);
    }

    async loginWithValidCredentials() {
        const data = getLoginData();
        await this.login(data.validUser, data.validPassword);
    }

    async loginWithInvalidUser() {
        const data = getLoginData();
        await this.login(data.invalidUser, data.validPassword);
    }

    async loginWithInvalidPassword() {
        const data = getLoginData();
        await this.login(data.validUser, data.invalidPassword);
    }

    async loginWithSpaces() {
        const data = getLoginData();
        await this.login(data.space, data.validPassword);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyLoginPage() {

        const data = getLoginData();

        // Print details first (before assertions that might fail)
        await this.printLoginPageDetails();

        await expect(this.page).toHaveURL(data.url);
        await expect(this.page).toHaveTitle(data.title);

        await expect(this.wrapper).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.heading).toBeVisible();
    }

    async printLoginPageDetails() {

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();

        console.log("\n═══════════ Login Page Details ═══════════");
        console.log(`URL     : ${currentUrl}`);
        console.log(`Title   : ${currentTitle}`);

        console.log("──────────── Visibility ────────────────");
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
            console.log(`${name}: ${visible ? "Visible" : "Not Visible"}`);
        }

        // Placeholders
        console.log("──────────── Placeholders ──────────────");
        const usernamePlaceholder = await this.username.getAttribute("placeholder");
        const passwordPlaceholder = await this.password.getAttribute("placeholder");
        console.log(`Username placeholder: ${usernamePlaceholder}`);
        console.log(`Password placeholder: ${passwordPlaceholder}`);

        // Labels
        console.log("──────────── Labels ────────────────────");
        const usernameLabel = await this.usernameLabel.textContent();
        const passwordLabel = await this.passwordLabel.textContent();
        console.log(`Username label: ${usernameLabel}`);
        console.log(`Password label: ${passwordLabel}`);
        console.log("═════════════════════════════════════════\n");
    }

}
