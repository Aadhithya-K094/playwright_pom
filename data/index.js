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
import { getTestData } from "../src/helpers/ExcelReader.js";
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
const dashRaw = getTestData("Dashboard");
export const dashboardData = {
    url: currentEnv.loginURL,
    username: currentEnv.credentials.username,
    password: currentEnv.credentials.password,
};

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
