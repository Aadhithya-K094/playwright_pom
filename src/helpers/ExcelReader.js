/**
 * ExcelReader - Utility to read test data from Excel files.
 *
 * The main Excel file is: data/excel/TestData.xlsx
 * Each sheet corresponds to a spec file (Login, Dashboard, ForgotPassword).
 * Each sheet has Key/Value columns — this reader converts them to an object.
 *
 * Usage:
 *   import { getTestData, getSheetData, getSheetAsObject } from "../src/helpers/ExcelReader.js";
 *
 *   const loginData = getTestData("Login");           // { title: "...", validUser: "...", ... }
 *   const dashData = getTestData("Dashboard");        // { username: "...", password: "..." }
 *   const rows = getSheetData("TestData.xlsx", "Login"); // raw rows as array
 */
import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, "../../data/excel");
const DEFAULT_FILE = "TestData.xlsx";

/**
 * Read an Excel sheet and return rows as array of objects.
 * @param {string} fileName - Excel file name in data/excel/
 * @param {string} [sheetName] - Sheet name. Defaults to first sheet.
 * @returns {Array<Object>} Array of row objects
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
 * Read a Key/Value sheet and return as a flat object.
 * Sheet format: Column A = "Key", Column B = "Value"
 *
 * @param {string} fileName - Excel file name
 * @param {string} sheetName - Sheet name
 * @returns {Object} { key1: value1, key2: value2, ... }
 */
export function getSheetAsObject(fileName, sheetName) {
    const rows = getSheetData(fileName, sheetName);
    const result = {};

    for (const row of rows) {
        if (row.Key !== undefined) {
            result[row.Key] = row.Value !== undefined ? String(row.Value) : "";
        }
    }

    return result;
}

/**
 * Get test data for a specific spec/module from the default TestData.xlsx.
 * Reads the named sheet and returns a flat key-value object.
 *
 * @param {string} sheetName - "Login" | "Dashboard" | "ForgotPassword"
 * @returns {Object} Test data as { key: value } pairs
 *
 * @example
 *   const data = getTestData("Login");
 *   // { title: "EMIS | Tamil Nadu Schools", validUser: "4028609", ... }
 */
export function getTestData(sheetName) {
    return getSheetAsObject(DEFAULT_FILE, sheetName);
}

/**
 * Get login users from the legacy login test data Excel file.
 * @returns {Array<{Username: string, Password: string, Status: string}>}
 */
export function getUsers() {
    return getSheetData("Playwright_Login_TestData.xlsx");
}
