import { test, expect } from "../../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Search > Staff", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Search menu visible", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        const search = page.getByRole("link", { name: "Search " });
        await expect(search).toBeVisible();
    });

    test("Verify Search > Staff sub-menu appears", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        // Open Search dropdown
        await page.getByRole("link", { name: "Search " }).click();
        await page.waitForTimeout(1000);

        // Verify Staff sub-menu
        const subMenu = page.locator("text=Staff").first();
        await expect(subMenu).toBeVisible();
    });

    test("Verify Search > Staff navigation", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        await page.getByRole("link", { name: "Search " }).click();
        await page.waitForTimeout(1000);

        // Click Staff link
        await page.getByRole("link", { name: "Staff" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        const content = await page.locator("body").textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test("Take Search Staff screenshot", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");
        await page.getByRole("link", { name: "Search " }).click();
        await page.waitForTimeout(1000);
        await page.getByRole("link", { name: "Staff" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_Search_Staff.png", fullPage: true });
    });
});
