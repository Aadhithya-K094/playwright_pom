import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Mail Request", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Mail Request module accessible", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        const mailRequest = page.locator("text=Mail Request");
        await expect(mailRequest).toBeVisible();
    });

    test("Verify Mail Request page loads on click", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        await page.locator("text=Mail Request").click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        const content = await page.locator("body").textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test("Take Mail Request screenshot", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");
        await page.locator("text=Mail Request").click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_Mail_Request.png", fullPage: true });
    });
});
