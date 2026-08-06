/**
 * ExcelReader - Reads test data from Excel files in data/excel/.
 *
 * Main file: TestData.xlsx
 *   - Sheets: Login, Dashboard, ForgotPassword
 *   - Format: Key | staging | production (each row has data for both environments)
 *
 * The reader picks the column matching TEST_ENV automatically.
 *
 * Usage:
 *   import { getTestData, getLoginData, getDashboardData, getForgotPasswordData } from "../helpers/ExcelReader.js";
 *
 *   const login = getLoginData();
 *   console.log(login.validUser);      // "4028609"
 *   console.log(login.validPassword);  // "test@123"
 */
import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import { currentEnv, TEST_ENV } from "../../config/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, "../../data/excel");
const TEST_DATA_FILE = path.join(DATA_DIR, "TestData.xlsx");

/**
 * Read a sheet from TestData.xlsx and pick the column matching TEST_ENV.
 * Converts rows into a key-value object and injects the environment URL.
 *
 * Excel format: Key | staging | production
 * If TEST_ENV is "staging", reads the "staging" column.
 * If TEST_ENV is "production", reads the "production" column.
 *
 * @param {string} sheetName - Sheet name (e.g. "Login", "Dashboard", "ForgotPassword")
 * @returns {Object} Key-value object from the sheet + url from env config
 */
export function getTestData(sheetName) {

    const workbook = xlsx.readFile(TEST_DATA_FILE);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in TestData.xlsx. Available: ${workbook.SheetNames.join(", ")}`);
    }

    const rows = xlsx.utils.sheet_to_json(sheet);
    const env = TEST_ENV || "staging";

    // Convert [{Key: "validUser", staging: "4028609", production: "4028609"}, ...]
    // → {validUser: "4028609", ...} based on current TEST_ENV
    const data = {};
    for (const row of rows) {
        if (row.Key !== undefined) {
            // Pick the value from the environment column, fall back to Value column (legacy support)
            const value = row[env] !== undefined ? row[env] : (row.Value !== undefined ? row.Value : "");
            data[row.Key] = value;
        }
    }

    // Inject URL from environment config
    data.url = currentEnv.loginURL;

    return data;
}

/**
 * Get Login sheet data.
 * @returns {{url: string, title: string, validUser: string, validPassword: string, invalidUser: string, invalidPassword: string, space: string}}
 */
export function getLoginData() {
    return getTestData("Login");
}

/**
 * Get Dashboard sheet data (legacy - returns first row set).
 * @returns {{url: string, username: string, password: string}}
 */
export function getDashboardData() {
    return getTestData("Dashboard");
}

/**
 * Get test data filtered by Name column from a sheet.
 * Used for role-specific data (e.g., BEO, BEO1, BRC_Senior_Officer).
 *
 * Excel format: Name | Key | staging | production
 * Filters rows where Name === roleName, then builds key-value object from matching rows.
 *
 * @param {string} sheetName - Sheet name (e.g. "Dashboard")
 * @param {string} roleName - Role name to filter by (e.g. "BEO", "BEO1", "BRC_Senior_Officer")
 * @returns {Object} Key-value object for the specified role + url from env config
 */
export function getTestDataByName(sheetName, roleName) {

    const workbook = xlsx.readFile(TEST_DATA_FILE);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in TestData.xlsx. Available: ${workbook.SheetNames.join(", ")}`);
    }

    const rows = xlsx.utils.sheet_to_json(sheet);
    const env = TEST_ENV || "staging";

    // Filter rows by Name column, then build key-value object
    const data = {};
    for (const row of rows) {
        if (row.Name === roleName && row.Key !== undefined) {
            const value = row[env] !== undefined ? row[env] : (row.Value !== undefined ? row.Value : "");
            data[row.Key] = value;
        }
    }

    if (Object.keys(data).length === 0) {
        throw new Error(`No data found for Name="${roleName}" in sheet "${sheetName}" for env="${env}"`);
    }

    // Inject URL from environment config
    data.url = currentEnv.loginURL;

    return data;
}

/**
 * Get Dashboard data for a specific role.
 * @param {string} roleName - e.g. "BEO", "BEO1", "BRC_Senior_Officer"
 * @returns {{url: string, username: string, password: string}}
 */
export function getDashboardDataByRole(roleName) {
    return getTestDataByName("Dashboard", roleName);
}

/**
 * Get test data filtered by Name AND SNo column from a sheet.
 * Used for testing multiple users under the same designation (e.g., BEO user 1, BEO user 2).
 *
 * Excel format: SNo | Name | Key | staging | production
 * Filters rows where Name === roleName AND SNo === sNo.
 *
 * @param {string} sheetName - Sheet name (e.g. "Dashboard")
 * @param {string} roleName - Role/designation name (e.g. "BEO", "BEO1", "BRC_Senior_Officer")
 * @param {number} sNo - Serial number of the user (1, 2, 3, etc.)
 * @returns {Object} Key-value object for the specified role+sNo + url from env config
 */
export function getTestDataByNameAndSNo(sheetName, roleName, sNo) {

    const workbook = xlsx.readFile(TEST_DATA_FILE);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in TestData.xlsx. Available: ${workbook.SheetNames.join(", ")}`);
    }

    const rows = xlsx.utils.sheet_to_json(sheet);
    const env = TEST_ENV || "staging";

    // Filter rows by Name AND SNo columns, then build key-value object
    const data = {};
    for (const row of rows) {
        if (row.Name === roleName && row.SNo === sNo && row.Key !== undefined) {
            const value = row[env] !== undefined ? row[env] : (row.Value !== undefined ? row.Value : "");
            data[row.Key] = value;
        }
    }

    if (Object.keys(data).length === 0) {
        throw new Error(`No data found for Name="${roleName}", SNo=${sNo} in sheet "${sheetName}" for env="${env}"`);
    }

    // Inject URL from environment config
    data.url = currentEnv.loginURL;

    return data;
}

/**
 * Get Dashboard data for a specific role and user number.
 * @param {string} roleName - e.g. "BEO", "BEO1", "BRC_Senior_Officer"
 * @param {number} sNo - User serial number (1, 2, 3, etc.)
 * @returns {{url: string, username: string, password: string}}
 */
export function getDashboardDataByRoleAndSNo(roleName, sNo) {
    return getTestDataByNameAndSNo("Dashboard", roleName, sNo);
}

/**
 * Get ForgotPassword sheet data.
 * @returns {{url: string, validUser: string, invalidUser1: string, invalidUser2: string, spaceUser: string, invalidOtp1: string, invalidOtp2: string, validOtp: string, invalidPassword1: string, invalidPassword2: string, validPassword: string}}
 */
export function getForgotPasswordData() {
    return getTestData("ForgotPassword");
}

/**
 * Read any Excel file and return rows as array of objects.
 * @param {string} fileName - File name in data/excel/
 * @param {string} [sheetName] - Optional sheet name (defaults to first sheet)
 * @returns {Array<Object>}
 */
export function getSheetData(fileName, sheetName) {

    const filePath = path.join(DATA_DIR, fileName);
    const workbook = xlsx.readFile(filePath);

    const sheet = sheetName
        ? workbook.Sheets[sheetName]
        : workbook.Sheets[workbook.SheetNames[0]];

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in "${fileName}"`);
    }

    return xlsx.utils.sheet_to_json(sheet);
}

/**
 * Get users from Playwright_Login_TestData.xlsx (for data-driven login tests).
 * @returns {Array<{Username: string, Password: string, Status: string}>}
 */
export function getUsers() {
    return getSheetData("Playwright_Login_TestData.xlsx");
}
