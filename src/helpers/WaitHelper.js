/**
 * WaitHelper - Utility for common wait/polling operations.
 *
 * Usage:
 *   import { WaitHelper } from "../src/helpers/WaitHelper.js";
 *
 *   const waiter = new WaitHelper(page);
 *   await waiter.waitForUrlChange("/dashboard");
 *   await waiter.waitForNetworkIdle();
 */

export class WaitHelper {

    constructor(page) {
        this.page = page;
    }

    /**
     * Wait until the URL contains a specific path segment.
     * @param {string} urlPart - Partial URL string to match
     * @param {number} [timeout=30000] - Max wait time in ms
     */
    async waitForUrlContains(urlPart, timeout = 30000) {
        await this.page.waitForURL(`**/${urlPart}**`, { timeout });
    }

    /**
     * Wait until the URL no longer contains a specific path segment.
     * @param {string} urlPart - URL segment that should disappear
     * @param {number} [timeout=30000] - Max wait time in ms
     */
    async waitForUrlChange(urlPart, timeout = 30000) {
        await this.page.waitForFunction(
            (part) => !window.location.href.includes(part),
            urlPart,
            { timeout }
        );
    }

    /**
     * Wait for network to be idle (no pending requests for 500ms).
     */
    async waitForNetworkIdle() {
        await this.page.waitForLoadState("networkidle");
    }

    /**
     * Wait for DOM content to be fully loaded.
     */
    async waitForDomReady() {
        await this.page.waitForLoadState("domcontentloaded");
    }

    /**
     * Wait for a specific element to appear on the page.
     * @param {import("@playwright/test").Locator} locator - Element locator
     * @param {number} [timeout=15000] - Max wait time in ms
     */
    async waitForElement(locator, timeout = 15000) {
        await locator.waitFor({ state: "visible", timeout });
    }

    /**
     * Wait for an element to disappear from the page.
     * @param {import("@playwright/test").Locator} locator - Element locator
     * @param {number} [timeout=15000] - Max wait time in ms
     */
    async waitForElementHidden(locator, timeout = 15000) {
        await locator.waitFor({ state: "hidden", timeout });
    }

    /**
     * Poll a condition until it returns true.
     * @param {Function} conditionFn - Async function that returns boolean
     * @param {number} [interval=500] - Polling interval in ms
     * @param {number} [timeout=30000] - Max wait time in ms
     */
    async pollUntil(conditionFn, interval = 500, timeout = 30000) {

        const start = Date.now();

        while (Date.now() - start < timeout) {
            if (await conditionFn()) return true;
            await this.page.waitForTimeout(interval);
        }

        throw new Error(`pollUntil timed out after ${timeout}ms`);
    }

}
