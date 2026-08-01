/**
 * LoginPage - Page object for the Login screen.
 *
 * Credentials come from: data/excel/TestData.xlsx → "Login" sheet
 * Locators come from: src/pages/locators.js (based on UI_FRAMEWORK + TEST_ENV)
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "./locators.js";
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

        await expect(this.page).toHaveURL(data.url);
        await expect(this.page).toHaveTitle(data.title);

        await expect(this.wrapper).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.heading).toBeVisible();

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();

        console.log(`URL: ${currentUrl}`);
        console.log(`Title: ${currentTitle}`);

        await this.printLoginPageDetails();
    }

    async printLoginPageDetails() {

        await this.logLocatorVisibility("Logo", this.logo);
        await this.logLocatorVisibility("Username", this.username);
        await this.logLocatorVisibility("Password", this.password);
        await this.logLocatorVisibility("Login Button", this.loginButton);
    }

}
