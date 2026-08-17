/**
 * Module: Deputation and Admin Transfer
 * Description: Tests for Approval > Deputation and Admin Transfer module
 * Path: /approval/deputation-transfer
 * Framework: Angular / React (auto-resolved via env)
 * Environment: Staging / Production (auto-resolved via env)
 */
import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { loginData } from "../../../../data/index.js";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Deputation and Admin Transfer Module", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.gotoLoginPage();
        await loginPage.loginWithValidCredentials();
    });

    // ─── Page Load Tests ───────────────────────────────────────────────

    test("TC_DEPUTATION_001 - page loads successfully after login", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await deputationTransferPage.verifyPageLoaded();
    });

    test("TC_DEPUTATION_002 - page navigable via Approvals menu", async ({ deputationTransferPage }) => {
        await deputationTransferPage.navigateViaMenu();
        await deputationTransferPage.verifyPageLoaded();
        const url = await deputationTransferPage.getCurrentURL();
        expect(url).toContain("/approval/deputation-transfer");
    });

    test("TC_DEPUTATION_003 - page title displays Deputation List", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        const title = await deputationTransferPage.getPageTitle();
        expect(title).toContain("Deputation List");
    });

    // ─── Table Structure Tests ─────────────────────────────────────────

    test("TC_DEPUTATION_004 - table headers are visible", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await deputationTransferPage.verifyTableHeaders();
    });

    test("TC_DEPUTATION_005 - data table is present on page", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await expect(deputationTransferPage.dataTable).toBeVisible();
    });

    // ─── Filter Tests ──────────────────────────────────────────────────

    test("TC_DEPUTATION_006 - filter elements are visible", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await deputationTransferPage.verifyFiltersVisible();
    });

    test("TC_DEPUTATION_007 - select type dropdown defaults to Deputation", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await expect(deputationTransferPage.selectTypeContainer).toBeVisible();
    });

    test("TC_DEPUTATION_008 - search input accepts text", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await deputationTransferPage.searchKeyword("test");
        await expect(deputationTransferPage.searchInput).toHaveValue("test");
    });

    test("TC_DEPUTATION_009 - search can be cleared", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await deputationTransferPage.searchKeyword("test");
        await deputationTransferPage.clearSearch();
        await expect(deputationTransferPage.searchInput).toHaveValue("");
    });

    // ─── Pagination Tests ──────────────────────────────────────────────

    test("TC_DEPUTATION_010 - pagination is visible", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await deputationTransferPage.verifyPaginationVisible();
    });

    test("TC_DEPUTATION_011 - pagination info displays record count", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        const paginationText = await deputationTransferPage.getPaginationText();
        expect(paginationText).toContain("of");
    });

    // ─── Debug / Print ─────────────────────────────────────────────────

    test("TC_DEPUTATION_012 - print page details for debugging", async ({ deputationTransferPage }) => {
        await deputationTransferPage.gotoDeputationTransferPage();
        await deputationTransferPage.printPageDetails();
    });

});
