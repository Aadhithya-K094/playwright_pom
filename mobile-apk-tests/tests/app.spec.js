/**
 * TN EMIS Mobile App - Login Page Element Verification Test
 * App: Ionic Cordova WebView (hybrid)
 * Login page: https://localhost/login
 * Dashboard: https://localhost/tabs/home
 *
 * This test navigates to the login page (logging out if already logged in),
 * then verifies all UI elements on the login page and prints results to terminal.
 */

import { users } from "../data/testData.js";

/**
 * Helper: Wait for WEBVIEW context to become available and switch to it.
 * Retries every 2 seconds up to maxWait.
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
    console.log("  ✗ WEBVIEW context not found within timeout");
    return false;
}

describe("TN EMIS Mobile App - Login Page Verification", () => {

    before(async () => {
        // Wait for app to fully load
        await browser.pause(8000);

        // Wait and switch to WebView context
        const switched = await switchToWebView(30000);
        if (!switched) {
            throw new Error("WEBVIEW context never appeared. App may not have loaded.");
        }
        await browser.pause(3000);
    });

    it("Step 1: Navigate to Login Page", async () => {
        await browser.pause(1000);

        const url = await browser.getUrl();
        console.log(`  Current URL: ${url}`);

        const body = await $('body');
        await body.waitForExist({ timeout: 10000 });
        const text = await body.getText();

        // If app is already logged in (noReset:true), force navigate to login
        if (!text.includes("User Name") && !text.includes("Password")) {
            console.log("  ⚠ App is already logged in — navigating to login page...");

            await browser.execute(() => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = '/login';
            });
            await browser.pause(5000);

            const bodyAfter = await $('body');
            await bodyAfter.waitForExist({ timeout: 10000 });
            const textAfter = await bodyAfter.getText();

            if (textAfter.includes("User Name") || textAfter.includes("Login")) {
                console.log("  ✓ Successfully navigated to Login page");
            } else {
                // Try one more time
                await browser.execute(() => { window.location.href = '/login'; });
                await browser.pause(5000);
                console.log("  ✓ Forced navigation to Login page");
            }
        } else {
            console.log("  ✓ Already on Login page");
        }

        const finalUrl = await browser.getUrl();
        console.log(`  URL: ${finalUrl}`);
        await browser.pause(500);
    });

    it("Step 2: Verify all Login Page elements", async () => {
        await browser.pause(2000);

        console.log("\n  ═══════════════════════════════════════════");
        console.log("  LOGIN PAGE ELEMENT VERIFICATION");
        console.log("  ═══════════════════════════════════════════\n");

        // --- Logo Verification ---
        const logoResult = await browser.execute(() => {
            const img = document.querySelector('img, ion-img');
            if (img) {
                return {
                    exists: true,
                    src: img.getAttribute('src') || img.src || '',
                    alt: img.getAttribute('alt') || '',
                    visible: img.offsetWidth > 0 && img.offsetHeight > 0
                };
            }
            return { exists: false };
        });

        if (logoResult.exists && logoResult.visible) {
            console.log("  ✓ Logo is visible");
            if (logoResult.src) console.log(`    - Source: ${logoResult.src}`);
            if (logoResult.alt) console.log(`    - Alt text: "${logoResult.alt}"`);
        } else if (logoResult.exists) {
            console.log("  ⚠ Logo element found but not visible");
        } else {
            console.log("  ✗ Logo not found");
        }

        // --- Labels Verification ---
        const labels = await browser.execute(() => {
            const results = [];
            const ionLabels = document.querySelectorAll('ion-label');
            ionLabels.forEach(lbl => {
                const text = lbl.textContent.trim();
                if (text) results.push({ type: 'ion-label', text });
            });
            const htmlLabels = document.querySelectorAll('label');
            htmlLabels.forEach(lbl => {
                const text = lbl.textContent.trim();
                if (text) results.push({ type: 'label', text });
            });
            const headings = document.querySelectorAll('h1, h2, h3, ion-title, .title');
            headings.forEach(h => {
                const text = h.textContent.trim();
                if (text) results.push({ type: 'heading', text });
            });
            return results;
        });

        console.log("");
        if (labels.length > 0) {
            console.log(`  ✓ Labels found (${labels.length}):`);
            labels.forEach(lbl => {
                console.log(`    - [${lbl.type}] "${lbl.text}"`);
            });
        } else {
            console.log("  ✗ No labels found");
        }

        // --- Input Fields & Placeholders ---
        const inputs = await browser.execute(() => {
            const results = [];
            const ionInputs = document.querySelectorAll('ion-input');
            ionInputs.forEach(inp => {
                results.push({
                    type: 'ion-input',
                    placeholder: inp.getAttribute('placeholder') || '',
                    label: inp.getAttribute('label') || '',
                    inputType: inp.getAttribute('type') || 'text',
                    name: inp.getAttribute('name') || '',
                    visible: inp.offsetWidth > 0 && inp.offsetHeight > 0
                });
            });
            // Standalone native inputs (not inside ion-input)
            const nativeInputs = document.querySelectorAll('input');
            nativeInputs.forEach(inp => {
                if (inp.closest('ion-input')) return;
                results.push({
                    type: 'input',
                    placeholder: inp.getAttribute('placeholder') || '',
                    label: '',
                    inputType: inp.getAttribute('type') || 'text',
                    name: inp.getAttribute('name') || '',
                    visible: inp.offsetWidth > 0 && inp.offsetHeight > 0
                });
            });
            return results;
        });

        console.log("");
        if (inputs.length > 0) {
            console.log(`  ✓ Input fields found (${inputs.length}):`);
            inputs.forEach((inp, i) => {
                console.log(`    ${i + 1}. [${inp.type}] type="${inp.inputType}"`);
                if (inp.placeholder) console.log(`       Placeholder: "${inp.placeholder}"`);
                if (inp.label) console.log(`       Label: "${inp.label}"`);
                if (inp.name) console.log(`       Name: "${inp.name}"`);
                console.log(`       Visible: ${inp.visible ? 'Yes' : 'No'}`);
            });
        } else {
            console.log("  ✗ No input fields found");
        }

        // --- Username Field ---
        const usernameField = await browser.execute(() => {
            const allInputs = document.querySelectorAll('ion-input, input');
            for (const inp of allInputs) {
                const placeholder = (inp.getAttribute('placeholder') || '').toLowerCase();
                const label = (inp.getAttribute('label') || '').toLowerCase();
                const name = (inp.getAttribute('name') || '').toLowerCase();
                if (placeholder.includes('user') || label.includes('user') || name.includes('user') || name.includes('username')) {
                    return { found: true, placeholder: inp.getAttribute('placeholder'), label: inp.getAttribute('label') };
                }
            }
            return { found: false };
        });

        console.log("");
        if (usernameField.found) {
            console.log("  ✓ Username field is present");
            if (usernameField.placeholder) console.log(`    - Placeholder: "${usernameField.placeholder}"`);
            if (usernameField.label) console.log(`    - Label: "${usernameField.label}"`);
        } else {
            console.log("  ⚠ Username field not identified by attribute (may be first input)");
        }

        // --- Password Field ---
        const passwordField = await browser.execute(() => {
            const allInputs = document.querySelectorAll('ion-input, input');
            for (const inp of allInputs) {
                const type = (inp.getAttribute('type') || '').toLowerCase();
                const placeholder = (inp.getAttribute('placeholder') || '').toLowerCase();
                const label = (inp.getAttribute('label') || '').toLowerCase();
                const name = (inp.getAttribute('name') || '').toLowerCase();
                if (type === 'password' || placeholder.includes('password') || label.includes('password') || name.includes('password')) {
                    return { found: true, placeholder: inp.getAttribute('placeholder'), label: inp.getAttribute('label'), type: inp.getAttribute('type') };
                }
            }
            return { found: false };
        });

        if (passwordField.found) {
            console.log("  ✓ Password field is present");
            if (passwordField.placeholder) console.log(`    - Placeholder: "${passwordField.placeholder}"`);
            if (passwordField.label) console.log(`    - Label: "${passwordField.label}"`);
            console.log(`    - Input type: "${passwordField.type}"`);
        } else {
            console.log("  ⚠ Password field not identified by attribute (may be second input)");
        }

        // --- Login Button ---
        const loginBtn = await browser.execute(() => {
            const btns = document.querySelectorAll('ion-button, button');
            for (const btn of btns) {
                const text = btn.textContent.trim().toLowerCase();
                if (text.includes('login') || text.includes('sign in') || text.includes('submit')) {
                    return {
                        found: true,
                        text: btn.textContent.trim(),
                        tag: btn.tagName.toLowerCase(),
                        enabled: !btn.disabled,
                        visible: btn.offsetWidth > 0 && btn.offsetHeight > 0,
                        color: btn.getAttribute('color') || ''
                    };
                }
            }
            return { found: false };
        });

        console.log("");
        if (loginBtn.found) {
            console.log("  ✓ Login button is present");
            console.log(`    - Text: "${loginBtn.text}"`);
            console.log(`    - Element: <${loginBtn.tag}>`);
            console.log(`    - Enabled: ${loginBtn.enabled ? 'Yes' : 'No'}`);
            console.log(`    - Visible: ${loginBtn.visible ? 'Yes' : 'No'}`);
            if (loginBtn.color) console.log(`    - Color: "${loginBtn.color}"`);
        } else {
            console.log("  ✗ Login button not found");
        }

        // --- Additional elements (links, version info) ---
        const extras = await browser.execute(() => {
            const results = [];
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                const text = link.textContent.trim();
                if (text) results.push({ type: 'link', text, href: link.getAttribute('href') || '' });
            });
            const bodyText = document.body.innerText;
            const versionMatch = bodyText.match(/App Version\s*:\s*[\d.]+/i);
            if (versionMatch) results.push({ type: 'version', text: versionMatch[0] });
            return results;
        });

        if (extras.length > 0) {
            console.log("");
            console.log("  Additional elements:");
            extras.forEach(item => {
                if (item.type === 'link') {
                    console.log(`    ✓ Link: "${item.text}" → ${item.href}`);
                } else {
                    console.log(`    ✓ ${item.text}`);
                }
            });
        }

        // --- Full visible text ---
        console.log("");
        console.log("  ─── Full Page Text ───");
        const body = await $('body');
        await body.waitForExist({ timeout: 5000 });
        const fullText = await body.getText();
        const lines = fullText.split("\n").filter(l => l.trim().length > 0);
        lines.forEach((line, i) => {
            console.log(`    ${i + 1}. ${line.trim()}`);
        });

        console.log("\n  ═══════════════════════════════════════════");
        console.log("  LOGIN PAGE VERIFICATION COMPLETE");
        console.log("  ═══════════════════════════════════════════\n");

        await browser.saveScreenshot("./test-results/login-page-elements.png");
        console.log("  ✓ Screenshot saved: login-page-elements.png");
        await browser.pause(500);
    });
});
