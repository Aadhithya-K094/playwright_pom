/**
 * TNEMISPage - Common Page object for all TN EMIS user roles.
 *
 * Combines Login + Dashboard into a single page object.
 * Extends BasePage for reusable browser actions.
 * Used by: BEO, BEO1, BRC Senior Officer, and other TN_EMIS tests.
 *
 * Locators come from: src/pages/locators.js (login + dashboard sections)
 */
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { getLocators } from "../locators/locatorsPage.js";

export class TNEMISPage extends BasePage {

    constructor(page, roleName = "TN EMIS User") {

        super(page);

        this.roleName = roleName;

        const loc = getLocators().dashboard;

        // ─── Login Elements (using dashboard locators - same as DashboardPage) ──
        this.username = page.locator(loc.username);
        this.password = page.locator(loc.password);
        this.loginButton = page.locator(loc.loginButton);
        this.eyeIcon = page.locator(loc.eyeIcon);

        // ─── Login Page Visual Elements (for verification) ──────────────
        const loginLoc = getLocators().login;
        this.logo = page.locator(loginLoc.logo).first();
        this.wrapper = page.locator(loginLoc.wrapper);
        this.heading = page.locator(loginLoc.heading);
        this.usernameLabel = page.locator(loginLoc.usernameLabel);
        this.passwordLabel = page.locator(loginLoc.passwordLabel);

        // ─── Dashboard Elements ────────────────────────────────────────
        this.dashLogo1 = page.locator(loc.logo1);
        this.dashLogo2 = page.locator(loc.logo2).first();
        this.dashboardTitle = page.locator(loc.dashboardTitle);
        this.menuLocator = page.locator(loc.menuLocator);

        // ─── Profile / Logout ──────────────────────────────────────────
        this.profile = page.locator(loc.profile);
        this.logout = page.locator(loc.logout);
    }

    // ─── Navigation ────────────────────────────────────────────────────

    async gotoLoginPage(url) {
        await this.open(url);
    }

    // ─── Login Actions ─────────────────────────────────────────────────

    async login(username, password) {

        await this.fill(this.username, username);
        await this.fill(this.password, password);

        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.loginButton.click()
        ]);
    }

    // ─── Logout ────────────────────────────────────────────────────────

    async logoutFromApplication() {
        await this.click(this.profile);
        await this.click(this.logout);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyLoginPage() {
        await expect(this.wrapper).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.heading).toBeVisible();
    }

    async verifyDashboard() {
        await expect(this.dashLogo1).toBeVisible();
        await expect(this.dashLogo2).toBeVisible();
        await expect(this.dashboardTitle).toBeVisible();
    }

    // ─── Print Details ─────────────────────────────────────────────────

    async printLoginPageDetails() {

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();

        console.log(`\n═══════════ ${this.roleName} - Login Page Details ═══════════`);
        console.log(`URL     : ${currentUrl}`);
        console.log(`Title   : ${currentTitle}`);

        console.log("──────────── Visibility ────────────────────────");
        const elements = [
            ["Logo", this.logo],
            ["Wrapper", this.wrapper],
            ["Heading", this.heading],
            ["Username", this.username],
            ["Password", this.password],
            ["Login Button", this.loginButton],
        ];
        for (const [name, locator] of elements) {
            const visible = await locator.isVisible();
            console.log(`  ${name}: ${visible ? "Visible" : "Not Visible"}`);
        }

        console.log("──────────── Placeholders ──────────────────────");
        const usernamePlaceholder = await this.username.getAttribute("placeholder");
        const passwordPlaceholder = await this.password.getAttribute("placeholder");
        console.log(`  Username placeholder: ${usernamePlaceholder}`);
        console.log(`  Password placeholder: ${passwordPlaceholder}`);

        console.log("──────────── Labels ────────────────────────────");
        const usernameLabel = await this.usernameLabel.textContent();
        const passwordLabel = await this.passwordLabel.textContent();
        console.log(`  Username label: ${usernameLabel}`);
        console.log(`  Password label: ${passwordLabel}`);
        console.log("════════════════════════════════════════════════\n");
    }

    async printDashboardDetails() {

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();

        console.log(`\n═══════════ ${this.roleName} - Dashboard Details ════════════`);
        console.log(`URL     : ${currentUrl}`);
        console.log(`Title   : ${currentTitle}`);

        console.log("──────────── Visibility ────────────────────────");
        const elements = [
            ["Dashboard Logo 1", this.dashLogo1],
            ["Dashboard Logo 2", this.dashLogo2],
            ["Dashboard Title", this.dashboardTitle],
        ];
        for (const [name, locator] of elements) {
            const visible = await locator.isVisible();
            console.log(`  ${name}: ${visible ? "Visible" : "Not Visible"}`);
        }

        console.log("════════════════════════════════════════════════\n");
    }

    async printMenus() {

        // Main Menus = top-level nav items in the navbar (IFHRMS, Home, Component, Approvals, etc.)
        const mainMenus = this.menuLocator.locator(":scope > li");
        const mainCount = await mainMenus.count();

        // Sub Menus = category headings inside dropdowns (Student, Staff, School, Others, Competition, etc.)
        const subMenus = this.page.locator(".category-heading");
        const subCount = await subMenus.count();

        // Child Menus = actual links inside submenus (Health, CWD, Library, SIDS, etc.)
        const childMenus = this.page.locator(".submenu .nav-item a.nav-link, .submenu-item .nav-item a.nav-link");
        const childCount = await childMenus.count();

        console.log(`\n═══════════ ${this.roleName} - Menu Count Summary ═══════════`);
        console.log(`  Main Menus   : ${mainCount}`);
        console.log(`  Sub Menus    : ${subCount}`);
        console.log(`  Child Menus  : ${childCount}`);
        console.log(`  Total        : ${mainCount + subCount + childCount}`);
        console.log("════════════════════════════════════════════════\n");
    }

    // ─── Print Main Menus & Sub-Menus Separately ───────────────────────

    async printMainMenus() {

        // Main menus are direct nav-items in the page-navigation or emis-nav
        const mainMenus = this.menuLocator.locator(
            ":scope > li > a > .menu-title, " +
            ":scope > li > .nav-link, " +
            ":scope > .nav-item > .nav-link"
        );
        const count = await mainMenus.count();

        console.log(`\n═══════════ ${this.roleName} - MAIN MENUS ═══════════════════`);
        console.log(`Total Main Menus: ${count}`);
        console.log("─────────────────────────────────────────────────");

        for (let i = 0; i < count; i++) {
            const text = (await mainMenus.nth(i).textContent()).trim();
            if (text) {
                console.log(`  ${i + 1}. ${text}`);
            }
        }

        console.log("════════════════════════════════════════════════\n");
    }

    async printSubMenus() {

        // Sub-menus are inside .submenu or mega-menu dropdowns
        const subMenuContainers = this.page.locator(".submenu .nav-item a, .submenu-item .nav-item a, .emis-submenu a");
        const count = await subMenuContainers.count();

        console.log(`\n═══════════ ${this.roleName} - SUB-MENUS ════════════════════`);
        console.log(`Total Sub-Menus: ${count}`);
        console.log("─────────────────────────────────────────────────");

        // Get category headings and their sub-items
        const categories = this.page.locator(".category-heading, .submenu-category");
        const catCount = await categories.count();

        if (catCount > 0) {
            for (let i = 0; i < catCount; i++) {
                const catText = (await categories.nth(i).textContent()).trim();
                if (catText) {
                    console.log(`\n  ┌─ ${catText}`);

                    // Get sibling items after this category heading
                    const siblings = categories.nth(i).locator("~ .nav-item a");
                    const sibCount = await siblings.count();
                    for (let j = 0; j < sibCount; j++) {
                        const subText = (await siblings.nth(j).textContent()).trim();
                        if (subText) {
                            console.log(`  │  • ${subText}`);
                        }
                    }
                }
            }
        } else {
            // Fallback: print all sub-menu links
            for (let i = 0; i < count; i++) {
                const text = (await subMenuContainers.nth(i).textContent()).trim();
                if (text) {
                    console.log(`  ${i + 1}. ${text}`);
                }
            }
        }

        console.log("\n════════════════════════════════════════════════\n");
    }

    async printMenusDetailed() {

        console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
        console.log(`║  ${this.roleName} - MENU STRUCTURE                            ║`);
        console.log(`╚══════════════════════════════════════════════════════════════╝`);

        // ─── Main Menus ────────────────────────────────────────────────
        const navItems = this.menuLocator.locator(":scope > li, :scope > .nav-item");
        const navCount = await navItems.count();

        console.log(`\n┌──────────── MAIN MENUS (${navCount}) ────────────────────┐`);

        let mainMenuIndex = 1;
        for (let i = 0; i < navCount; i++) {
            const item = navItems.nth(i);
            try {
                const linkText = await item.locator("a, .nav-link, .emis-link").first().textContent({ timeout: 2000 });
                const text = linkText.trim().replace(/\s+/g, " ");
                if (text) {
                    const hasSubmenu = await item.locator(".submenu, .link-arrow, .chevron-icon").count() > 0;
                    const marker = hasSubmenu ? " ▼" : "";
                    console.log(`│  ${mainMenuIndex}. ${text}${marker}`);
                    mainMenuIndex++;
                }
            } catch (e) {
                // skip items that can't be read
            }
        }

        console.log(`└─────────────────────────────────────────────────┘`);

        // ─── Sub-Menus (read without clicking) ─────────────────────────
        const categoryHeadings = this.page.locator(".category-heading");
        const catCount = await categoryHeadings.count();

        if (catCount > 0) {
            console.log(`\n┌──────────── CHILD & SUB-MENUS ──────────────────┐`);

            for (let i = 0; i < catCount; i++) {
                try {
                    const catText = (await categoryHeadings.nth(i).textContent({ timeout: 2000 })).trim();
                    if (catText) {
                        console.log(`│`);
                        console.log(`│  ┌─ [${catText}]`);

                        // Get sibling nav-items in the same ul (parent list)
                        const parentUl = categoryHeadings.nth(i).locator("xpath=ancestor::ul[1]");
                        const subLinks = parentUl.locator(".nav-item a.nav-link");
                        const linkCount = await subLinks.count();

                        for (let j = 0; j < linkCount; j++) {
                            const linkText = (await subLinks.nth(j).textContent({ timeout: 2000 })).trim();
                            if (linkText) {
                                console.log(`│  │  • ${linkText}`);
                            }
                        }
                    }
                } catch (e) {
                    // skip on error
                }
            }

            console.log(`│`);
            console.log(`└─────────────────────────────────────────────────┘`);
        }

        console.log("");
    }

}
