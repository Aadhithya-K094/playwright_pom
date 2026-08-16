import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Home / Dashboard Module", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.login(loginData.username, loginData.password);
    });

    test("Verify Dashboard page loads", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        expect(page.url()).toContain("/dashboard");

        // Verify district name visible in header
        const districtName = page.locator('text=THANJAVUR');
        await expect(districtName).toBeVisible();
    });

    test("Verify Total Students card", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Verify heading
        await expect(page.locator('h6:has-text("TOTAL STUDENTS")')).toBeVisible();

        // Verify count is a number
        const count = await page.locator('h6:has-text("TOTAL STUDENTS") + h4').textContent();
        expect(count.trim().length).toBeGreaterThan(0);

        // Verify Boys and Girls breakdown
        await expect(page.locator('text=Boys')).toBeVisible();
        await expect(page.locator('text=Girls')).toBeVisible();
    });

    test("Verify Total Schools card", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        await expect(page.locator('h6:has-text("TOTAL SCHOOLS")')).toBeVisible();

        // Verify Government and Others breakdown
        await expect(page.locator('text=Government')).toBeVisible();
        await expect(page.locator('text=Others')).toBeVisible();
    });

    test("Verify Total Staffs card", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        await expect(page.locator('h6:has-text("TOTAL STAFFS")')).toBeVisible();

        // Verify Teaching and Non Teaching breakdown
        await expect(page.locator('text=Teaching')).toBeVisible();
        await expect(page.locator('text=Non Teaching')).toBeVisible();
    });

    test("Verify Last Updated Date is displayed", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        const dateText = page.locator('text=Last Updated Date').first();
        await expect(dateText).toBeVisible();
    });

    test("Click Enrolment tab - verify charts appear", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Click Enrolment tab
        await page.locator('label[for="btnradio2"]').click();
        await page.waitForTimeout(3000);

        // Verify Enrolment radio is now checked
        await expect(page.locator('input[id="btnradio2"]')).toBeChecked();

        // Verify "Total Enrollment Over Time" button appears
        await expect(page.getByRole('button', { name: 'Total Enrollment Over Time' })).toBeVisible();

        // Verify ITEMS heading appears
        await expect(page.locator('h4:has-text("ITEMS")')).toBeVisible();

        // Verify chart menu items appear
        await expect(page.locator('img[alt="Total Enrollment Over Time"]')).toBeVisible();
        await expect(page.locator('img[alt="ClassWise Enrollment Over Time"]')).toBeVisible();
        await expect(page.locator('img[alt="Transition Rate"]')).toBeVisible();
        await expect(page.locator('img[alt="Total Enrollment By Gender"]')).toBeVisible();

        // Verify Graph View tab is selected
        await expect(page.getByRole('tab', { name: 'Graph View' })).toBeVisible();
        await expect(page.getByRole('tab', { name: 'Grid View' })).toBeVisible();
    });

    test("Click Enrolment > Grid View tab", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Switch to Enrolment
        await page.locator('label[for="btnradio2"]').click();
        await page.waitForTimeout(3000);

        // Click Grid View tab
        await page.getByRole('tab', { name: 'Grid View' }).click();
        await page.waitForTimeout(2000);

        // Verify Grid View tab is now selected
        const gridTab = page.getByRole('tab', { name: 'Grid View' });
        await expect(gridTab).toHaveAttribute('aria-selected', 'true');
    });

    test("Click Enrolment > ClassWise chart menu item", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Switch to Enrolment
        await page.locator('label[for="btnradio2"]').click();
        await page.waitForTimeout(3000);

        // Click ClassWise Enrollment Over Time
        await page.locator('img[alt="ClassWise Enrollment Over Time"]').click();
        await page.waitForTimeout(2000);

        // Verify button text changed
        await expect(page.getByRole('button', { name: 'ClassWise Enrollment Over Time' })).toBeVisible();
    });

    test("Click Live Data tab - verify attendance section", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Verify Live Data is checked by default
        await expect(page.locator('input[id="btnradio1"]')).toBeChecked();

        // Verify Marking Status button is visible
        await expect(page.getByRole('button', { name: 'Marking Status' })).toBeVisible();

        // Verify Attendance Status button
        await expect(page.getByRole('button', { name: 'Attendance Status' })).toBeVisible();
    });

    test("Click Attendance Status button", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Click Attendance Status
        await page.getByRole('button', { name: 'Attendance Status' }).click();
        await page.waitForTimeout(2000);

        // Verify the table still shows rows
        await expect(page.locator('td:has-text("Schools (Students)")')).toBeVisible();
        await expect(page.locator('td:has-text("School (Staff)")')).toBeVisible();
        await expect(page.locator('td:has-text("ITK Centre")')).toBeVisible();
    });

    test("Click Marking Status button", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Click Attendance Status first
        await page.getByRole('button', { name: 'Attendance Status' }).click();
        await page.waitForTimeout(1000);

        // Click back to Marking Status
        await page.getByRole('button', { name: 'Marking Status' }).click();
        await page.waitForTimeout(2000);

        // Verify table rows still present
        await expect(page.locator('td:has-text("Schools (Students)")')).toBeVisible();
    });

    test("Click attendance table row - expands details", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Click on Schools (Students) row
        await page.locator('td:has-text("Schools (Students)")').click();
        await page.waitForTimeout(2000);

        // Verify expanded content shows Government, Fully Aided, Partially Aided
        await expect(page.locator('h5:has-text("Government")').first()).toBeVisible();
        await expect(page.locator('h5:has-text("Fully Aided")').first()).toBeVisible();
        await expect(page.locator('h5:has-text("Partially Aided")').first()).toBeVisible();
    });

    test("Click Live Data then switch to Enrolment and back", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        // Switch to Enrolment
        await page.locator('label[for="btnradio2"]').click();
        await page.waitForTimeout(2000);
        await expect(page.locator('input[id="btnradio2"]')).toBeChecked();

        // Switch back to Live Data
        await page.locator('label[for="btnradio1"]').click();
        await page.waitForTimeout(2000);
        await expect(page.locator('input[id="btnradio1"]')).toBeChecked();

        // Verify attendance section is back
        await expect(page.getByRole('button', { name: 'Marking Status' })).toBeVisible();
    });

    test("Verify user info in header", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);

        // Verify user name
        await expect(page.locator('text=MANVIZHI P')).toBeVisible();

        // Verify Active status
        await expect(page.locator('text=Active')).toBeVisible();

        // Verify notification badge
        await expect(page.locator('text=0').first()).toBeVisible();
    });

    test("Verify attendance info text", async ({ page }) => {
        await page.goto("https://tnemis-staging.tnsed.com/dashboard");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);

        await expect(page.locator('text=Click on each progress bar to view details')).toBeVisible();
        await expect(page.locator('text=This data will be updated hourly')).toBeVisible();
    });
});
