/**
 * LoginPage - Page object for the Login screen.
 *
 * Handles login form interactions, page verification, and credential submission.
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        // Locators (XPath)
        this.logo = page.locator("//img[@class='image']").first();
        this.img = page.locator("//img[@class='image']");
        this.wrapper = page.locator("//div[@class='auth-side-wrapper']");
        this.heading = page.locator("//h5[@class='headingcenter1 text-muted fw-normal mb-4 text-center']");
        this.username = page.locator("//input[@placeholder='User Name']");
        this.password = page.locator("//input[@placeholder='Password']");
        this.loginButton = page.locator("(//button[@type='submit'])[1]");
        this.eyeIcon = page.locator("//i[@class='pi pi-eye']");
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

        await this.logAttribute("Username Placeholder", this.username, "placeholder");
        await this.logAttribute("Password Placeholder", this.password, "placeholder");

        await this.logTextContent(
            "Username Label",
            this.page.locator("(//label[@class='form-label'])[1]")
            );

        await this.logTextContent(
            "Password Label",
            this.page.locator("(//label[@class='form-label'])[1]")
        );

        await this.logLocatorVisibility("Logo", this.logo);
    }

}
