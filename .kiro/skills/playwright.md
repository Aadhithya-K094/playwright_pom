---
name: Playwright Testing
description: Skills for creating, running, and managing Playwright test specs for TN EMIS
inclusion: manual
---

# Playwright Testing Skills

## Skill: Create a New Spec File

When asked to create a new test spec file:

1. Determine the module name and folder path
2. Count the folder depth from project root for correct import paths
3. Use this template:

```javascript
import { test, expect } from "<relative-path>/src/fixtures/pageFixtures.js";
import { getRoleDashboardDataBySNo } from "<relative-path>/data/index.js";

const USER_NUMBER = 1;
const loginData = getRoleDashboardDataBySNo("BEO1", USER_NUMBER);
const MODULE_URL = "https://tnemis-react-staging.tnsed.com/<module-path>";

test.use({ storageState: { cookies: [], origins: [] } });

test("<Module Name> - Full Functional Test", async ({ beo1Page, page }) => {

    await beo1Page.gotoLoginPage(loginData.url);
    await beo1Page.login(loginData.username, loginData.password);
    await page.goto(MODULE_URL);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);

    // Step 1: Verify page loads
    await page.waitForTimeout(500);
    console.log("✓ Step 1: Verify page loads");
    expect(page.url()).toContain("<module-path>");

    // Add more steps...
});
```

## Skill: Run Tests

```powershell
# Single file
npx playwright test "tests/e2e/<path>/file.spec.js" --project=chromium

# Headed mode
npx playwright test "tests/e2e/<path>/file.spec.js" --project=chromium --headed

# With React framework
$env:UI_FRAMEWORK="react"; npx playwright test "tests/e2e/<path>/file.spec.js" --project=chromium

# All tests in a folder
npx playwright test "tests/e2e/<folder>" --project=chromium
```

## Skill: Observe Module with MCP

When asked to observe a module:

1. Navigate to the URL using `mcp_playwright_browser_navigate`
2. Take a snapshot using `mcp_playwright_browser_snapshot`
3. Click elements using `mcp_playwright_browser_click`
4. Note: page title, table columns, buttons, forms, dialogs
5. Write test code based on observations
6. Add `await page.waitForTimeout(500)` between steps

## Skill: Compare Angular vs React

1. Login to Angular staging with same credentials
2. Navigate to module path
3. Capture snapshot (elements, menus, table data)
4. Login to React staging with same credentials
5. Navigate to same module path
6. Capture snapshot
7. Compare: element count, data, missing features
8. Generate bug report in Excel

## Skill: Update Excel Test Data

```javascript
// Read
const xlsx = require('xlsx');
const wb = xlsx.readFile('data/excel/TestData.xlsx');
const rows = xlsx.utils.sheet_to_json(wb.Sheets['Dashboard']);

// Add new row
// Columns: SNo | Name | Key | staging | production

// Write
xlsx.writeFile(wb, 'data/excel/TestData.xlsx');
```

## Skill: Send Email Report

```powershell
$env:SMTP_HOST = "smtp.gmail.com"
$env:SMTP_PORT = "587"
$env:SMTP_USER = "aadhithya.k@tnschools.gov.in"
$env:SMTP_PASS = "hkkk ziad cxyp dnxv"
$env:REPORT_RECIPIENTS = "aadhithya.k@tnschools.gov.in"
node src/helpers/EmailReporter.js
```

## Skill: Fix Import Path Errors

Count folders from spec file to project root:
- `tests/e2e/TN_EMIS/Migrated_Modules/` = 4 levels → `../../../../`
- `tests/e2e/TN_EMIS/Block_User/BEO1_Login/` = 5 levels → `../../../../../`
- `tests/e2e/TN_EMIS/Block_User/BEO1_Login/Component/School/` = 7 levels → `../../../../../../../`

## Skill: Extract XPaths from HTML

When user shares HTML source:
1. Identify key elements (inputs, buttons, tables, headings)
2. Write relative xpaths using id, class, placeholder, text content
3. Separate Angular and React xpaths
4. Update `src/locators/moduleLocators.js`
5. Prefer: `//input[@id="..."]`, `//button[contains(text(),"...")]`, `//th:has-text("...")`
