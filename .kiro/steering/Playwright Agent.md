---
inclusion: always
---

# Playwright Test Suite — Project Conventions

This is a Playwright e2e/API/visual suite for the EMIS/TNEMIS web app. JavaScript, ES Modules (`import`/`export`, never `require`). Windows + PowerShell (chain with `;`, not `&&`).

## Must-follow rules

1. **Test imports:** import `{ test, expect }` from `src/fixtures/pageFixtures.js` — never directly from `@playwright/test`.
2. **No raw selectors in tests.** All locators live in `src/locators/locatorsPage.js`, nested `page → env → framework` (angular/react), and are consumed inside page objects via `getLocators()`.
3. **Page objects extend `BasePage`** and reuse its helpers (`open`, `click`, `fill`, `verifyVisible`, `takeScreenshot`) instead of calling `this.page.*` directly when a helper exists.
4. **Register new page objects** as a fixture in `src/fixtures/pageFixtures.js` (lazy-instantiation style).
5. **Test data** comes from `src/helpers/ExcelReader.js` or `data/json` — never hard-code credentials. Respect the staging/production column split.
6. **Env switching:** never hard-code a baseURL; pull from `currentEnv`/`appConfig`. Honor `UI_FRAMEWORK` (angular/react) and `TEST_ENV` (staging/production). Set inline in pwsh: `$env:UI_FRAMEWORK="react"; $env:TEST_ENV="staging"; npx playwright test`.
7. **Never add `test.only`** (`forbidOnly` breaks CI).

## Preferred practices

- Name tests with stable IDs: `test("TC_LOGIN_001 - valid login navigates to dashboard", ...)`.
- Extract reusable UI widgets (Table, Modal, Sidebar) into component classes under `src/pages/components/`.
- Run via `npx playwright test` or the npm scripts (`test:login`, `test:chromium`, `test:api`, `test:visual`, `report`). Default project is `chromium`.
- Read the relevant page object, its locator block, and a sibling spec before writing new tests, to match existing style.
