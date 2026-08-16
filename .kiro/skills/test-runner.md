---
name: Test Runner
description: Skills for running, debugging, and triaging Playwright test failures
inclusion: manual
---

# Test Runner Skills

## Skill: Run a Specific Test

When asked to run a test:

1. Identify the file path
2. Run with chromium project:
   npx playwright test "path/to/file.spec.js" --project=chromium
3. Report results: X passed, Y failed, Z skipped
4. For failures, state: file + test name + error reason

## Skill: Run Full Regression Suite

When asked to run all tests:

1. Run: npx playwright test --project=chromium
2. Wait for completion
3. Summarize: total passed/failed/skipped
4. List all failures with reasons
5. Offer to generate Allure report

## Skill: Debug a Failing Test

When a test fails:

### Step 1: Identify error type
- Cannot find module -> wrong import path (count ../ levels)
- locator.click: Timeout -> element not found (check locatorsPage.js)
- Navigation timeout -> slow network or wrong URL
- Unexpected token -> syntax error (missing backticks usually)

### Step 2: Fix in the correct file
- Import path -> spec file
- Locator broken -> src/locators/locatorsPage.js (check both angular + react)
- Page action failing -> src/pages/ page object
- Data issue -> data/excel/TestData.xlsx

### Step 3: Re-run to confirm
Always re-run the specific file after fixing.

## Skill: Generate Report

### Allure Report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

### Or use npm scripts:
- npm run allure:generate
- npm run allure:open
- npm run allure:serve
- npm run report (run tests + generate + open)
- npm run report:full (run + generate + history + email)

## Skill: Fix Import Path Errors

Count folders from spec file location to project root:

- tests/e2e/TN_EMIS/Base_Testing/ = 4 levels -> ../../../../
- tests/e2e/TN_EMIS/Block_User/ = 4 levels -> ../../../../
- tests/e2e/TN_EMIS/MENUS/Home/ = 5 levels -> ../../../../../
- tests/e2e/TN_EMIS/MENUS/EMIS_Tickets/ = 5 levels -> ../../../../../
- tests/e2e/TN_EMIS/MENUS/Component/Others/ = 6 levels -> ../../../../../../
- tests/e2e/TN_EMIS/MENUS/Approvals/School/ = 6 levels -> ../../../../../../

Then append: src/fixtures/pageFixtures.js or data/index.js

## Skill: Triage Multiple Failures

When many tests fail:

1. Group failures by error type
2. Fix the most common root cause first (often one fix resolves multiple)
3. Common batch fixes:
   - All import path errors in a folder -> same ../ count fix
   - All locator timeouts -> UI changed, update locatorsPage.js
   - All auth errors -> credentials or storageState expired
4. Re-run after each batch fix
5. Report remaining failures
