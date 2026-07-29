/**
 * ForgotPasswordPage - Page object for the Forgot Password flow.
 *
 * Locators are loaded based on TEST_ENV (staging/production).
 * Edit locators in: src/pages/locators.js
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "./locators.js";

export class ForgotPasswordPage extends BasePage {

    constructor(page) {

        super(page);

        const loc = getLocators().forgotPassword;

        this.forgotPassword = page.locator(loc.forgotPassword);
        this.userId = page.locator(loc.userId);
        this.requestOtp = page.locator(loc.requestOtp);
        this.otp = page.locator(loc.otp);
        this.submitOtp = page.locator(loc.submitOtp);
        this.newPassword = page.getByRole("textbox", { name: loc.newPassword });
        this.eye1 = page.locator("i").nth(3);
        this.eye2 = page.locator("i").nth(4);
        this.submit = page.getByRole("button", { name: loc.submit, exact: true });
        this.backToLogin = page.locator(loc.backToLogin);
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async gotoLoginPage(url) {
        await this.open(url);
    }

    async openForgotPassword() {
        await this.click(this.forgotPassword);
    }

    async requestOTP(userId) {
        await this.fill(this.userId, userId);
        await this.takeScreenshot("UserID");
        await this.click(this.requestOtp);
    }

    async submitOTP(otp) {
        await this.fill(this.otp, otp);
        await this.click(this.submitOtp);
    }

    async resetPassword(password) {
        await this.fill(this.newPassword, password);
        await this.click(this.eye1);
        await this.click(this.eye2);
        await this.takeScreenshot("Password");
        await this.click(this.submit);
    }

    async goBackToLogin() {
        await this.click(this.backToLogin);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyForgotPasswordPage() {
        await expect(this.page.getByText("Enter User Id")).toBeVisible();
        await expect(this.userId).toBeVisible();
    }

}
