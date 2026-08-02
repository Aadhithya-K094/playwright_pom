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
 * Get Dashboard sheet data.
 * @returns {{url: string, username: string, password: string}}
 */
export function getDashboardData() {
    return getTestData("Dashboard");
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
