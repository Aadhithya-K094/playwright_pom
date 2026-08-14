/**
 * HomePage — Mobile app home/dashboard page object.
 *
 * Selectors need to be updated after APK inspection.
 */
import BasePage from "./BasePage.js";

class HomePage extends BasePage {

    // ─── Selectors ─────────────────────────────────────────────────────

    get dashboardTitle() {
        return $('//*[contains(@text,"Dashboard") or contains(@text,"Home")]');
    }

    get menuButton() {
        return $('//android.widget.ImageButton[@content-desc="Menu" or @content-desc="Open navigation"]');
    }

    get logoutButton() {
        return $('//*[@text="Logout" or @text="Log Out"]');
    }

    get totalStudents() {
        return $('//*[contains(@text,"Total Students")]');
    }

    get totalSchools() {
        return $('//*[contains(@text,"Total Schools")]');
    }

    get totalStaff() {
        return $('//*[contains(@text,"Total Staff")]');
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async isDashboardVisible() {
        return await this.isDisplayed('//*[contains(@text,"Dashboard") or contains(@text,"Home")]');
    }

    async openMenu() {
        await this.tap('//android.widget.ImageButton[@content-desc="Menu" or @content-desc="Open navigation"]');
        await this.pause(1000);
    }

    async logout() {
        await this.openMenu();
        await this.scrollDown();
        await this.tap('//*[@text="Logout" or @text="Log Out"]');
        await this.pause(2000);
    }

    async getStudentCount() {
        return await this.getText('//*[contains(@text,"Total Students")]/following-sibling::*[1]');
    }
}

export default new HomePage();
