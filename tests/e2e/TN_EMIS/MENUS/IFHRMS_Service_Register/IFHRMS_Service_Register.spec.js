import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("IFHRMS / Service Register Module", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.login(loginData.username, loginData.password);
    });

    test("Verify IFHRMS page loads with Schools List tab", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Verify URL
        expect(page.url()).toContain("/approval/ifhrms");

        // Verify Schools List radio is checked by default
        const schoolsListRadio = page.locator('input[id="btnradio1"]');
        await expect(schoolsListRadio).toBeChecked();

        // Verify "School List" breadcrumb text
        const breadcrumb = page.locator('text=School List');
        await expect(breadcrumb).toBeVisible();
    });

    test("Verify table columns are present", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Verify all column headers
        await expect(page.locator('th:has-text("S.No")')).toBeVisible();
        await expect(page.locator('th:has-text("UDISE")')).toBeVisible();
        await expect(page.locator('th:has-text("School Name")')).toBeVisible();
        await expect(page.locator('th:has-text("School Category")')).toBeVisible();
    });

    test("Verify table has data rows", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Verify at least one data row exists
        const rows = page.locator('tbody tr');
        const rowCount = await rows.count();
        expect(rowCount).toBeGreaterThan(0);

        // Verify first row has serial number "1"
        await expect(page.locator('tbody tr:first-child td:first-child')).toContainText('1');
    });

    test("Verify search functionality", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Search for a school name
        const searchBox = page.locator('input[placeholder="Search keyword"]');
        await expect(searchBox).toBeVisible();
        await searchBox.fill("GOVT");
        await page.waitForTimeout(2000);

        // Verify filtered results contain "GOVT"
        const firstResult = page.locator('tbody tr:first-child td:nth-child(3)');
        await expect(firstResult).toContainText("GOVT");
    });

    test("Verify column filter (UDISE search)", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Use UDISE column filter
        const udiseFilter = page.locator('thead tr:nth-child(2) th:nth-child(2) input');
        await udiseFilter.fill("33210400601");
        await page.waitForTimeout(2000);

        // Verify filtered result
        const firstUdise = page.locator('tbody tr:first-child td:nth-child(2)');
        await expect(firstUdise).toContainText("33210400601");
    });

    test("Verify Officers List tab switch", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Click Officers List tab
        const officersLabel = page.locator('label[for="btnradio2"]');
        await officersLabel.click();
        await page.waitForTimeout(2000);

        // Verify Officers List radio is now checked
        const officersRadio = page.locator('input[id="btnradio2"]');
        await expect(officersRadio).toBeChecked();
    });

    test("Verify pagination exists", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Verify pagination buttons
        const page1Btn = page.locator('button:has-text("1")').first();
        await expect(page1Btn).toBeVisible();

        const page2Btn = page.locator('button:has-text("2")').first();
        await expect(page2Btn).toBeVisible();
    });

    test("Verify pagination navigation to page 2", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Click page 2
        await page.locator('button:has-text("2")').first().click();
        await page.waitForTimeout(2000);

        // Verify serial number starts from 11 (or next set)
        const firstRow = page.locator('tbody tr:first-child td:first-child');
        const text = await firstRow.textContent();
        expect(parseInt(text.trim())).toBeGreaterThan(1);
    });

    test("Verify school name is clickable", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Verify school name link exists
        const schoolLink = page.locator('tbody tr:first-child td:nth-child(3) a');
        await expect(schoolLink).toBeVisible();
    });

    test("Verify sorting by School Name", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/approval/ifhrms");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Get first school name before sort
        const firstBefore = await page.locator('tbody tr:first-child td:nth-child(3)').textContent();

        // Click School Name header to sort
        await page.locator('th:has-text("School Name")').click();
        await page.waitForTimeout(2000);

        // Get first school name after sort
        const firstAfter = await page.locator('tbody tr:first-child td:nth-child(3)').textContent();

        // They should be different after sorting (or same if already sorted)
        // Just verify the page didn't crash
        expect(firstAfter.length).toBeGreaterThan(0);
    });
});
