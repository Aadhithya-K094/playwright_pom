/**
 * Test Data Index
 *
 * Reads all test data from the single Excel file (data/excel/TestData.xlsx).
 * Each spec file imports only its own data by sheet name.
 *
 * Usage:
 *   import { loginData, dashboardData, forgotPasswordData } from "../../data/index.js";
 *
 * The URL and credentials are merged from environment config automatically,
 * so the Excel only holds static test values (not environment-specific URLs).
 */
import { getTestData, getDashboardDataByRole, getDashboardDataByRoleAndSNo } from "../src/helpers/ExcelReader.js";
import { currentEnv } from "../config/index.js";

// ─── Login Data (from "Login" sheet) ───────────────────────────────────────
const loginRaw = getTestData("Login");
export const loginData = {
    url: currentEnv.loginURL,
    title: loginRaw.title || "EMIS | Tamil Nadu Schools",
    validUser: currentEnv.credentials.username,
    validPassword: currentEnv.credentials.password,
    invalidUser: loginRaw.invalidUser || "",
    invalidPassword: loginRaw.invalidPassword || "",
    space: loginRaw.space || "   ",
};

// ─── Dashboard Data (from "Dashboard" sheet) ───────────────────────────────
// Legacy: returns default credentials from env config (backward compatible)
export const dashboardData = {
    url: currentEnv.loginURL,
    username: currentEnv.credentials.username,
    password: currentEnv.credentials.password,
};

// ─── Role-specific Dashboard Data (from "Dashboard" sheet with Name column) ─
// Usage: import { getRoleDashboardData } from "../../data/index.js";
//        const beoData = getRoleDashboardData("BEO");
//        beoData.url, beoData.username, beoData.password
export function getRoleDashboardData(roleName) {
    return getDashboardDataByRole(roleName);
}

// ─── Role + SNo specific Dashboard Data ────────────────────────────────────
// Usage: import { getRoleDashboardDataBySNo } from "../../data/index.js";
//        const beoUser1 = getRoleDashboardDataBySNo("BEO", 1);  // 1st BEO user
//        const beoUser2 = getRoleDashboardDataBySNo("BEO", 2);  // 2nd BEO user
//        const beoUser3 = getRoleDashboardDataBySNo("BEO", 3);  // 3rd BEO user
export function getRoleDashboardDataBySNo(roleName, sNo) {
    return getDashboardDataByRoleAndSNo(roleName, sNo);
}

// ─── Forgot Password Data (from "ForgotPassword" sheet) ────────────────────
const fpRaw = getTestData("ForgotPassword");
export const forgotPasswordData = {
    url: currentEnv.loginURL,
    validUser: currentEnv.credentials.username,
    invalidUser1: fpRaw.invalidUser1 || "",
    invalidUser2: fpRaw.invalidUser2 || "",
    spaceUser: fpRaw.spaceUser || "",
    invalidOtp1: fpRaw.invalidOtp1 || "",
    invalidOtp2: fpRaw.invalidOtp2 || "",
    validOtp: fpRaw.validOtp || "",
    invalidPassword1: fpRaw.invalidPassword1 || "",
    invalidPassword2: fpRaw.invalidPassword2 || "",
    validPassword: fpRaw.validPassword || "",
};
