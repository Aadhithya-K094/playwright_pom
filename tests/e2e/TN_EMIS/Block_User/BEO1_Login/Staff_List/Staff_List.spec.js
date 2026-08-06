import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Staff List", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Staff List menu visible", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        const staffList = page.locator("text=Staff List");
        await expect(staffList).toBeVisible();
    });

    test("Take Staff List screenshot", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");
        await page.locator("text=Staff List").click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_Staff_List.png", fullPage: true });
    });
});
