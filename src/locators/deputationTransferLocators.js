/**
 * Deputation and Admin Transfer - Locators
 *
 * Separate locator file for the Approval > Deputation and Admin Transfer module.
 * Structured by environment (staging/production) and framework (angular/react).
 *
 * Usage:
 *   import { getDeputationTransferLocators } from "../locators/deputationTransferLocators.js";
 *   const loc = getDeputationTransferLocators();
 *   this.selectType = page.locator(loc.selectTypeDropdown);
 */
import { TEST_ENV, UI_FRAMEWORK } from "../../config/index.js";

const deputationTransferLocators = {

    staging: {
        angular: {
            // ─── Navigation ────────────────────────────────────────────
            approvalsMenu: '//span[@class="menu-title" and contains(text(),"Approvals")]',
            deputationSubmenu: '//span[@class="submenu-label" and contains(text(),"Deputation and Admin Transfer")]',

            // ─── Page Header ───────────────────────────────────────────
            pageTitle: '//button[contains(@class,"headingButton") and contains(text(),"Deputation List")]',

            // ─── Filters ───────────────────────────────────────────────
            selectTypeDropdown: '//p-dropdown[@placeholder="Select Type"]//input[@role="combobox"]',
            selectTypeContainer: '//p-dropdown[@placeholder="Select Type"]',
            columnChooser: '//p-multiselect//input[@role="listbox"]',
            columnChooserContainer: '//div[contains(@class,"p-multiselect")]',
            searchInput: '//input[@placeholder="Search keyword"]',
            addButton: '//button[contains(@class,"p-button") and @label="Add"]',

            // ─── Table ─────────────────────────────────────────────────
            dataTable: '//table[contains(@class,"p-datatable-table")]',
            tableHeader: '//table[contains(@class,"p-datatable-table")]//thead',
            tableBody: '//table[contains(@class,"p-datatable-table")]//tbody',
            noRecordsMessage: '//td[contains(@class,"text-center")]//b[contains(text(),"No records found")]',

            // ─── Table Column Headers ──────────────────────────────────
            colSerialNo: '//th[contains(text(),"#")]',
            colTeacherName: '//th[@psortablecolumn="teacherName"]',
            colTeacherId: '//th[@psortablecolumn="teacherId"]',
            colNewTeacherId: '//th[@psortablecolumn="newTeacherId"]',
            colFromSchool: '//th[contains(text(),"From School/Office Name")]',
            colToSchool: '//th[contains(text(),"To School/Office Name")]',
            colTransferer: '//th[@psortablecolumn="transferer"]',
            colFromDate: '//th[contains(text(),"From Date")]',
            colToDate: '//th[contains(text(),"To Date")]',
            colOrderCopy: '//th[contains(text(),"Order Copy")]',

            // ─── Pagination ────────────────────────────────────────────
            pagination: '//div[contains(@class,"p-paginator")]',
            paginationInfo: '//span[contains(@class,"p-paginator-current")]',
            paginationFirst: '//button[contains(@class,"p-paginator-first")]',
            paginationPrev: '//button[contains(@class,"p-paginator-prev")]',
            paginationNext: '//button[contains(@class,"p-paginator-next")]',
            paginationLast: '//button[contains(@class,"p-paginator-last")]',

            // ─── Dropdown Options ──────────────────────────────────────
            dropdownOptionDeputation: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Deputation")]',
            dropdownOptionAdminTransfer: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Admin Transfer")]'
        },

        react: {
            // ─── Navigation ────────────────────────────────────────────
            approvalsMenu: '//span[@class="submenu-label" and contains(text(),"Approvals")]',
            deputationSubmenu: '//span[@class="submenu-label" and contains(text(),"Deputation and Admin Transfer")]',

            // ─── Page Header ───────────────────────────────────────────
            pageTitle: '//button[contains(@class,"headingButton") and contains(text(),"Deputation List")]',

            // ─── Filters ───────────────────────────────────────────────
            selectTypeDropdown: '//p-dropdown[@placeholder="Select Type"]//input[@role="combobox"]',
            selectTypeContainer: '//p-dropdown[@placeholder="Select Type"]',
            columnChooser: '//p-multiselect//input[@role="listbox"]',
            columnChooserContainer: '//div[contains(@class,"p-multiselect")]',
            searchInput: '//input[@placeholder="Search keyword"]',
            addButton: '//button[contains(@class,"p-button") and @label="Add"]',

            // ─── Table ─────────────────────────────────────────────────
            dataTable: '//table[contains(@class,"p-datatable-table")]',
            tableHeader: '//table[contains(@class,"p-datatable-table")]//thead',
            tableBody: '//table[contains(@class,"p-datatable-table")]//tbody',
            noRecordsMessage: '//td[contains(@class,"text-center")]//b[contains(text(),"No records found")]',

            // ─── Table Column Headers ──────────────────────────────────
            colSerialNo: '//th[contains(text(),"#")]',
            colTeacherName: '//th[@psortablecolumn="teacherName"]',
            colTeacherId: '//th[@psortablecolumn="teacherId"]',
            colNewTeacherId: '//th[@psortablecolumn="newTeacherId"]',
            colFromSchool: '//th[contains(text(),"From School/Office Name")]',
            colToSchool: '//th[contains(text(),"To School/Office Name")]',
            colTransferer: '//th[@psortablecolumn="transferer"]',
            colFromDate: '//th[contains(text(),"From Date")]',
            colToDate: '//th[contains(text(),"To Date")]',
            colOrderCopy: '//th[contains(text(),"Order Copy")]',

            // ─── Pagination ────────────────────────────────────────────
            pagination: '//div[contains(@class,"p-paginator")]',
            paginationInfo: '//span[contains(@class,"p-paginator-current")]',
            paginationFirst: '//button[contains(@class,"p-paginator-first")]',
            paginationPrev: '//button[contains(@class,"p-paginator-prev")]',
            paginationNext: '//button[contains(@class,"p-paginator-next")]',
            paginationLast: '//button[contains(@class,"p-paginator-last")]',

            // ─── Dropdown Options ──────────────────────────────────────
            dropdownOptionDeputation: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Deputation")]',
            dropdownOptionAdminTransfer: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Admin Transfer")]'
        }
    },

    production: {
        angular: {
            // ─── Navigation ────────────────────────────────────────────
            approvalsMenu: '//span[@class="menu-title" and contains(text(),"Approvals")]',
            deputationSubmenu: '//span[@class="submenu-label" and contains(text(),"Deputation and Admin Transfer")]',

            // ─── Page Header ───────────────────────────────────────────
            pageTitle: '//button[contains(@class,"headingButton") and contains(text(),"Deputation List")]',

            // ─── Filters ───────────────────────────────────────────────
            selectTypeDropdown: '//p-dropdown[@placeholder="Select Type"]//input[@role="combobox"]',
            selectTypeContainer: '//p-dropdown[@placeholder="Select Type"]',
            columnChooser: '//p-multiselect//input[@role="listbox"]',
            columnChooserContainer: '//div[contains(@class,"p-multiselect")]',
            searchInput: '//input[@placeholder="Search keyword"]',
            addButton: '//button[contains(@class,"p-button") and @label="Add"]',

            // ─── Table ─────────────────────────────────────────────────
            dataTable: '//table[contains(@class,"p-datatable-table")]',
            tableHeader: '//table[contains(@class,"p-datatable-table")]//thead',
            tableBody: '//table[contains(@class,"p-datatable-table")]//tbody',
            noRecordsMessage: '//td[contains(@class,"text-center")]//b[contains(text(),"No records found")]',

            // ─── Table Column Headers ──────────────────────────────────
            colSerialNo: '//th[contains(text(),"#")]',
            colTeacherName: '//th[@psortablecolumn="teacherName"]',
            colTeacherId: '//th[@psortablecolumn="teacherId"]',
            colNewTeacherId: '//th[@psortablecolumn="newTeacherId"]',
            colFromSchool: '//th[contains(text(),"From School/Office Name")]',
            colToSchool: '//th[contains(text(),"To School/Office Name")]',
            colTransferer: '//th[@psortablecolumn="transferer"]',
            colFromDate: '//th[contains(text(),"From Date")]',
            colToDate: '//th[contains(text(),"To Date")]',
            colOrderCopy: '//th[contains(text(),"Order Copy")]',

            // ─── Pagination ────────────────────────────────────────────
            pagination: '//div[contains(@class,"p-paginator")]',
            paginationInfo: '//span[contains(@class,"p-paginator-current")]',
            paginationFirst: '//button[contains(@class,"p-paginator-first")]',
            paginationPrev: '//button[contains(@class,"p-paginator-prev")]',
            paginationNext: '//button[contains(@class,"p-paginator-next")]',
            paginationLast: '//button[contains(@class,"p-paginator-last")]',

            // ─── Dropdown Options ──────────────────────────────────────
            dropdownOptionDeputation: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Deputation")]',
            dropdownOptionAdminTransfer: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Admin Transfer")]'
        },

        react: {
            // ─── Navigation ────────────────────────────────────────────
            approvalsMenu: '//span[@class="submenu-label" and contains(text(),"Approvals")]',
            deputationSubmenu: '//span[@class="submenu-label" and contains(text(),"Deputation and Admin Transfer")]',

            // ─── Page Header ───────────────────────────────────────────
            pageTitle: '//button[contains(@class,"headingButton") and contains(text(),"Deputation List")]',

            // ─── Filters ───────────────────────────────────────────────
            selectTypeDropdown: '//p-dropdown[@placeholder="Select Type"]//input[@role="combobox"]',
            selectTypeContainer: '//p-dropdown[@placeholder="Select Type"]',
            columnChooser: '//p-multiselect//input[@role="listbox"]',
            columnChooserContainer: '//div[contains(@class,"p-multiselect")]',
            searchInput: '//input[@placeholder="Search keyword"]',
            addButton: '//button[contains(@class,"p-button") and @label="Add"]',

            // ─── Table ─────────────────────────────────────────────────
            dataTable: '//table[contains(@class,"p-datatable-table")]',
            tableHeader: '//table[contains(@class,"p-datatable-table")]//thead',
            tableBody: '//table[contains(@class,"p-datatable-table")]//tbody',
            noRecordsMessage: '//td[contains(@class,"text-center")]//b[contains(text(),"No records found")]',

            // ─── Table Column Headers ──────────────────────────────────
            colSerialNo: '//th[contains(text(),"#")]',
            colTeacherName: '//th[@psortablecolumn="teacherName"]',
            colTeacherId: '//th[@psortablecolumn="teacherId"]',
            colNewTeacherId: '//th[@psortablecolumn="newTeacherId"]',
            colFromSchool: '//th[contains(text(),"From School/Office Name")]',
            colToSchool: '//th[contains(text(),"To School/Office Name")]',
            colTransferer: '//th[@psortablecolumn="transferer"]',
            colFromDate: '//th[contains(text(),"From Date")]',
            colToDate: '//th[contains(text(),"To Date")]',
            colOrderCopy: '//th[contains(text(),"Order Copy")]',

            // ─── Pagination ────────────────────────────────────────────
            pagination: '//div[contains(@class,"p-paginator")]',
            paginationInfo: '//span[contains(@class,"p-paginator-current")]',
            paginationFirst: '//button[contains(@class,"p-paginator-first")]',
            paginationPrev: '//button[contains(@class,"p-paginator-prev")]',
            paginationNext: '//button[contains(@class,"p-paginator-next")]',
            paginationLast: '//button[contains(@class,"p-paginator-last")]',

            // ─── Dropdown Options ──────────────────────────────────────
            dropdownOptionDeputation: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Deputation")]',
            dropdownOptionAdminTransfer: '//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Admin Transfer")]'
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// RESOLVER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get Deputation and Admin Transfer locators for the current environment + framework.
 *
 * @param {string} [forceFramework] - Override: "angular" or "react"
 * @returns {Object} Resolved locators for the Deputation and Admin Transfer page
 */
export function getDeputationTransferLocators(forceFramework) {

    const env = TEST_ENV || "staging";
    const framework = forceFramework || UI_FRAMEWORK;

    console.log(`  DeputationTransfer Locators: env="${env}" | framework="${framework}"`);

    return deputationTransferLocators[env][framework];
}

/**
 * Module URL path for Deputation and Admin Transfer.
 */
export const DEPUTATION_TRANSFER_PATH = "/approval/deputation-transfer";

export { deputationTransferLocators };
export default getDeputationTransferLocators;
