import { test, expect } from "../../../../src/fixtures/pageFixtures.js";
import { getUsers } from "../../../../src/helpers/ExcelReader.js";
import loginData from "../../../../data/json/loginData.js";

const users = getUsers();

for (const user of users) {

    test(`Login Test - ${user.Username} (${user.Status})`, async ({ loginPage }) => {

        await loginPage.gotoLoginPage(loginData.url);

        await loginPage.login(user.Username, user.Password);

        if (user.Status === "Valid") {

            // Verify successful login — URL should leave the login page
            await expect(loginPage.page).not.toHaveURL(loginData.url);

            console.log(`✔ ${user.Username} — Login Successful`);

            // Logout
            await loginPage.page.locator("//span[@class='profile']").click();
            await loginPage.page.locator("//button[text()='Logout']").click();

        } else {

            // Verify failed login — should stay on login page
            await expect(loginPage.page).toHaveURL(loginData.url);

            console.log(`✖ ${user.Username} — Login Failed (${user.Status})`);
        }

    });

}
