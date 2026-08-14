/**
 * Smoke Test — Verify APK installs and launches
 * This test should PASS if device is connected and APK is valid.
 */

describe("TN EMIS Mobile - Smoke Test", () => {

    it("should install and launch the app", async () => {
        await browser.pause(5000);

        const activity = await browser.getCurrentActivity();
        console.log(`  Current Activity: ${activity}`);
        expect(activity).not.toBe(null);
        console.log("  ✓ App launched successfully");
    });

    it("should get app package name", async () => {
        const pkg = await browser.getCurrentPackage();
        console.log(`  Package: ${pkg}`);
        expect(pkg).toBe("in.gov.tnschools.monitoring");
        console.log("  ✓ Package name verified");
    });

    it("should have screen visible", async () => {
        const screenshot = await browser.takeScreenshot();
        expect(screenshot.length).toBeGreaterThan(0);
        console.log("  ✓ Screenshot captured — app is visible");
    });

    it("should get page source (UI hierarchy)", async () => {
        const source = await browser.getPageSource();
        console.log(`  Page source length: ${source.length} characters`);
        expect(source.length).toBeGreaterThan(100);
        console.log("  ✓ UI hierarchy retrieved");
    });

    it("should detect WebView context", async () => {
        // Wait for WebView to load
        await browser.pause(5000);

        const contexts = await browser.getContexts();
        console.log(`  Available contexts: ${JSON.stringify(contexts)}`);

        const hasWebView = contexts.some(c => c.includes("WEBVIEW"));
        expect(hasWebView).toBe(true);
        console.log("  ✓ WebView context detected");
    });
});
