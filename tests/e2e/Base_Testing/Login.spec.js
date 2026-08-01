import { test, expect } from "../../../src/fixtures/pageFixtures.js";
import { loginData } from "../../../data/index.js";

test.beforeEach(async ({ loginPage }) => {

    await loginPage.gotoLoginPage(loginData.url);

});

test("Verify Login Page", async ({ loginPage }) => {

    await loginPage.printLoginPageDetails();
    await loginPage.verifyLoginPage();

});

test("Invalid User With Space", async ({ loginPage }) => {

    await loginPage.login(
        loginData.space,
        loginData.validPassword
    );

    await loginPage.takeScreenshot("InvalidUserSpace");

});

test("Valid User Invalid Password", async ({ loginPage }) => {

    await loginPage.login(
        loginData.validUser,
        loginData.invalidPassword
    );

    await loginPage.takeScreenshot("InvalidPassword");

});

test("Invalid User Valid Password", async ({ loginPage }) => {

    await loginPage.login(
        loginData.invalidUser,
        loginData.validPassword
    );

    await loginPage.takeScreenshot("InvalidUser");

});

test("Valid Login", async ({ loginPage }) => {

    await loginPage.login(
        loginData.validUser,
        loginData.validPassword
    );

    await loginPage.takeScreenshot("ValidLogin");

});
