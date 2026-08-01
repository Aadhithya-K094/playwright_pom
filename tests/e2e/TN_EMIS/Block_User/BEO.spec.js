import { test, expect } from "../../../src/fixtures/pageFixtures.js";
import { dashboardData as loginData } from "../../../data/index.js";

test("BEO login with checking menus are properly displayed and the given menus are only show or not", async ({ dashboardPage }) => {

    await dashboardPage.gotoLoginPage(loginData.url);

    await dashboardPage.login(
        loginData.username,
        loginData.password
    );

    await dashboardPage.verifyDashboard();

    await dashboardPage.takeDashboardScreenshots();

    await dashboardPage.printMenus();

    await dashboardPage.logoutFromApplication();

});

