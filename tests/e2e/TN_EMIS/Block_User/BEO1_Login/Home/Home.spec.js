import { test, expect } from "../../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../../data/index.js";
import { getModuleLocators, getBaseURL } from "../../../../../../src/locators/moduleLocators.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const modules = getModuleLocators();
const BASE_URL = getBaseURL();

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Home - Dashboard Module", () => {

    test.beforeEach(async ({ beo1Page }) => {
        await beo1Page.gotoLoginPage(loginData.url);
        await beo1Page.verifyLoginPage();
        await beo1Page.login(loginData.username, loginData.password);
        await beo1Page.verifyDashboard();
    });

    test("Verify Dashboard loads with statistics", async ({ modulePage }) => {
        await modulePage.navigateToModule(modules.home.path);

        // Verify Total Students
        await modulePage.verifyTextVisible("TOTAL STUDENTS");

        // Verify Total Schools
        await modulePage.verifyTextVisible("TOTAL SCHOOLS");

        // Verify Total Staffs
        await modulePage.verifyTextVisible("TOTAL STAFFS");
    });

    test("Verify Live Data and Enrolment tabs", async ({ modulePage }) => {
        await modulePage.navigateToModule(modules.home.path);

        await modulePage.verifyTextVisible("Live Data");
        await modulePage.verifyTextVisible("Enrolment");
    });

    test("Verify Attendance section", async ({ modulePage }) => {
        await modulePage.navigateToModule(modules.home.path);

        const attendance = modulePage.page.getByRole("button", { name: "Attendance" });
        await expect(attendance).toBeVisible();

        const markingStatus = modulePage.page.getByRole("button", { name: "Marking Status" });
        const attendanceStatus = modulePage.page.getByRole("button", { name: "Attendance Status" });
        await expect(markingStatus).toBeVisible();
        await expect(attendanceStatus).toBeVisible();
    });

    test("Verify Schools, Staff and ITK rows in attendance table", async ({ modulePage }) => {
        await modulePage.navigateToModule(modules.home.path);

        await modulePage.verifyTextVisible("Schools (Students)");
        await modulePage.verifyTextVisible("School (Staff)");
        await modulePage.verifyTextVisible("ITK Centre");
    });

    test("Verify user info in header", async ({ modulePage }) => {
        await modulePage.navigateToModule(modules.home.path);
        await modulePage.verifyPageTitle();

        // Verify Active status
        await modulePage.verifyTextVisible("Active");
    });

    test("Verify page URL", async ({ modulePage }) => {
        await modulePage.navigateToModule(modules.home.path);
        await modulePage.verifyPageLoaded(modules.home.path);
    });

    test("Take Dashboard screenshot", async ({ modulePage }) => {
        await modulePage.navigateToModule(modules.home.path);
        await modulePage.takeModuleScreenshot("BEO1_Home_Dashboard");
    });
});
