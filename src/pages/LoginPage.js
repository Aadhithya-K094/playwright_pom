/**
 * LoginPage - Page object for the Login screen.
 *
 * Locators are loaded based on TEST_ENV (staging/production).
 * Edit locators in: src/pages/locators.js
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "./locators.js";

export class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        const loc = getLocators().login;

        // Locators (environment-based)
        this.logo = page.locator(loc.logo).first();
        this.img = page.locator(loc.logo);
        this.wrapper = page.locator(loc.wrapper);
        this.heading = page.locator(loc.heading);
        this.username = page.locator(loc.username);
        this.password = page.locator(loc.password);
        this.loginButton = page.locator(loc.loginButton);
        this.eyeIcon = page.locator(loc.eyeIcon);
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
            this.loginButton.click()
        ]);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyLoginPage(url, title) {

        await expect(this.page).toHaveURL(url, { timeout: 15000 });
        await expect(this.page).toHaveTitle(title);

        await expect(this.wrapper).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.heading).toBeVisible();

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();
        const heading = (await this.heading.textContent()).trim();

        console.log(`This is url: ${currentUrl}`);
        console.log(`This is title: ${currentTitle}`);
        console.log(`This is heading: ${heading}`);
        await this.page.waitForTimeout(500);

        await expect(heading).toBe("கல்வி மேலாண்மைத் தகவல் மையம்");

        await this.printLoginPageDetails();
    }

    async printLoginPageDetails() {

        const loc = getLocators().login;

        await this.logAttribute("Username Placeholder", this.username, "placeholder");
        await this.logAttribute("Password Placeholder", this.password, "placeholder");

        await this.logTextContent(
            "Username Label",
            this.page.locator(loc.usernameLabel)
        );

        await this.logTextContent(
            "Password Label",
            this.page.locator(loc.passwordLabel)
        );

        await this.logLocatorVisibility("Logo", this.logo);
    }

}
