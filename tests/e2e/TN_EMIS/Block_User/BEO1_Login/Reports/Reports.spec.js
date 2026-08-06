import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Reports", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Reports page loads after login", async ({ page }) => {
        // Reports is the default landing page after login
        expect(page.url()).toContain("/component/reports");

        const heading = page.locator("text=Reports");
        await expect(heading).toBeVisible();
    });

    test("Verify Reports search box", async ({ page }) => {
        const searchBox = page.getByRole("textbox", { name: "Search reports..." });
        await expect(searchBox).toBeVisible();
    });

    test("Verify Reports list items visible", async ({ page }) => {
        const staffGrievance = page.locator("text=Staff Grievance");
        await expect(staffGrievance).toBeVisible();

        const osc = page.locator("text=OoSC");
        await expect(osc).toBeVisible();

        const stem = page.locator("text=STEM");
        await expect(stem).toBeVisible();
    });

    test("Verify Review Reports and Other Reports radio buttons", async ({ page }) => {
        const reviewReports = page.locator("text=Review Reports");
        const otherReports = page.locator("text=Other Reports");
        await expect(reviewReports).toBeVisible();
        await expect(otherReports).toBeVisible();
    });

    test("Take Reports screenshot", async ({ page }) => {
        await page.screenshot({ path: "test-results/screenshots/BEO1_Reports.png", fullPage: true });
    });
});
