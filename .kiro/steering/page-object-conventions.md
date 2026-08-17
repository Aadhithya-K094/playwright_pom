---
inclusion: fileMatch
fileMatchPattern: "src/pages/**"
---

# Page Object Conventions

These rules apply when creating or modifying page objects in `src/pages/`.

## Architecture Overview

```
src/pages/BasePage.js          → Parent class (NEVER modify without good reason)
src/pages/LoginPage.js         → Authentication flows
src/pages/DashboardPage.js     → Post-login dashboard interactions
src/pages/TNEMISPage.js        → Role-based composite (Login + Dashboard)
src/pages/ModulePage.js        → Module/menu navigation
src/pages/ForgotPasswordPage.js → Password recovery
src/pages/index.js             → Barrel export for all page objects
```

## Creating a New Page Object

### Step 1: Add Locators First

In `src/locators/locatorsPage.js`, add a new section:

```javascript
// In the locators object, add:
newPage: {
    staging: {
        angular: {
            elementName: '//xpath-for-angular',
            anotherElement: '//another-xpath'
        },
        react: {
            elementName: '//xpath-for-react',
            anotherElement: '//another-xpath-react'
        }
    },
    production: {
        angular: {
            elementName: '//xpath-for-angular-prod',
            anotherElement: '//another-xpath-prod'
        },
        react: {
            elementName: '//xpath-for-react-prod',
            anotherElement: '//another-xpath-react-prod'
        }
    }
}
```

Then update the `getLocators()` return object:
```javascript
return {
    login: locators.login[env][framework],
    dashboard: locators.dashboard[env][framework],
    forgotPassword: locators.forgotPassword[env][framework],
    newPage: locators.newPage[env][framework]  // ADD THIS
};
```

### Step 2: Create the Page Object Class

```javascript
/**
 * NewPage - Description of what this page represents.
 *
 * Handles: <list key interactions>
 */
import { BasePage } from "./BasePage.js";
import { getLocators } from "../locators/locatorsPage.js";

export class NewPage extends BasePage {

    constructor(page) {
        super(page);
        const loc = getLocators().newPage;
        this.elementName = page.locator(loc.elementName);
        this.anotherElement = page.locator(loc.anotherElement);
    }

    // ─── Navigation ────────────────────────────────────────────────────

    async gotoPage() {
        await this.open("url-or-use-config");
    }

    // ─── Actions ───────────────────────────────────────────────────────

    async performAction(data) {
        await this.fill(this.elementName, data);
        await this.click(this.anotherElement);
    }

    // ─── Verifications ─────────────────────────────────────────────────

    async verifyPageLoaded() {
        await this.verifyVisible(this.elementName);
    }

    // ─── Debug / Print ─────────────────────────────────────────────────

    async printPageDetails() {
        console.log("--- New Page Details ---");
        await this.logTextContent("Element", this.elementName);
    }
}
```

### Step 3: Register as Fixture

In `src/fixtures/pageFixtures.js`:

```javascript
import { NewPage } from "../pages/NewPage.js";

// Inside base.extend({...}):
newPage: async ({ page }, use) => {
    const newPage = new NewPage(page);
    await use(newPage);
},
```

### Step 4: Export from Barrel

In `src/pages/index.js`:
```javascript
export { NewPage } from "./NewPage.js";
```

## BasePage Methods (Use These, Don't Reinvent)

### Navigation
- `this.open(url)` — goto with load wait and 90s timeout
- `this.reloadPage()` — refresh current page
- `this.getCurrentURL()` — returns current URL string
- `this.getTitle()` — returns page title

### Waits
- `this.wait(ms)` — static wait (use sparingly, default 500ms)
- `this.waitForLoad()` — waits for networkidle

### Element Actions
- `this.click(locator)` — waits for visible + scrolls + clicks (preferred over raw `.click()`)
- `this.fill(locator, value)` — fills input with String(value)
- `this.hover(locator)` — hovers over element
- `this.clear(locator)` — clears input field
- `this.press(locator, key)` — presses a key on element

### Assertions
- `this.verifyVisible(locator)` — asserts element is visible
- `this.verifyHidden(locator)` — asserts element is hidden

### Screenshots
- `this.takeScreenshot(name)` — full page screenshot
- `this.takeLocatorScreenshot(locator, name)` — element screenshot

### Logging
- `this.logLocatorVisibility(name, locator)` — logs visibility state
- `this.logAttribute(name, locator, attr)` — logs attribute value
- `this.logTextContent(name, locator)` — logs text content
- `this.logCount(name, locator)` — logs element count

## Method Naming Conventions

### Actions (verbs)
- `login(user, pass)` — performs a login
- `logout()` or `logoutFromApplication()` — performs logout
- `navigateToModule(path)` — navigates to a module
- `clickMainMenu(name)` — clicks a menu item
- `fillForm(data)` — fills a form with data object

### Verifications (verify/assert prefix)
- `verifyDashboard()` — confirms dashboard loaded
- `verifyLoginPage()` — confirms login page elements visible
- `verifyPageLoaded()` — generic page loaded check
- `verifyTableExists()` — confirms table is present

### Getters (get prefix)
- `getTableRowCount()` — returns numeric count
- `getMenuItems()` — returns array of menu items
- `getCurrentURL()` — returns URL string

### Printers (print prefix — for debug)
- `printLoginPageDetails()` — logs page state to console
- `printMenus()` — logs menu structure
- `printDashboardDetails()` — logs dashboard state

### Composite Actions (multi-step)
- `loginWithValidCredentials()` — uses default valid data
- `loginWithInvalidUser()` — uses known-bad username
- `loginWithInvalidPassword()` — uses known-bad password

## Locator Best Practices

### Selector Priority (best → worst)
1. `data-testid` attributes (most stable, if available in the app)
2. `id` attributes: `//input[@id="loginUsername"]`
3. `role` + text: `page.getByRole("button", { name: "Submit" })`
4. Specific attributes: `//input[@type="email"]`
5. Class-based (fragile): `//div[@class="exact-class"]`
6. Positional (most fragile): `(//button[@type="submit"])[1]`

### Rules
- ALWAYS define for BOTH `angular` and `react` frameworks
- ALWAYS define for BOTH `staging` and `production` environments
- Use relative XPaths (`//`) not absolute (`/html/body/...`)
- Prefer unique attributes over positional indexes
- When positional index is unavoidable, add a comment explaining why

## Role-Based Page Objects (TNEMISPage Pattern)

When the same page has different behavior per user role:

```javascript
export class TNEMISPage extends BasePage {
    constructor(page, roleName) {
        super(page);
        this.roleName = roleName;
        const loc = getLocators();
        // Uses shared locators but behavior varies by role
        this.username = page.locator(loc.login.username);
        this.password = page.locator(loc.login.password);
    }

    async login(user, pass) {
        console.log(`Logging in as ${this.roleName}: ${user}`);
        await this.fill(this.username, user);
        await this.fill(this.password, pass);
        await this.click(this.loginButton);
    }
}
```

Register role-specific fixtures:
```javascript
beoPage: async ({ page }, use) => {
    await use(new TNEMISPage(page, "BEO"));
},
beo1Page: async ({ page }, use) => {
    await use(new TNEMISPage(page, "BEO1"));
},
```

## What NOT to Do in Page Objects

- DO NOT use `this.page.locator(...)` with hardcoded strings — use the locators system
- DO NOT import test data directly — let the test pass it as parameters
- DO NOT add assertions about test-specific expected values — keep verifications generic
- DO NOT use `page.waitForTimeout()` except as last resort with a comment
- DO NOT duplicate methods that exist in BasePage
- DO NOT make page objects depend on other page objects (keep them independent)
- DO NOT add test logic (if/else based on test case) into page objects
