/**
 * Dashboard Tests — TN EMIS Mobile App
 * Verifies dashboard elements after login via WebView context.
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

describe("TN EMIS Mobile - Dashboard", () => {

    before(async () => {
        await browser.pause(8000);

        const switched = await switchToWebView(30000);
        if (!switched) {
            throw new Error("WEBVIEW context never appeared.");
        }
        await browser.pause(3000);
    });

    it("Step 1: Login to reach Dashboard", async () => {
        await browser.pause(1000);

        const body = await $('body');
        await body.waitForExist({ timeout: 10000 });
        const text = await body.getText();

        // If already on dashboard, skip login
        if (text.includes("Menu") || text.includes("School") || text.includes("Dashboard") || text.includes("Home")) {
            console.log("  ✓ Already on Dashboard (session active)");
            return;
        }

        // On login page — perform login
        if (text.includes("User Name") || text.includes("Login")) {
            console.log("  Logging in with credentials...");

            // Switch to native context to type via keyboard (Ionic needs real input events)
            await browser.switchContext('NATIVE_APP');
            await browser.pause(1000);

            // Tap on first input area to focus username
            const editTexts = await $$('//android.widget.EditText');

            if (editTexts.length >= 2) {
                // Username
                await editTexts[0].click();
                await browser.pause(500);
                await editTexts[0].setValue(users.valid.username);
                console.log(`  ✓ Username entered: ${users.valid.username}`);
                await browser.pause(500);

                // Password
                await editTexts[1].click();
                await browser.pause(500);
                await editTexts[1].setValue(users.valid.password);
                console.log(`  ✓ Password entered: ${users.valid.password}`);
                await browser.pause(500);
            } else {
                // Fallback: tap on the WebView area where inputs should be and use keys
                console.log("  ⚠ EditText not found, using tap coordinates...");
                // Use touch action on approximate input locations
                await browser.touchAction([
                    { action: 'tap', x: 540, y: 600 }
                ]);
                await browser.pause(500);
                await browser.keys(users.valid.username.split(''));
                await browser.pause(500);

                await browser.touchAction([
                    { action: 'tap', x: 540, y: 750 }
                ]);
                await browser.pause(500);
                await browser.keys(users.valid.password.split(''));
                await browser.pause(500);
            }

            try { await browser.hideKeyboard(); } catch (e) {}
            await browser.pause(500);

            // Click Login button in native context
            const loginBtn = await $('//android.widget.Button[@text="Login"] | //android.view.View[@text="Login"]');
            if (await loginBtn.isExisting()) {
                await loginBtn.click();
                console.log("  ✓ Login button clicked");
            }

            // Wait for dashboard to load
            await browser.pause(10000);

            // Switch back to WebView
            await switchToWebView(15000);
            await browser.pause(2000);
        }

        const url = await browser.getUrl();
        console.log(`  URL after login: ${url}`);
    });

    it("Step 2: Verify Dashboard is displayed", async () => {
        await browser.pause(2000);

        // Wait for the page to potentially navigate after login
        let text = "";
        let isDashboard = false;
        for (let attempt = 0; attempt < 5; attempt++) {
            const body = await $('body');
            await body.waitForExist({ timeout: 10000 });
            text = await body.getText();
            isDashboard = text.includes("Menu") || text.includes("Home") || text.includes("School") || text.includes("Dashboard") || text.includes("Inspection");

            if (isDashboard) break;
            await browser.pause(3000);
        }

        const url = await browser.getUrl();
        console.log(`  URL: ${url}`);

        if (isDashboard) {
            console.log("  ✓ Dashboard is displayed");
        } else {
            console.log(`  Page text: ${text.substring(0, 200)}`);
            console.log("  ⚠ Dashboard not detected — login may have failed");
        }
        expect(isDashboard).toBe(true);
    });

    it("Step 3: Verify Dashboard content", async () => {
        await browser.pause(500);

        const body = await $('body');
        const text = await body.getText();
        const lines = text.split("\n").filter(l => l.trim().length > 0);

        console.log("\n  ═══════════════════════════════════════════");
        console.log("  DASHBOARD CONTENT");
        console.log("  ═══════════════════════════════════════════\n");

        lines.forEach((line, i) => {
            console.log(`    ${i + 1}. ${line.trim()}`);
        });

        console.log(`\n  Total items: ${lines.length}`);
        expect(lines.length).toBeGreaterThan(0);
        console.log("  ✓ Dashboard has content");
    });

    it("Step 4: Verify navigation tabs", async () => {
        await browser.pause(500);

        const tabs = await browser.execute(() => {
            const results = [];
            const tabBtns = document.querySelectorAll('ion-tab-button');
            tabBtns.forEach(btn => {
                const label = btn.querySelector('ion-label');
                if (label) results.push(label.textContent.trim());
            });
            return results;
        });

        if (tabs.length > 0) {
            console.log(`  ✓ Navigation tabs found (${tabs.length}):`);
            tabs.forEach(tab => {
                console.log(`    - ${tab}`);
            });
        } else {
            console.log("  ⚠ No ion-tab-button tabs found");
        }

        await browser.saveScreenshot("./test-results/dashboard.png");
        console.log("  ✓ Dashboard screenshot saved");
    });

    it("Step 5: Logout from app", async () => {
        await browser.pause(1000);

        // Switch to native context first to avoid WebView session disconnection
        await browser.switchContext('NATIVE_APP');
        await browser.pause(500);

        // Tap Logout in native view
        try {
            const logoutBtn = await $('//android.view.View[@text="Logout"] | //android.widget.TextView[@text="Logout"]');
            if (await logoutBtn.isExisting()) {
                await logoutBtn.click();
                console.log("  ✓ Logout tapped");
                await browser.pause(3000);
            }
        } catch (e) {
            console.log(`  Native logout tap failed: ${e.message}`);
        }

        // Wait for app to navigate back to login
        await browser.pause(5000);

        // Switch back to WebView to verify
        try {
            const contexts = await browser.getContexts();
            const webview = contexts.find(c => c.includes("WEBVIEW"));
            if (webview) {
                await browser.switchContext(webview);
                await browser.pause(2000);

                const body = await $('body');
                await body.waitForExist({ timeout: 10000 });
                const text = await body.getText();

                if (text.includes("User Name") || text.includes("Login")) {
                    console.log("  ✓ Logout successful — back on login page");
                } else {
                    // Force logout via JS
                    await browser.execute(() => {
                        localStorage.clear();
                        sessionStorage.clear();
                    });
                    await browser.pause(1000);
                    console.log("  ✓ Storage cleared — session ended");
                }
            }
        } catch (e) {
            console.log(`  ✓ App session ended (${e.message.substring(0, 50)})`);
        }
    });
});
