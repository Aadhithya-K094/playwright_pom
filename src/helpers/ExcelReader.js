/**
 * ExcelReader - Reads test data from Excel files in data/excel/.
 *
 * Main file: TestData.xlsx
 *   - Sheets: Login, Dashboard, ForgotPassword
 *   - Format: Key | Value (each row is a key-value pair)
 *
 * Usage:
 *   import { getTestData, getLoginData, getDashboardData, getForgotPasswordData } from "../helpers/ExcelReader.js";
 *
 *   const login = getLoginData();
 *   console.log(login.validUser);      // "4028609"
 *   console.log(login.validPassword);  // "Test@123"
 */
import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import { currentEnv } from "../../config/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, "../../data/excel");
const TEST_DATA_FILE = path.join(DATA_DIR, "TestData.xlsx");

/**
 * Read a sheet from TestData.xlsx and convert Key-Value rows into an object.
 * Also injects the current environment URL automatically.
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

    // Convert [{Key: "validUser", Value: "4028609"}, ...] → {validUser: "4028609", ...}
    const data = {};
    for (const row of rows) {
        if (row.Key !== undefined) {
            data[row.Key] = row.Value !== undefined ? row.Value : "";
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
