import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardData } from "../../../../data/index.js";

const loginData = getRoleDashboardData("BRC_Senior_Officer");

test.use({ storageState: { cookies: [], origins: [] } });

test("BRC Senior Officer - Block Resource Centre", async ({ brcSeniorOfficerPage }) => {

    // Navigate to login page (one time)
    await brcSeniorOfficerPage.gotoLoginPage(loginData.url);

    // Verify login page details
    await brcSeniorOfficerPage.printLoginPageDetails();
    await brcSeniorOfficerPage.verifyLoginPage();

    // Login with valid credentials
    await brcSeniorOfficerPage.login(
        loginData.username,
        loginData.password
    );

    // Verify dashboard
    await brcSeniorOfficerPage.verifyDashboard();

    // Print dashboard details
    await brcSeniorOfficerPage.printDashboardDetails();

    // Print all menus
    await brcSeniorOfficerPage.printMenus();

    // Take screenshot
    await brcSeniorOfficerPage.takeScreenshot("BRC_Senior_Officer_Dashboard");

    // Logout
    await brcSeniorOfficerPage.logoutFromApplication();

});
