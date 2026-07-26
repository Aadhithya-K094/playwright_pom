# Playwright POM Test Framework

A scalable, well-structured Playwright test automation framework using the **Page Object Model (POM)** pattern with custom fixtures, multi-environment support, and Allure reporting.

---

## Project Structure

```
playwright-pom/
│
├── config/                        # Environment & app configuration
│   ├── env.config.js              # Multi-environment settings (dev, staging, production)
│   └── index.js                   # Barrel export for config
│
├── src/                           # Framework source code
│   ├── pages/                     # Page Object classes
│   │   ├── BasePage.js            # Parent class — shared actions (click, fill, navigate)
│   │   ├── LoginPage.js           # Login screen interactions
│   │   ├── DashboardPage.js       # Dashboard screen interactions
│   │   ├── ForgotPasswordPage.js  # Forgot password flow
│   │   └── index.js               # Barrel export for all pages
│   │
│   ├── helpers/                   # Reusable utilities
│   │   ├── ExcelReader.js         # Read test data from Excel files
│   │   ├── ScreenshotHelper.js    # Capture full-page, element, viewport screenshots
│   │   ├── WaitHelper.js          # URL waits, element waits, polling
│   │   ├── ApiHelper.js           # REST API request wrapper (GET/POST/PUT/DELETE)
│   │   └── index.js               # Barrel export for all helpers
│   │
│   └── fixtures/                  # Custom Playwright fixtures
│       └── pageFixtures.js        # Auto-instantiated page objects for tests
│
├── data/                          # Test data
│   ├── excel/                     # Excel-based test data
│   │   └── Playwright_Login_TestData.xlsx
│   ├── json/                      # JS-based test data (environment-aware)
│   │   ├── loginData.js
│   │   ├── dashboardData.js
│   │   └── forgotPasswordData.js
│   └── index.js                   # Barrel export for all test data
│
├── tests/                         # All test specs
│   ├── setup/                     # Auth setup (runs before authenticated tests)
│   │   └── auth.setup.js
│   ├── e2e/                       # End-to-end UI tests
│   │   ├── Login.spec.js
│   │   ├── LoginExcel.spec.js
│   │   ├── Dashboard.spec.js
│   │   └── ForgotPassword.spec.js
│   ├── api/                       # API tests (*.api.spec.js)
│   └── visual/                    # Visual regression tests (*.visual.spec.js)
│
├── playwright.config.js           # Playwright configuration
├── global-setup.js                # Pre-test: env validation, directory creation, health check
├── global-teardown.js             # Post-test: cleanup, summary
├── package.json                   # Dependencies & npm scripts
└── .gitignore
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install

# 3. Run all tests (staging environment, Chromium)
npx playwright test --project=chromium

# 4. View report
npm run allure:serve
```

---

## Running Tests

### By project (browser/device)

```bash
npx playwright test --project=chromium         # Desktop Chrome
npx playwright test --project=firefox          # Desktop Firefox
npx playwright test --project=webkit           # Desktop Safari
npx playwright test --project=mobile-chrome    # Pixel 7
npx playwright test --project=mobile-safari    # iPhone 14
npx playwright test --project=tablet           # iPad Pro 11
npx playwright test --project=api              # API tests
npx playwright test --project=visual           # Visual regression
```

### By environment

```bash
# PowerShell
$env:TEST_ENV="dev"; npx playwright test
$env:TEST_ENV="staging"; npx playwright test
$env:TEST_ENV="production"; npx playwright test

# Linux/macOS
TEST_ENV=production npx playwright test
```

### By specific test file

```bash
npx playwright test tests/e2e/Login.spec.js --project=chromium
npx playwright test tests/e2e/LoginExcel.spec.js --project=chromium
```

### With custom credentials

```bash
$env:TEST_USERNAME="myuser"; $env:TEST_PASSWORD="mypass"; npx playwright test
```

---

## Allure Reporting

```bash
npm run allure:generate    # Generate HTML report from allure-results/
npm run allure:open        # Open the generated report
npm run allure:serve       # Generate + open in one step
npm run allure:clean       # Remove old results and reports
npm run report             # Run tests + generate + open report
```

---

## How It Works

### Page Object Model (POM)

Each page/screen has its own class in `src/pages/`:

```
BasePage (shared actions)
   ├── LoginPage
   ├── DashboardPage
   └── ForgotPasswordPage
```

Page objects encapsulate locators and actions. Tests never reference raw selectors directly.

### Custom Fixtures

Instead of manually creating page objects in every test:

```javascript
// OLD way — manual instantiation
import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage.js";

test("login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("user", "pass");
});
```

```javascript
// NEW way — fixtures auto-inject page objects
import { test, expect } from "../../src/fixtures/pageFixtures.js";

test("login", async ({ loginPage }) => {
    await loginPage.login("user", "pass");
});
```

Available fixtures: `loginPage`, `dashboardPage`, `forgotPasswordPage`, `screenshotHelper`, `waitHelper`

### Authentication Flow

1. The `setup` project runs `tests/setup/auth.setup.js` first
2. It logs in and saves cookies/storage to `test-results/.auth/storageState.json`
3. All other projects load that saved state — tests start already logged in
4. Tests that don't need auth (login page tests) skip this dependency

### Multi-Environment Config

All URLs, credentials, and timeouts are driven by `config/env.config.js`:

| Environment | `TEST_ENV` | Base URL |
|-------------|-----------|----------|
| Development | `dev` | `https://tnemis-dev.tnsed.com` |
| Staging | `staging` | `https://tnemis-staging.tnsed.com` |
| Production | `production` | `https://tnemis.tnsed.com` |

---

## Adding New Tests

### 1. Create a new Page Object (if needed)

```javascript
// src/pages/StudentPage.js
import { BasePage } from "./BasePage.js";

export class StudentPage extends BasePage {
    constructor(page) {
        super(page);
        this.studentName = page.getByRole("textbox", { name: "Student Name" });
    }

    async searchStudent(name) {
        await this.fill(this.studentName, name);
    }
}
```

### 2. Register it in the fixtures

```javascript
// src/fixtures/pageFixtures.js — add:
import { StudentPage } from "../pages/StudentPage.js";

// Inside base.extend({...}):
studentPage: async ({ page }, use) => {
    await use(new StudentPage(page));
},
```

### 3. Write the test

```javascript
// tests/e2e/Student.spec.js
import { test, expect } from "../../src/fixtures/pageFixtures.js";

test("Search student", async ({ studentPage }) => {
    await studentPage.searchStudent("Aadhithya");
});
```

### 4. Add test data (if needed)

```javascript
// data/json/studentData.js
import { currentEnv } from "../../config/index.js";

export const studentData = {
    searchUrl: `${currentEnv.baseURL}/students`,
    validName: "Aadhithya"
};
```

---

## Adding API Tests

Place API tests in `tests/api/` with the naming pattern `*.api.spec.js`:

```javascript
// tests/api/users.api.spec.js
import { test, expect } from "@playwright/test";
import { ApiHelper } from "../../src/helpers/ApiHelper.js";

test("GET users returns 200", async ({ request }) => {
    const api = new ApiHelper(request);
    const response = await api.get("/users");
    expect(response.status).toBe(200);
});
```

Run with: `npx playwright test --project=api`

---

## Adding Visual Tests

Place visual tests in `tests/visual/` with the naming pattern `*.visual.spec.js`:

```javascript
// tests/visual/login.visual.spec.js
import { test, expect } from "../../src/fixtures/pageFixtures.js";
import loginData from "../../data/json/loginData.js";

test("Login page visual", async ({ loginPage }) => {
    await loginPage.gotoLoginPage(loginData.url);
    await expect(loginPage.page).toHaveScreenshot("login-page.png");
});
```

Run with: `npx playwright test --project=visual`

---

## npm Scripts

| Script | Description |
|--------|-------------|
| `npm run test` | Run all Playwright tests |
| `npm run test:chromium` | Run on Chrome only |
| `npm run test:firefox` | Run on Firefox only |
| `npm run test:webkit` | Run on Safari only |
| `npm run test:mobile` | Run on mobile devices |
| `npm run test:api` | Run API tests only |
| `npm run allure:generate` | Generate Allure report |
| `npm run allure:open` | Open Allure report |
| `npm run allure:serve` | Generate + serve report |
| `npm run allure:clean` | Clean report artifacts |
| `npm run report` | Full: run tests + report |

---

## Key Conventions

- Page objects live in `src/pages/` and extend `BasePage`
- Helpers live in `src/helpers/` for reusable utilities
- Test data lives in `data/` (Excel in `data/excel/`, JS in `data/json/`)
- Config lives in `config/` — never hardcode URLs or credentials in tests
- Use fixtures (`src/fixtures/pageFixtures.js`) instead of manual page object creation
- Use semantic selectors (`getByRole`, `getByText`) over CSS/XPath where possible
- Never commit `test.only` — `forbidOnly` is enabled in CI
