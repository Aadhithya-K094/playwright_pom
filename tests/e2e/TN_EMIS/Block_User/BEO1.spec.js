import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardData } from "../../../../data/index.js";

const loginData = getRoleDashboardData("BEO1");

test.use({ storageState: { cookies: [], origins: [] } });

test("BEO1 - Block Education Officer 1", async ({ beo1Page }) => {

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
    await beo1Page.takeScreenshot("BEO1_Dashboard");

    // Logout
    await beo1Page.logoutFromApplication();

});
