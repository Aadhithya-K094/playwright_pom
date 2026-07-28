import { test, expect } from "../../../src/fixtures/pageFixtures.js";
import { loginData } from "../../../data/json/dashboardData.js";

test("Dashboard Page", async ({ dashboardPage }) => {

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

