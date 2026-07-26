    /**
 * ExcelReader - Utility to read test data from Excel files.
 *
 * Usage:
 *   import { getSheetData, getUsers } from "../src/helpers/ExcelReader.js";
 *
 *   const users = getUsers();                          // Default: Playwright_Login_TestData.xlsx
 *   const data = getSheetData("MyFile.xlsx", "Sheet2"); // Custom file + sheet
 */
import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, "../../data/excel");

/**
 * Read any Excel file from the data/excel/ directory.
 * @param {string} fileName - Excel file name (e.g. "TestData.xlsx")
 * @param {string} [sheetName] - Optional sheet name. Defaults to first sheet.
 * @returns {Array<Object>} Array of row objects (column headers as keys)
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
 * Get login users from the default login test data Excel file.
 * @returns {Array<{Username: string, Password: string, Status: string}>}
 */
export function getUsers() {
    return getSheetData("Playwright_Login_TestData.xlsx");
}
