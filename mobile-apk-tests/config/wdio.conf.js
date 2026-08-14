/**
 * WebdriverIO + Appium Configuration
 *
 * For testing TN EMIS Android APK
 *
 * Prerequisites:
 *   - Java JDK 11+ installed
 *   - Android Studio + SDK installed
 *   - Appium 2.x: npm install -g appium
 *   - UiAutomator2: appium driver install uiautomator2
 *   - Set ANDROID_HOME and JAVA_HOME environment variables
 *
 * Usage:
 *   appium                              ← start server (separate terminal)
 *   npx wdio run config/wdio.conf.js   ← run tests
 */

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const config = {

    runner: "local",
    specs: [join(__dirname, "../tests/*.spec.js")],
    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "ZL7LL7HUDYMFAI6P",
        "appium:platformVersion": "15",
        "appium:app": join(__dirname, "../apps/app-debug (1).apk"),
        "appium:automationName": "UiAutomator2",
        "appium:noReset": true,
        "appium:fullReset": false,
        "appium:newCommandTimeout": 240,
        "appium:autoGrantPermissions": true
    }],

    // ─── Appium Service ────────────────────────────────────────────────
    services: [
        ["appium", {
            command: "appium",
            args: {
                relaxedSecurity: true
            }
        }]
    ],

    // ─── Framework ─────────────────────────────────────────────────────
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 120000
    },

    // ─── Reporters ─────────────────────────────────────────────────────
    reporters: [
        "spec",
        ["allure", {
            outputDir: "allure-results",
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    // ─── Hooks ─────────────────────────────────────────────────────────
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
};
