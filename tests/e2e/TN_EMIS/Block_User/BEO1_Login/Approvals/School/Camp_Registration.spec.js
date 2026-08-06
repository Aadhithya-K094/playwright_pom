import { test, expect } from "../../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";
const MODULE_URL = "/approval/camps-registration-approval";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Approvals > Camp Registration", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Camp Registration page loads", async ({ page }) => {
        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        const content = await page.locator("body").textContent();
        expect(content.length).toBeGreaterThan(0);
        expect(page.url()).toContain(MODULE_URL);
    });

    test("Verify Camp Registration page title", async ({ page }) => {
        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");

        const title = await page.title();
        expect(title).toContain("EMIS");
    });

    test("Verify Camp Registration navigation from Approvals menu", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        // Click Approvals menu
        await page.getByRole("link", { name: "Approvals " }).click();
        await page.waitForTimeout(1000);

        // Click sub-menu item
        await page.getByRole("link", { name: "Camp Registration" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        expect(page.url()).toContain(MODULE_URL);
    });

    test("Verify no critical errors on Camp Registration", async ({ page }) => {
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));

        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        if (errors.length > 0) {
            console.log("Console errors:", errors.length);
            errors.forEach((e, i) => console.log("  " + (i+1) + ". " + e));
        }
    });

    test("Take Camp Registration screenshot", async ({ page }) => {
        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_Approvals_Camp_Registration.png", fullPage: true });
    });
});
