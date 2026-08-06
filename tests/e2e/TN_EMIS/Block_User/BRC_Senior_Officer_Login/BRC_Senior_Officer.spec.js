import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  CHANGE THIS NUMBER to test different BRC Senior Officer users      ║
// ║  1 = 1st user, 2 = 2nd user, 3 = 3rd user, etc.                   ║
// ╚══════════════════════════════════════════════════════════════════════╝
const USER_NUMBER = 1;

const loginData = getRoleDashboardDataBySNo("BRC_Senior_Officer", USER_NUMBER);

test.use({ storageState: { cookies: [], origins: [] } });

test(`BRC Senior Officer - Block Resource Centre (User ${USER_NUMBER})`, async ({ brcSeniorOfficerPage }) => {

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
    await brcSeniorOfficerPage.takeScreenshot(`BRC_Senior_Officer_User${USER_NUMBER}_Dashboard`);

    // Logout
    await brcSeniorOfficerPage.logoutFromApplication();

});
