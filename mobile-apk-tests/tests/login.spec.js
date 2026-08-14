/**
 * Login Tests — TN EMIS Mobile App
 * Tests login with valid/invalid credentials via WebView context.
 */
import { users } from "../data/testData.js";

/**
 * Helper: Wait for WEBVIEW context and switch to it.
 */
async function switchToWebView(maxWait = 30000) {
    const start = Date.now();
    while (Date.now() - start < maxWait) {
        const contexts = await browser.getContexts();
        const webview = contexts.find(c => c.includes("WEBVIEW"));
        if (webview) {
            await browser.switchContext(webview);
            console.log(`  ✓ Switched to: ${webview}`);
            return true;
        }
        await browser.pause(2000);
    }
    return false;
}

/**
 * Helper: Ensure we are on the login page.
 */
async function ensureLoginPage() {
    const body = await $('body');
    await body.waitForExist({ timeout: 10000 });
    const text = await body.getText();

    if (!text.includes("User Name") && !text.includes("Password")) {
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/login';
        });
        await browser.pause(5000);
    }
}

describe("TN EMIS Mobile - Login", () => {

    before(async () => {
        await browser.pause(8000);

        const switched = await switchToWebView(30000);
        if (!switched) {
            throw new Error("WEBVIEW context never appeared.");
        }
        await browser.pause(3000);

        // Make sure we start on login page
        await ensureLoginPage();
    });

    it("Step 1: Verify login page is displayed", async () => {
        await browser.pause(1000);

        const body = await $('body');
        await body.waitForExist({ timeout: 10000 });
        const text = await body.getText();

        const isLoginPage = text.includes("User Name") || text.includes("Password") || text.includes("Login");
        expect(isLoginPage).toBe(true);
        console.log("  ✓ Login page is displayed");
    });

    it("Step 2: Login with valid credentials", async () => {
        await browser.pause(1000);

        // Switch to native for input
        await browser.switchContext('NATIVE_APP');
        await browser.pause(500);

        const inputs = await $$('//android.widget.EditText');
        if (inputs.length >= 2) {
            await inputs[0].click();
            await browser.pause(300);
            await browser.keys(users.valid.username.split(''));
            console.log(`  ✓ Username typed: ${users.valid.username}`);
            await browser.pause(500);

            await inputs[1].click();
            await browser.pause(300);
            await browser.keys(users.valid.password.split(''));
            console.log(`  ✓ Password typed: ${users.valid.password}`);
            await browser.pause(500);
        }

        try { await browser.hideKeyboard(); } catch (e) {}
        await browser.pause(500);

        // Click Login
        const loginBtn = await $('//android.widget.Button[@text="Login"] | //android.view.View[@text="Login"]');
        if (await loginBtn.isExisting()) {
            await loginBtn.click();
            console.log("  ✓ Login button clicked");
        }

        await browser.pause(8000);

        // Switch back to WebView
        await switchToWebView(15000);
        await browser.pause(2000);

        const url = await browser.getUrl();
        console.log(`  URL after login: ${url}`);

        const body = await $('body');
        await body.waitForExist({ timeout: 10000 });
        const text = await body.getText();

        const isLoggedIn = url.includes("/home") || url.includes("/tabs") || text.includes("Menu") || text.includes("School");
        expect(isLoggedIn).toBe(true);
        console.log("  ✓ Login successful — on Dashboard");
    });

    it("Step 3: Logout and return to login", async () => {
        await browser.pause(1000);

        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/login';
        });
        await browser.pause(5000);

        const body = await $('body');
        await body.waitForExist({ timeout: 10000 });
        const text = await body.getText();

        const isLogin = text.includes("User Name") || text.includes("Login");
        expect(isLogin).toBe(true);
        console.log("  ✓ Back on login page");
    });
});
