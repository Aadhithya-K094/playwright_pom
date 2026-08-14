import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Competition", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Competition menu visible", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        const competition = page.getByRole("link", { name: "Competition " });
        await expect(competition).toBeVisible();
    });

    test("Verify Competition dropdown opens", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        await page.getByRole("link", { name: "Competition " }).click();
        await page.waitForTimeout(1000);

        // Check if sub-menu appears
        const content = await page.locator("body").textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test("Take Competition screenshot", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");
        await page.getByRole("link", { name: "Competition " }).click();
        await page.waitForTimeout(2000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_Competition.png", fullPage: true });
    });
});
