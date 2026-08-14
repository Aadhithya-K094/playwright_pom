/**
 * LoginPage — Mobile app login page object.
 *
 * Selectors need to be updated after inspecting the APK with Appium Inspector.
 * Use resource-id, accessibility-id, or xpath.
 */
import BasePage from "./BasePage.js";

class LoginPage extends BasePage {

    // ─── Selectors (Update after APK inspection) ───────────────────────

    get usernameField() {
        return $('//android.widget.EditText[@resource-id="username"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@resource-id="password"]');
    }

    get loginButton() {
        return $('//android.widget.Button[@text="Login" or @text="LOGIN"]');
    }

    get errorMessage() {
        return $('//*[contains(@text,"Invalid") or contains(@text,"Error")]');
    }

    get logo() {
        return $('//android.widget.ImageView[@resource-id="logo"]');
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async login(username, password) {
        await this.type('//android.widget.EditText[@resource-id="username"]', username);
        await this.type('//android.widget.EditText[@resource-id="password"]', password);
        await this.hideKeyboard();
        await this.tap('//android.widget.Button[@text="Login" or @text="LOGIN"]');
        await this.pause(3000);
    }

    async isLoginPageVisible() {
        return await this.isDisplayed('//android.widget.EditText[@resource-id="username"]');
    }

    async getErrorText() {
        return await this.getText('//*[contains(@text,"Invalid") or contains(@text,"Error")]');
    }
}

export default new LoginPage();
