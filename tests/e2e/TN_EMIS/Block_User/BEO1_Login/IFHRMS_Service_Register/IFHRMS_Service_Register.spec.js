import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("IFHRMS / Service Register", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify IFHRMS page loads", async ({ page }) => {
        await page.goto(${BASE_URL}/approval/ifhrms);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        expect(page.url()).toContain("/approval/ifhrms");
        const title = await page.title();
        expect(title).toContain("EMIS");
    });

    test("Verify IFHRMS navigation from menu", async ({ page }) => {
        await page.goto(${BASE_URL}/dashboard);
        await page.waitForLoadState("networkidle");

        await page.getByRole("link", { name: "IFHRMS / Service Register" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        expect(page.url()).toContain("/approval/ifhrms");
    });

    test("Take IFHRMS screenshot", async ({ page }) => {
        await page.goto(${BASE_URL}/approval/ifhrms);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_IFHRMS.png", fullPage: true });
    });
});
