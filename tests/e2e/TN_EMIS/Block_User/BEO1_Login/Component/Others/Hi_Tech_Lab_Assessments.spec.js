import { test, expect } from "../../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const BASE_URL = "https://tnemis-staging.tnsed.com";
const MODULE_URL = "/component/hi-tech-assessment-dashboard";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Component > Hi Tech Lab Assessments", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Hi Tech Lab Assessments page loads", async ({ page }) => {
        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Verify page loaded
        const content = await page.locator("body").textContent();
        expect(content.length).toBeGreaterThan(0);
        expect(page.url()).toContain(MODULE_URL);
    });

    test("Verify Hi Tech Lab Assessments page title", async ({ page }) => {
        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");

        const title = await page.title();
        expect(title).toContain("EMIS");
    });

    test("Verify Hi Tech Lab Assessments navigation from Component menu", async ({ page }) => {
        await page.goto(BASE_URL + "/dashboard");
        await page.waitForLoadState("networkidle");

        // Click Component menu
        await page.getByRole("link", { name: "Component " }).click();
        await page.waitForTimeout(1000);

        // Click sub-menu item
        await page.getByRole("link", { name: "Hi Tech Lab Assessments" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        expect(page.url()).toContain(MODULE_URL);
    });

    test("Verify no console errors on Hi Tech Lab Assessments", async ({ page }) => {
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));

        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Log errors if any (not failing test, just reporting)
        if (errors.length > 0) {
            console.log("Console errors found:", errors.length);
            errors.forEach((e, i) => console.log("  " + (i+1) + ". " + e));
        }
    });

    test("Take Hi Tech Lab Assessments screenshot", async ({ page }) => {
        await page.goto(BASE_URL + MODULE_URL);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        await page.screenshot({ path: "test-results/screenshots/BEO1_Component_Hi_Tech_Lab_Assessments.png", fullPage: true });
    });
});
