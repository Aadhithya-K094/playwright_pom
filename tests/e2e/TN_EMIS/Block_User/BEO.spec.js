import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { dashboardData as loginData } from "../../../../data/index.js";

test.use({ storageState: { cookies: [], origins: [] } });

test("BEO - Block Education Officer", async ({ beoPage }) => {

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

    // Take screenshot
    await beoPage.takeScreenshot("BEO_Dashboard");

    // Logout
    await beoPage.logoutFromApplication();

});
