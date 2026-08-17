/**
 * DeputationTransferPage - Approval > Deputation and Admin Transfer module.
 *
 * Handles: Navigation to module, filter interactions, table verification,
 * search, pagination, and type selection (Deputation / Admin Transfer).
 */
import { BasePage } from "./BasePage.js";
import { getDeputationTransferLocators, DEPUTATION_TRANSFER_PATH } from "../locators/deputationTransferLocators.js";
import { currentEnv } from "../../config/index.js";

export class DeputationTransferPage extends BasePage {

    constructor(page) {
        super(page);
        const loc = getDeputationTransferLocators();

        // ─── Navigation ────────────────────────────────────────────────
        this.approvalsMenu = page.locator(loc.approvalsMenu);
        this.deputationSubmenu = page.locator(loc.deputationSubmenu);

        // ─── Page Header ───────────────────────────────────────────────
        this.pageTitle = page.locator(loc.pageTitle);

        // ─── Filters ───────────────────────────────────────────────────
        this.selectTypeDropdown = page.locator(loc.selectTypeDropdown);
        this.selectTypeContainer = page.locator(loc.selectTypeContainer);
        this.columnChooser = page.locator(loc.columnChooser);
        this.columnChooserContainer = page.locator(loc.columnChooserContainer);
        this.searchInput = page.locator(loc.searchInput);
        this.addButton = page.locator(loc.addButton);

        // ─── Table ─────────────────────────────────────────────────────
        this.dataTable = page.locator(loc.dataTable);
        this.tableHeader = page.locator(loc.tableHeader);
        this.tableBody = page.locator(loc.tableBody);
        this.noRecordsMessage = page.locator(loc.noRecordsMessage);

        // ─── Table Column Headers ──────────────────────────────────────
        this.colTeacherName = page.locator(loc.colTeacherName);
        this.colTeacherId = page.locator(loc.colTeacherId);
        this.colNewTeacherId = page.locator(loc.colNewTeacherId);
        this.colFromSchool = page.locator(loc.colFromSchool);
        this.colToSchool = page.locator(loc.colToSchool);
        this.colTransferer = page.locator(loc.colTransferer);
        this.colFromDate = page.locator(loc.colFromDate);
        this.colToDate = page.locator(loc.colToDate);
        this.colOrderCopy = page.locator(loc.colOrderCopy);

        // ─── Pagination ────────────────────────────────────────────────
        this.pagination = page.locator(loc.pagination);
        this.paginationInfo = page.locator(loc.paginationInfo);
        this.paginationFirst = page.locator(loc.paginationFirst);
        this.paginationPrev = page.locator(loc.paginationPrev);
        this.paginationNext = page.locator(loc.paginationNext);
        this.paginationLast = page.locator(loc.paginationLast);

        // ─── Dropdown Options ──────────────────────────────────────────
        this.dropdownOptionDeputation = page.locator(loc.dropdownOptionDeputation);
        this.dropdownOptionAdminTransfer = page.locator(loc.dropdownOptionAdminTransfer);
    }

    // ─── Navigation ────────────────────────────────────────────────────

    async gotoDeputationTransferPage() {
        const url = `${currentEnv.baseURL}${DEPUTATION_TRANSFER_PATH}`;
        await this.open(url);
        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState("domcontentloaded");
    }

    async navigateViaMenu() {
        await this.page.waitForTimeout(1000);
        await this.click(this.approvalsMenu);
        await this.page.waitForTimeout(1000);
        await this.click(this.deputationSubmenu);
        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState("domcontentloaded");
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyPageLoaded() {
        const url = await this.getCurrentURL();
        if (!url.includes("deputation-transfer")) {
            throw new Error(`Expected URL to contain "deputation-transfer" but got: ${url}`);
        }
        // Wait for either page title OR table to appear (page may render progressively)
        try {
            await this.pageTitle.waitFor({ state: "visible", timeout: 15000 });
        } catch {
            // If page title button isn't visible, check if table loaded directly
            await this.dataTable.waitFor({ state: "visible", timeout: 15000 });
        }
        console.log("  ✓ Deputation and Admin Transfer page loaded successfully");
    }

    async verifyTableHeaders() {
        await this.verifyVisible(this.colTeacherName);
        await this.verifyVisible(this.colTeacherId);
        await this.verifyVisible(this.colFromSchool);
        await this.verifyVisible(this.colToSchool);
        await this.verifyVisible(this.colTransferer);
        await this.verifyVisible(this.colFromDate);
        await this.verifyVisible(this.colToDate);
        await this.verifyVisible(this.colOrderCopy);
        console.log("  ✓ All table column headers are visible");
    }

    async verifyFiltersVisible() {
        await this.verifyVisible(this.selectTypeContainer);
        await this.verifyVisible(this.searchInput);
        await this.verifyVisible(this.addButton);
        console.log("  ✓ All filter elements are visible");
    }

    async verifyNoRecords() {
        await this.verifyVisible(this.noRecordsMessage);
        console.log("  ✓ No records found message displayed");
    }

    async verifyPaginationVisible() {
        await this.verifyVisible(this.pagination);
        console.log("  ✓ Pagination is visible");
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async selectTypeDeputation() {
        await this.click(this.selectTypeContainer);
        await this.page.waitForTimeout(300);
        await this.click(this.dropdownOptionDeputation);
        await this.waitForLoad();
        console.log("  ✓ Selected type: Deputation");
    }

    async selectTypeAdminTransfer() {
        await this.click(this.selectTypeContainer);
        await this.page.waitForTimeout(300);
        await this.click(this.dropdownOptionAdminTransfer);
        await this.waitForLoad();
        console.log("  ✓ Selected type: Admin Transfer");
    }

    async searchKeyword(keyword) {
        await this.fill(this.searchInput, keyword);
        await this.page.waitForTimeout(500);
        console.log(`  ✓ Searched for keyword: "${keyword}"`);
    }

    async clearSearch() {
        await this.clear(this.searchInput);
        await this.page.waitForTimeout(300);
        console.log("  ✓ Search cleared");
    }

    async clickAddButton() {
        await this.click(this.addButton);
        await this.waitForLoad();
        console.log("  ✓ Clicked Add button");
    }

    // ─── Pagination Actions ────────────────────────────────────────────

    async goToNextPage() {
        await this.click(this.paginationNext);
        await this.waitForLoad();
    }

    async goToPrevPage() {
        await this.click(this.paginationPrev);
        await this.waitForLoad();
    }

    async goToFirstPage() {
        await this.click(this.paginationFirst);
        await this.waitForLoad();
    }

    async goToLastPage() {
        await this.click(this.paginationLast);
        await this.waitForLoad();
    }

    // ─── Getters ───────────────────────────────────────────────────────

    async getTableRowCount() {
        const rows = this.tableBody.locator("tr");
        const count = await rows.count();
        console.log(`  Table rows: ${count}`);
        return count;
    }

    async getPaginationText() {
        const text = await this.paginationInfo.textContent();
        console.log(`  Pagination: ${text}`);
        return text;
    }

    async getPageTitle() {
        const text = await this.pageTitle.textContent();
        return text.trim();
    }

    // ─── Debug / Print ─────────────────────────────────────────────────

    async printPageDetails() {
        console.log("\n--- Deputation and Admin Transfer Page Details ---");
        const title = await this.getPageTitle();
        console.log(`  Page Title: ${title}`);
        const url = await this.getCurrentURL();
        console.log(`  URL: ${url}`);
        const rowCount = await this.getTableRowCount();
        console.log(`  Table Rows: ${rowCount}`);
        const paginationText = await this.getPaginationText();
        console.log(`  Pagination: ${paginationText}`);
        console.log("--- End Details ---\n");
    }
}
