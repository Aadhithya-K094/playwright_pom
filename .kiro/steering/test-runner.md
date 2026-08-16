---
name: Test Runner
description: Rules for running, debugging, and triaging Playwright test failures
inclusion: auto
---

# Test Runner - Steering Rules

## Purpose
Run Playwright tests, identify failures, fix them, and generate reports.

## Run Commands

### Single file
```powershell
npx playwright test "tests/e2e/TN_EMIS/Base_Testing/Login.spec.js" --project=chromium
```

### Module folder
```powershell
npx playwright test "tests/e2e/TN_EMIS/Block_User/" --project=chromium
```

### Full suite
```powershell
npx playwright test --project=chromium
```

### Headed mode (see browser)
```powershell
npx playwright test "path/to/file.spec.js" --project=chromium --headed
```

### Debug mode
```powershell
npx playwright test "path/to/file.spec.js" --project=chromium --debug
```

## Available npm Scripts
- `npm run test:login` — Login tests
- `npm run test:dashboard` — Dashboard tests
- `npm run test:chromium` — All tests on Chrome
- `npm run test:headed` — Chrome headed mode
- `npm run test:debug` — Debug mode
- `npm run test:api` — API tests
- `npm run test:visual` — Visual regression
- `npm run report` — Run tests + Allure report
- `npm run test:email` — Run + email report

## Debugging Workflow

### Step 1: Identify the error type
| Error Message | Root Cause | Fix Location |
|---|---|---|
| Cannot find module | Wrong `../` import path | Spec file imports |
| locator.click: Timeout | Element not found/visible | locatorsPage.js |
| Navigation timeout | Slow network / wrong URL | Page object or config |
| Unexpected token | Syntax error (missing backticks) | Spec file |

### Step 2: Fix in the correct file
- Import path wrong → fix in the `.spec.js` file
- Locator broken → fix in `src/locators/locatorsPage.js` (check both angular/react)
- Page action failing → fix in `src/pages/` page object
- Data issue → fix in `data/excel/TestData.xlsx`

### Step 3: Re-run and confirm
Always re-run the specific test after fixing to confirm it passes.

## Reporting
- Allure generate: `npm run allure:generate`
- Allure open: `npm run allure:open`
- Allure serve: `npm run allure:serve`
- Email report: `npm run test:email`
- Full pipeline: `npm run report:full`

## Rules
- Never add `test.only` (forbidOnly on CI)
- Always show: X passed, Y failed, Z skipped
- For failures: state file name + test name + reason
- Chain commands with `;` in PowerShell (not `&&`)
- Default project is `chromium`
