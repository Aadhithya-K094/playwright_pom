/**
 * ScreenshotHelper - Utility for capturing and managing screenshots.
 *
 * Usage:
 *   import { ScreenshotHelper } from "../src/helpers/ScreenshotHelper.js";
 *
 *   const ss = new ScreenshotHelper(page);
 *   await ss.captureFull("homepage");
 *   await ss.captureElement(locator, "button");
 */
import path from "path";

const SCREENSHOT_DIR = "test-results/screenshots";

export class ScreenshotHelper {

    constructor(page) {
        this.page = page;
    }

    /**
     * Capture a full-page screenshot.
     * @param {string} name - Descriptive name (no extension needed)
     * @returns {string} Path to the saved screenshot
     */
    async captureFull(name) {

        const filePath = path.join(SCREENSHOT_DIR, `${Date.now()}_${name}.png`);

        await this.page.screenshot({
            path: filePath,
            fullPage: true
        });

        console.log(`Screenshot saved: ${filePath}`);
        return filePath;
    }

    /**
     * Capture a screenshot of a specific element.
     * @param {import("@playwright/test").Locator} locator - Element locator
     * @param {string} name - Descriptive name
     * @returns {string} Path to the saved screenshot
     */
    async captureElement(locator, name) {

        const filePath = path.join(SCREENSHOT_DIR, `${Date.now()}_${name}.png`);

        await locator.screenshot({ path: filePath });

        console.log(`Element screenshot saved: ${filePath}`);
        return filePath;
    }

    /**
     * Capture viewport-only screenshot (not full page).
     * @param {string} name - Descriptive name
     * @returns {string} Path to the saved screenshot
     */
    async captureViewport(name) {

        const filePath = path.join(SCREENSHOT_DIR, `${Date.now()}_${name}_viewport.png`);

        await this.page.screenshot({
            path: filePath,
            fullPage: false
        });

        console.log(`Viewport screenshot saved: ${filePath}`);
        return filePath;
    }

}
