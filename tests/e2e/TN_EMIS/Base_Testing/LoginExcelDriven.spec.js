/**
 * Data-Driven Login Tests (from Excel)
 *
 * Reads test cases from: data/excel/LoginTestCases.xlsx → "LoginCases" sheet
 * Each row in the Excel becomes its own test automatically.
 *
 * To add a new test case: just add a row in the Excel file — no code change needed.
 */
import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { getLoginTestCases } from "../../../../src/helpers/ExcelReader.js";
import { currentEnv } from "../../../../config/index.js";

const testCases = getLoginTestCases();

test.describe("Login Module - Excel Data-Driven Tests", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.gotoLoginPage(currentEnv.loginURL);
    });

    for (const tc of testCases) {

        test(`${tc.TCID} - ${tc.Description}`, async ({ loginPage }) => {

            // Skip login action for validation cases with empty fields
            if (tc.ExpectedResult === "validation" && tc.Username === "" && tc.Password === "") {
                await loginPage.loginButton.click();
                await loginPage.takeScreenshot(tc.TCID);
                return;
            }

            await loginPage.login(tc.Username, tc.Password);
            await loginPage.takeScreenshot(tc.TCID);

            // Assert based on ExpectedResult column
            if (tc.ExpectedResult === "success") {
                // Successful login should navigate away from login page
                await expect(loginPage.page).not.toHaveURL(currentEnv.loginURL);
            } else if (tc.ExpectedResult === "error") {
                // Failed login should stay on login page
                await expect(loginPage.page).toHaveURL(currentEnv.loginURL);
            } else if (tc.ExpectedResult === "validation") {
                // Validation error — should remain on login page
                await expect(loginPage.page).toHaveURL(currentEnv.loginURL);
            }

        });

    }

});
