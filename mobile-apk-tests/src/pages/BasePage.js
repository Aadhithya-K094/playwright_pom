/**
 * BasePage — Base class for all mobile page objects.
 *
 * Provides common actions: tap, type, swipe, scroll, wait.
 */

class BasePage {

    async waitForElement(selector, timeout = 10000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        return element;
    }

    async tap(selector) {
        const element = await this.waitForElement(selector);
        await element.click();
    }

    async type(selector, text) {
        const element = await this.waitForElement(selector);
        await element.clearValue();
        await element.setValue(text);
    }

    async getText(selector) {
        const element = await this.waitForElement(selector);
        return await element.getText();
    }

    async isDisplayed(selector, timeout = 5000) {
        try {
            const element = await $(selector);
            await element.waitForDisplayed({ timeout });
            return true;
        } catch {
            return false;
        }
    }

    async scrollDown() {
        await browser.execute("mobile: scrollGesture", {
            left: 100, top: 500, width: 200, height: 1000,
            direction: "down", percent: 0.75
        });
    }

    async scrollUp() {
        await browser.execute("mobile: scrollGesture", {
            left: 100, top: 500, width: 200, height: 1000,
            direction: "up", percent: 0.75
        });
    }

    async swipeLeft() {
        await browser.execute("mobile: swipeGesture", {
            left: 500, top: 500, width: 200, height: 50,
            direction: "left", percent: 0.75
        });
    }

    async hideKeyboard() {
        try {
            await browser.hideKeyboard();
        } catch {
            // keyboard not shown
        }
    }

    async pause(ms = 1000) {
        await browser.pause(ms);
    }

    async takeScreenshot(name) {
        await browser.saveScreenshot(`./test-results/screenshots/${name}.png`);
    }
}

export default BasePage;
