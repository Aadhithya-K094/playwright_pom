/**
 * ForgotPasswordPage - Page object for the Forgot Password flow.
 *
 * Handles OTP request, OTP submission, password reset, and back navigation.
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class ForgotPasswordPage extends BasePage {

    constructor(page) {

        super(page);

        this.forgotPassword = page.locator("(//button[@type='submit'])[2]");

        this.userId = page.locator('//input[@type="text"]');
        this.requestOtp = page.locator('(//button[@class="btn btn-primary me-2 mb-2 mb-md-0"])[1]');

        this.otp = page.locator("(//input[@type='text'])[2]");
        this.submitOtp = page
            .getByLabel("OTP Submission")
            .locator('(//button[@class="btn btn-primary me-2 mb-2 mb-md-0"])[2]');

        this.newPassword = page.getByRole("textbox", { name: "Enter the new password" });
        this.eye1 = page.locator("i").nth(3);
        this.eye2 = page.locator("i").nth(4);
        this.submit = page.getByRole("button", { name: "Submit", exact: true });

        this.backToLogin = page.locator('(//button[@class="btn btn-primary me-2 mb-2 mb-md-0"])[3]');
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
