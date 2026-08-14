---
inclusion: auto
---

# Playwright Test Automation - Steering Rules

## Project Context
- This is a Playwright automated test suite for TN EMIS (Tamil Nadu Education Management Information System)
- The app has two versions: Angular (legacy) and React (migrating)
- Tests are written in JavaScript using Page Object Model (POM)
- Test data is driven from Excel (`data/excel/TestData.xlsx`)

## Key Conventions

### File Structure
- Page objects: `src/pages/`
- Locators: `src/locators/`
- Fixtures: `src/fixtures/pageFixtures.js`
- Test specs: `tests/e2e/`
- Test data: `data/excel/TestData.xlsx`
- Config: `config/env.config.js`

### Naming
- Spec files: `ModuleName.spec.js`
- Page objects: `PascalCase` (e.g., `TNEMISPage.js`, `ModulePage.js`)
- Locators: `camelCase` keys with xpath string values
- Folders: `Snake_Case` for menu/module names

### Framework Switching
- Angular: `$env:UI_FRAMEWORK="angular"`
- React: `$env:UI_FRAMEWORK="react"`
- Values are case-sensitive (lowercase only)

### Environment Switching
- Staging: `$env:TEST_ENV="staging"` (default)
- Production: `$env:TEST_ENV="production"`

### Test Data (Excel)
- Columns: `SNo | Name | Key | staging | production`
- Access: `getRoleDashboardDataBySNo("BEO1", 1)` → gets user 1 of BEO1 role
- Change `USER_NUMBER` in spec file to test different users

### Running Tests
- Single file: `npx playwright test "path/to/file.spec.js" --project=chromium`
- Headed mode: add `--headed`
- Debug mode: add `--debug`
- Always quote paths with spaces

### Import Paths
- Count `../` based on folder depth from project root
- `tests/e2e/TN_EMIS/Migrated_Modules/` → `../../../../src/fixtures/pageFixtures.js`
- `tests/e2e/TN_EMIS/Block_User/BEO1_Login/Component/School/` → needs 7 levels `../../../../../../../`

### Locators
- Angular xpaths: `locatorsPage.js` and `moduleLocators.js`
- React xpaths: same files, under `react:` key
- Prefer relative xpaths like `//input[@id="..."]` over absolute paths

### Test Writing Rules
- Use `test.use({ storageState: { cookies: [], origins: [] } })` to start fresh
- Login in `beforeEach` or at start of single test
- Add `await page.waitForTimeout(500)` between steps for stability
- Use `console.log()` for step progress in terminal
- Single login for all steps when testing one module end-to-end

### Reporting
- Allure report: `npx allure generate allure-results --clean -o allure-report`
- Email report: `node src/helpers/EmailReporter.js` (needs SMTP env vars)
- Email heading shows the spec file names that were run

### What NOT to do
- Don't add `test.only` (forbidOnly is enabled on CI)
- Don't hardcode credentials in spec files (use Excel data)
- Don't use `UI_FRAMEWORK="React"` (capital R) — must be lowercase `"react"`
- Don't duplicate locators across page files — use centralized locator files

### Mobile APK Testing
- Separate folder: `mobile-apk-tests/`
- Uses Appium + WebdriverIO (not Playwright)
- Needs: Java, Android SDK, Appium, connected device/emulator
- Independent from the web testing setup
