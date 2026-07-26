/**
 * Test Data Index
 *
 * Central export for all test data.
 * Import from here: import { loginData, forgotPasswordData } from "../data/index.js";
 */

export { default as loginData } from "./json/loginData.js";
export { loginData as dashboardLoginData } from "./json/dashboardData.js";
export { default as forgotPasswordData } from "./json/forgotPasswordData.js";
export { getUsers, getSheetData } from "../src/helpers/ExcelReader.js";
