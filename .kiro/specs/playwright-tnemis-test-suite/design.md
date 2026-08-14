# Design: TN EMIS Playwright Test Suite

## Architecture Overview

```
playwright pom/
├── config/
│   ├── env.config.js          # Environment + Framework URL resolution
│   └── index.js               # Config exports
├── data/
│   ├── index.js               # Test data aggregation layer
│   └── excel/TestData.xlsx    # Data-driven test data (Login, Dashboard, ForgotPassword sheets)
├── src/
│   ├── fixtures/
│   │   └── pageFixtures.js    # Custom Playwright fixtures (auto-instantiate page objects)
│   ├── helpers/
│   │   ├── ExcelReader.js     # Excel parsing with env-aware column selection
│   │   ├── ScreenshotHelper.js
│   │   ├── WaitHelper.js
│   │   └── EmailReporter.js
│   ├── locators/
│   │   ├── locatorsPage.js    # Centralized XPath locators (page → env → framework)
│   │   └── moduleLocators.js  # Module-specific locators and URLs
│   └── pages/
│       ├── BasePage.js        # Base class: navigation, click, fill, screenshot, logging
│       ├── LoginPage.js       # Login page object
│       ├── DashboardPage.js   # Dashboard page object
│       ├── ForgotPasswordPage.js
│       ├── TNEMISPage.js      # Multi-role page object (BEO, BEO1, BRC, etc.)
│       └── ModulePage.js      # Module navigation page object
├── tests/
│   ├── setup/
│   │   └── auth.setup.js     # Auth state creation (storageState)
│   ├── e2e/
│   │   ├── Base_Testing/     # Login, Dashboard, ForgotPassword specs
│   │   ├── TN_EMIS/          # Role-based tests (Block/District/State users)
│   │   ├── EMIS/             # HM, School, Teacher login tests
│   │   └── DGE/              # DGE-specific tests
│   ├── api/                  # API tests
│   └── visual/               # Visual regression tests
├── playwright.config.js       # Multi-project config
├── global-setup.js            # Auth state + directory creation
└── global-teardown.js         # Cleanup
```

---

## Design Patterns

### 1. Page Object Model (POM)
Every page/screen has a dedicated class that encapsulates:
- **Locators** — resolved from `locatorsPage.js` based on env + framework
- **Actions** — methods like `login()`, `logout()`, `navigateToModule()`
- **Verifications** — methods like `verifyDashboard()`, `verifyLoginPage()`
- **Data** — fetched from ExcelReader

All page objects extend `BasePage` which provides reusable low-level methods.

### 2. Custom Fixtures
Tests import `{ test, expect }` from `src/fixtures/pageFixtures.js` instead of `@playwright/test`. Fixtures auto-create page objects:
- `loginPage` → LoginPage
- `dashboardPage` → DashboardPage
- `beoPage`, `beo1Page`, `brcSeniorOfficerPage` → TNEMISPage (with role name)
- `modulePage` → ModulePage
- `screenshotHelper`, `waitHelper` → Helper classes

### 3. Environment-Aware Locators
Locators are organized as: `locators[page][environment][framework]`
- Supports: staging/production × angular/react
- Resolved at runtime via `getLocators()` using `TEST_ENV` and `UI_FRAMEWORK` env vars

### 4. Data-Driven Testing
- **ExcelReader** reads `TestData.xlsx` with sheets per feature
- **Environment column selection**: picks `staging` or `production` column automatically
- **Role filtering**: `getTestDataByName(sheet, roleName)` for role-specific data
- **data/index.js** merges Excel data with environment config (URLs, credentials)

### 5. Auth State Reuse
- `global-setup.js` or `tests/setup/auth.setup.js` creates `storageState.json`
- Test projects reference this state to skip login in every test
- Reduces test execution time significantly

---

## Component Design

### BasePage (Abstract Base)
```javascript
class BasePage {
    open(url)                    // Navigate to URL
    click(locator)               // Wait + scroll + click
    fill(locator, value)         // Fill input
    hover(locator)               // Hover element
    wait(ms)                     // Explicit wait
    waitForLoad()                // Wait for networkidle
    verifyVisible(locator)       // Assert visible
    takeScreenshot(name)         // Full page screenshot
    takeLocatorScreenshot(l, n)  // Element screenshot
}
```

### LoginPage
```javascript
class LoginPage extends BasePage {
    gotoLoginPage()              // Navigate using data URL
    login(username, password)    // Fill + submit
    loginWithValidCredentials()  // Data-driven valid login
    loginWithInvalidUser()       // Data-driven invalid user
    verifyLoginPage()            // Assert all elements visible
    printLoginPageDetails()      // Console output of page state
}
```

### TNEMISPage (Multi-Role)
```javascript
class TNEMISPage extends BasePage {
    constructor(page, roleName)  // Role-specific instance
    login(username, password)    // Login action
    verifyDashboard()            // Dashboard assertions
    printMenus()                 // Enumerate visible menus
    logoutFromApplication()      // Profile → Logout
}
```

### ModulePage
```javascript
class ModulePage extends BasePage {
    navigateToModule(path)       // Go to module URL
    clickMainMenu(name)          // Click top-level menu
    clickSubMenu(parent, child)  // Open parent → click child
    verifyPageLoaded(path)       // Assert content + URL
    getMenuItems()               // Return menu list
}
```

---

## Test Execution Flow

```
1. Global Setup
   ├── Ensure directories (screenshots, videos, traces)
   ├── Validate credentials
   └── Create storageState.json (authenticated session)

2. Test Projects (parallel capable)
   ├── chromium (Desktop Chrome, 1500×900)
   ├── mobile-chrome (Moto G4)
   ├── mobile-safari (iPhone 14)
   ├── tablet (iPad Pro 11)
   ├── api (REST endpoint tests)
   └── visual (screenshot comparison)

3. Each Test
   ├── Fixture creates page object
   ├── beforeEach: navigate to page
   ├── Test body: actions + verifications
   └── afterEach: screenshot on failure

4. Reporting
   ├── List reporter (console)
   ├── HTML reporter
   └── Allure reporter (with environment info)
```

---

## Error Handling Strategy

- **Timeouts**: `actionTimeout` and `navigationTimeout` from env config
- **Retries**: 2 retries on CI, 0 locally
- **Screenshots**: `only-on-failure`
- **Video**: `retain-on-failure`
- **Traces**: `on` (always captured for debugging)
- **networkidle**: Used before assertions to ensure page is fully loaded

---

## Testing Strategy

| Test Type | Directory | Runner | Focus |
|-----------|-----------|--------|-------|
| E2E UI | tests/e2e/ | chromium | Full user flows |
| Mobile | tests/e2e/ | mobile-chrome, mobile-safari | Responsive behavior |
| Tablet | tests/e2e/ | tablet | Tablet layout |
| API | tests/api/ | api project | REST endpoints |
| Visual | tests/visual/ | visual project | Screenshot comparison |
| Auth | tests/setup/ | setup project | Session creation |
