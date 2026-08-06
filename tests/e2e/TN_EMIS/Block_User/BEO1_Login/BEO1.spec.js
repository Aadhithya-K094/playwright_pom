import { test, expect } from "../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../data/index.js";

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  CHANGE THIS NUMBER to test different BEO1 users                    ║
// ║  1 = 1st BEO1 user, 2 = 2nd BEO1 user, 3 = 3rd BEO1 user, etc.  ║
// ╚══════════════════════════════════════════════════════════════════════╝
const USER_NUMBER = 1;

const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);

test.use({ storageState: { cookies: [], origins: [] } });

test(`BEO1 - Block Education Officer 1 (User ${USER_NUMBER})`, async ({ beo1Page }) => {

    // Navigate to login page (one time)
    await beo1Page.gotoLoginPage(loginData.url);

    // Verify login page details
    await beo1Page.printLoginPageDetails();
    await beo1Page.verifyLoginPage();

    // Login with valid credentials
    await beo1Page.login(
        loginData.username,
        loginData.password
    );

    // Verify dashboard
    await beo1Page.verifyDashboard();

    // Print dashboard details
    await beo1Page.printDashboardDetails();

    // Print all menus
    await beo1Page.printMenus();

    // Take screenshot
    await beo1Page.takeScreenshot(`BEO1_User${USER_NUMBER}_Dashboard`);

    // Logout
    await beo1Page.logoutFromApplication();

});
