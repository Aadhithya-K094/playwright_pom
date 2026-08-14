import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  CHANGE THIS NUMBER to test different BEO users                     ║
// ║  1 = 1st BEO user, 2 = 2nd BEO user, 3 = 3rd BEO user, etc.      ║
// ╚══════════════════════════════════════════════════════════════════════╝
const USER_NUMBER = 2;

const loginData = getRoleDashboardDataBySNo("BEO", USER_NUMBER);

test.use({ storageState: { cookies: [], origins: [] } });

test(`BEO - Block Education Officer (User ${USER_NUMBER})`, async ({ beoPage }) => {

    // Navigate to login page (one time)
    await beoPage.gotoLoginPage(loginData.url);

    // Verify login page details
    await beoPage.printLoginPageDetails();
    await beoPage.verifyLoginPage();

    // Login with valid credentials
    await beoPage.login(
        loginData.username,
        loginData.password
    );

    // Verify dashboard
    await beoPage.verifyDashboard();

    // Print dashboard details
    await beoPage.printDashboardDetails();

    // Print all menus
    await beoPage.printMenus();

    // Print main menus and sub-menus separately
    await beoPage.printMenusDetailed();

    // Take screenshot
    await beoPage.takeScreenshot(`BEO_User${USER_NUMBER}_Dashboard`);

    // Logout
    await beoPage.logoutFromApplication();

});
