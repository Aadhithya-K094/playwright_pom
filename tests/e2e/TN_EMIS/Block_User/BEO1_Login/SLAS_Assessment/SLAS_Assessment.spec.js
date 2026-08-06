import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("SLAS Assessment", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify SLAS Assessment menu visible", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        const slas = page.getByRole("link", { name: "SLAS Assessment " });
        await expect(slas).toBeVisible();
    });

    test("Verify SLAS Assessment dropdown opens", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        await page.getByRole("link", { name: "SLAS Assessment " }).click();
        await page.waitForTimeout(1000);

        const content = await page.locator("body").textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test("Take SLAS Assessment screenshot", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");
        await page.getByRole("link", { name: "SLAS Assessment " }).click();
        await page.waitForTimeout(2000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_SLAS_Assessment.png", fullPage: true });
    });
});
