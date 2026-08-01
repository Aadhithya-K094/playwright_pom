/**
 * ForgotPasswordPage - Page object for the Forgot Password flow.
 *
 * Credentials come from: data/excel/TestData.xlsx → "ForgotPassword" sheet
 * Locators come from: src/pages/locators.js (based on UI_FRAMEWORK + TEST_ENV)
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "./locators.js";
import { getForgotPasswordData } from "../helpers/ExcelReader.js";

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

    // ─── Data (from Excel) ─────────────────────────────────────────────

    async getData() {
        return getForgotPasswordData();
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async gotoLoginPage() {
        const data = getForgotPasswordData();
        await this.open(data.url);
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

    // ─── Full Flow (all steps from Excel data) ─────────────────────────

    async runForgotPasswordFlow() {

        const data = getForgotPasswordData();

        await this.gotoLoginPage();
        await this.reloadPage();
        await this.openForgotPassword();
        await this.verifyForgotPasswordPage();

        // Invalid users
        await this.requestOTP(data.invalidUser1);
        await this.requestOTP(data.invalidUser2);
        await this.requestOTP(data.spaceUser);

        // Valid user
        await this.requestOTP(data.validUser);

        // Invalid OTPs
        await this.submitOTP(data.invalidOtp1);
        await this.submitOTP(data.invalidOtp2);

        // Invalid passwords
        await this.resetPassword(data.invalidPassword1);
        await this.resetPassword(data.invalidPassword2);

        await this.goBackToLogin();
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyForgotPasswordPage() {
        await expect(this.page.getByText("Enter User Id")).toBeVisible();
        await expect(this.userId).toBeVisible();
    }

}
