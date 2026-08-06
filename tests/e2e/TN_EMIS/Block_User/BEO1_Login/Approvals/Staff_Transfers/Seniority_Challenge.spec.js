import { test, expect } from "../../../../../../src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "../../../../../../data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);

test.use({ storageState: { cookies: [], origins: [] } });

test(`BEO1 - Approvals > Staff Transfers > Seniority_Challenge (User ${USER_NUMBER})`, async ({ beo1Page }) => {

    await beo1Page.gotoLoginPage(loginData.url);
    await beo1Page.verifyLoginPage();
    await beo1Page.login(loginData.username, loginData.password);
    await beo1Page.verifyDashboard();

    // TODO: Navigate to Approvals > Staff Transfers > Seniority_Challenge module and test

    await beo1Page.logoutFromApplication();
});
