import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { forgotPasswordData } from "../../../../data/index.js";

test("Forgot Password Flow", async ({ forgotPasswordPage }) => {

    await forgotPasswordPage.gotoLoginPage(forgotPasswordData.url);

    await forgotPasswordPage.reloadPage();

    await forgotPasswordPage.openForgotPassword();

    await forgotPasswordPage.verifyForgotPasswordPage();

    // Invalid User IDs
    await forgotPasswordPage.requestOTP(forgotPasswordData.invalidUser1);

    await forgotPasswordPage.requestOTP(forgotPasswordData.invalidUser2);

    await forgotPasswordPage.requestOTP(forgotPasswordData.spaceUser);

    // Valid User ID
    await forgotPasswordPage.requestOTP(forgotPasswordData.validUser);

    // Invalid OTP
    await forgotPasswordPage.submitOTP(forgotPasswordData.invalidOtp1);

    await forgotPasswordPage.submitOTP(forgotPasswordData.invalidOtp2);

    // Valid OTP
    // Enter manually if OTP comes via SMS/Email
    // await forgotPasswordPage.submitOTP(forgotPasswordData.validOtp);

    // Invalid Password
    await forgotPasswordPage.resetPassword(forgotPasswordData.invalidPassword1);

    await forgotPasswordPage.resetPassword(forgotPasswordData.invalidPassword2);

    // Valid Password
    // Uncomment only if a valid OTP has been entered
    // await forgotPasswordPage.resetPassword(forgotPasswordData.validPassword);

    await forgotPasswordPage.goBackToLogin();

});
