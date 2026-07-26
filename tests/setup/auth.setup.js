/**
 * Auth Setup
 *
 * This file runs as a Playwright "setup" project before authenticated tests.
 * It logs into the application and saves the browser state (cookies, localStorage)
 * so other test projects can reuse the session without repeating login.
 *
 * Referenced by: playwright.config.js → projects → "setup"
 * Output: test-results/.auth/storageState.json
 */
import { test as setup, expect } from "@playwright/test";
import { currentEnv, appConfig } from "../../config/index.js";

const AUTH_STATE_PATH = "test-results/.auth/storageState.json";

setup("Authenticate and save state", async ({ page }) => {

    // Navigate to login page
    await page.goto(currentEnv.loginURL, {
        waitUntil: "load",
        timeout: currentEnv.navigationTimeout
    });

    // Fill login form
    await page.getByRole("textbox", { name: "User Name" }).fill(currentEnv.credentials.username);
    await page.getByRole("textbox", { name: "Password" }).fill(currentEnv.credentials.password);

    // Submit login
    await Promise.all([
        page.waitForLoadState("networkidle"),
        page.getByRole("button", { name: "Login" }).click()
    ]);

    // Wait for navigation away from login page
    await page.waitForFunction(
        () => !window.location.href.includes("/auth/login"),
        { timeout: currentEnv.timeout }
    );
    await page.waitForLoadState("networkidle");

    // Verify login succeeded
    await expect(page).not.toHaveURL(/.*\/auth\/login.*/);

    // Save authenticated state
    await page.context().storageState({ path: AUTH_STATE_PATH });

    console.log(`✔ Auth state saved: ${AUTH_STATE_PATH}`);

});
