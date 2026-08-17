/**
 * Script to capture menu structure from Angular Production TNEMIS
 * Run: node scripts/capture-menus.js
 */
import { chromium } from "@playwright/test";

const URL = "https://tnemis.tnschools.gov.in/auth/login?returnUrl=%2Fdashboard";
const USERNAME = "4028609";
const PASSWORD = "test@123";

async function captureMenus() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    console.log("Navigating to login...");
    await page.goto(URL, { waitUntil: "load", timeout: 90000 });

    console.log("Logging in...");
    await page.locator('//input[@type="email"]').fill(USERNAME);
    await page.locator('//input[@id="exampleInputPassword1"]').fill(PASSWORD);
    await page.locator('(//button[@type="submit"])[1]').click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);

    console.log("Capturing menu structure...");

    const menus = await page.evaluate(() => {
        const result = {};

        // Get all main menu items from the navbar
        const navItems = document.querySelectorAll('.nav.page-navigation > li.nav-item');

        navItems.forEach(navItem => {
            const menuTitle = navItem.querySelector('.menu-title');
            if (!menuTitle) return;

            const mainMenuName = menuTitle.textContent.trim();
            if (!mainMenuName) return;

            result[mainMenuName] = {};

            // Check for mega-menu / submenu
            const megaMenu = navItem.querySelector('.submenu');
            if (megaMenu) {
                // Get category headings and their items
                const categories = megaMenu.querySelectorAll('.category-heading');
                const submenuItems = megaMenu.querySelectorAll('.submenu-item');

                if (categories.length > 0) {
                    categories.forEach(cat => {
                        const catName = cat.textContent.trim();
                        if (catName) {
                            result[mainMenuName][catName] = [];

                            // Get items after this category until next category
                            let sibling = cat.nextElementSibling;
                            while (sibling && !sibling.classList.contains('category-heading')) {
                                const link = sibling.querySelector('a, .nav-link');
                                if (link) {
                                    const itemText = link.textContent.trim();
                                    if (itemText) {
                                        result[mainMenuName][catName].push(itemText);
                                    }
                                }
                                sibling = sibling.nextElementSibling;
                            }
                        }
                    });
                } else if (submenuItems.length > 0) {
                    submenuItems.forEach(item => {
                        const link = item.querySelector('a, .nav-link');
                        if (link) {
                            const itemText = link.textContent.trim();
                            if (itemText) {
                                if (!result[mainMenuName]["Items"]) {
                                    result[mainMenuName]["Items"] = [];
                                }
                                result[mainMenuName]["Items"].push(itemText);
                            }
                        }
                    });
                }
            }
        });

        return result;
    });

    console.log("\n=== MENU STRUCTURE ===\n");
    console.log(JSON.stringify(menus, null, 2));

    await browser.close();
    return menus;
}

captureMenus().catch(console.error);
