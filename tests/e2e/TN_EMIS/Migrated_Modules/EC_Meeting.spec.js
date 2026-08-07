import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const MODULE_URL = "https://tnemis-react-staging.tnsed.com/nsnop/ec-meeting";

test.use({ storageState: { cookies: [], origins: [] } });

test("NSNOP - EC Meeting Module (Full Functional Test)", async ({ beo1Page, page }) => {

    // ─── LOGIN (Single login for all tests) ────────────────────────────
    await beo1Page.gotoLoginPage(loginData.url);
    await beo1Page.login(loginData.username, loginData.password);
    await page.goto(MODULE_URL);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);

    // ─── 1. PAGE LOAD ──────────────────────────────────────────────────
    console.log("✓ Step 1: Verify page loads");
    await page.waitForTimeout(500);
    expect(page.url()).toContain("/nsnop/ec-meeting");
    await expect(page.locator('h6:has-text("EC Meeting")')).toBeVisible();
    const title = await page.title();
    expect(title).toContain("EMIS");

    // ─── 2. TABLE COLUMN HEADERS ───────────────────────────────────────
    console.log("✓ Step 2: Verify table columns");
    await page.waitForTimeout(500);
    await expect(page.locator('th:has-text("S.No.")')).toBeVisible();
    await expect(page.locator('th:has-text("Date of EC")')).toBeVisible();
    await expect(page.locator('th:has-text("EC Name")')).toBeVisible();
    await expect(page.locator('th:has-text("View")')).toBeVisible();
    await expect(page.locator('th:has-text("Edit")')).toBeVisible();
    await expect(page.locator('th:has-text("Details")')).toBeVisible();
    await expect(page.locator('th:has-text("Document Generate")')).toBeVisible();
    await expect(page.locator('th:has-text("Document Download")')).toBeVisible();
    await expect(page.locator('th:has-text("Signed Notes")')).toBeVisible();
    await expect(page.locator('th:has-text("Delete")')).toBeVisible();

    // ─── 3. TABLE DATA ─────────────────────────────────────────────────
    console.log("✓ Step 3: Verify table data");
    await page.waitForTimeout(500);
    const rows = page.locator('tbody tr');
    const rowCount = await rows.count();
    expect(rowCount).toBeGreaterThan(0);
    console.log(`  Total rows: ${rowCount}`);

    // Verify first row
    const firstRow = page.locator('tbody tr:first-child');
    await expect(firstRow.locator('td:first-child')).toContainText('1');
    const dateCell = await firstRow.locator('td:nth-child(2)').textContent();
    expect(dateCell.trim().length).toBeGreaterThan(0);
    const nameCell = await firstRow.locator('td:nth-child(3)').textContent();
    expect(nameCell.trim().length).toBeGreaterThan(0);
    console.log(`  First row: ${dateCell.trim()} | ${nameCell.trim()}`);

    // ─── 4. SEARCH FUNCTIONALITY ───────────────────────────────────────
    console.log("✓ Step 4: Test search");
    await page.waitForTimeout(500);
    const searchBox = page.getByRole('textbox', { name: 'Search...' });
    await expect(searchBox).toBeVisible();

    // Search "4th"
    await searchBox.fill("4th");
    await page.waitForTimeout(2000);
    await expect(page.locator('text=Showing 1 to 1 of 1 entries')).toBeVisible();
    await expect(page.locator('tbody tr:first-child td:nth-child(3)')).toContainText("4th EC Meeting");
    console.log("  Search '4th' → 1 result found");

    // Search no results
    await page.waitForTimeout(500);
    await searchBox.fill("ZZZZNONEXISTENT");
    await page.waitForTimeout(2000);
    await expect(page.locator('text=Showing 0 to 0 of 0 entries')).toBeVisible();
    console.log("  Search invalid → 0 results");

    // Clear search
    await page.waitForTimeout(500);
    await searchBox.fill("");
    await page.waitForTimeout(2000);
    await expect(page.locator(`text=Showing 1 to ${rowCount} of ${rowCount} entries`)).toBeVisible();
    console.log("  Clear search → all records restored");

    // ─── 5. VIEW ACTION ────────────────────────────────────────────────
    console.log("✓ Step 5: Test View action");
    await page.waitForTimeout(500);
    await page.locator('tbody tr:first-child img[alt="view"]').click();
    await page.waitForTimeout(2000);

    // Verify dialog opens
    const dialog = page.getByRole('dialog', { name: 'View Form' });
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('text=Ec Date')).toBeVisible();
    await expect(dialog.locator('text=EC Name')).toBeVisible();

    // Verify date value
    const dateInput = dialog.locator('input[disabled]').first();
    const dateValue = await dateInput.inputValue();
    expect(dateValue.length).toBeGreaterThan(0);
    console.log(`  View dialog opened: Date=${dateValue}`);

    // Close dialog
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1000);
    await expect(dialog).not.toBeVisible();
    console.log("  Dialog closed successfully");

    // ─── 6. DOCUMENT ACTIONS ───────────────────────────────────────────
    console.log("✓ Step 6: Verify document actions");
    await page.waitForTimeout(500);

    // Regenerate buttons
    const regenerateButtons = page.locator('button:has-text("Regenerate")');
    const regenCount = await regenerateButtons.count();
    expect(regenCount).toBeGreaterThan(0);
    console.log(`  Regenerate buttons: ${regenCount}`);

    // Download links
    const downloadLink = page.locator('tbody tr:first-child a[href*=".pdf"]').first();
    await expect(downloadLink).toBeVisible();
    console.log("  PDF download link visible");

    // Signed Notes upload button
    const uploadBtn = page.locator('tbody tr:first-child td:nth-child(9) button').first();
    await expect(uploadBtn).toBeVisible();
    console.log("  Signed Notes upload button visible");

    // ─── 7. DATE FILTER ────────────────────────────────────────────────
    console.log("✓ Step 7: Verify date filter");
    await page.waitForTimeout(500);
    await expect(page.locator('input[placeholder="Select date..."]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Choose Date' })).toBeVisible();

    // ─── 8. EXCEL EXPORT ───────────────────────────────────────────────
    console.log("✓ Step 8: Test Excel Export");
    await page.waitForTimeout(500);
    const exportBtn = page.getByRole('button', { name: 'Excel Export' });
    await expect(exportBtn).toBeVisible();
    await exportBtn.click();
    await page.waitForTimeout(2000);
    expect(page.url()).toContain("/nsnop/ec-meeting");
    console.log("  Excel Export clicked - no crash");

    // ─── 9. SORTING ────────────────────────────────────────────────────
    console.log("✓ Step 9: Test sorting");
    await page.waitForTimeout(500);

    // Sort by Date
    await page.locator('th:has-text("Date of EC")').click();
    await page.waitForTimeout(2000);
    const sortedDate = await page.locator('tbody tr:first-child td:nth-child(2)').textContent();
    expect(sortedDate.trim().length).toBeGreaterThan(0);
    console.log(`  Sorted by Date → first: ${sortedDate.trim()}`);

    // Sort by EC Name
    await page.waitForTimeout(500);
    await page.locator('th:has-text("EC Name")').click();
    await page.waitForTimeout(2000);
    const sortedName = await page.locator('tbody tr:first-child td:nth-child(3)').textContent();
    expect(sortedName.trim().length).toBeGreaterThan(0);
    console.log(`  Sorted by Name → first: ${sortedName.trim().substring(0, 30)}...`);

    // ─── 10. PAGINATION ────────────────────────────────────────────────
    console.log("✓ Step 10: Verify pagination");
    await page.waitForTimeout(500);
    await expect(page.getByRole('button', { name: 'First Page' })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Previous Page' })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Next Page' })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Last Page' })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Page 1' })).toBeVisible();
    console.log("  Pagination buttons verified (single page)");

    // ─── DONE ──────────────────────────────────────────────────────────
    console.log("\n═══════════════════════════════════════════════");
    console.log("  EC Meeting Module: ALL 10 STEPS PASSED ✓");
    console.log("═══════════════════════════════════════════════\n");
});
