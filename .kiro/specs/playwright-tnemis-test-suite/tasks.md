# Tasks: TN EMIS Playwright Test Suite

## Status Legend
- [ ] Not started
- [x] Completed
- [ ] In progress

---

## Phase 1: Foundation (Core Infrastructure)

### Task 1.1: Environment Configuration
- [x] Create `config/env.config.js` with staging/production × angular/react URLs
- [x] Set up environment variable resolution (UI_FRAMEWORK, TEST_ENV)
- [x] Create `config/index.js` for clean exports

### Task 1.2: Base Page Object
- [x] Create `src/pages/BasePage.js` with reusable methods (open, click, fill, hover, wait, screenshots)
- [x] Add logging/debug helpers (logLocatorVisibility, logAttribute, logTextContent)
- [x] Add waitForLoad (networkidle) helper

### Task 1.3: Locator Architecture
- [x] Create `src/locators/locatorsPage.js` with locators organized by page → env → framework
- [x] Implement `getLocators()` resolver function
- [x] Add locators for: login, dashboard, forgotPassword pages

### Task 1.4: Test Data Layer
- [x] Create `src/helpers/ExcelReader.js` for reading TestData.xlsx
- [x] Implement environment-aware column selection
- [x] Create `data/index.js` as aggregation layer merging Excel + env config
- [x] Support role-specific data via `getTestDataByName()`

### Task 1.5: Custom Fixtures
- [x] Create `src/fixtures/pageFixtures.js` extending Playwright base test
- [x] Register fixtures: loginPage, dashboardPage, forgotPasswordPage, beoPage, beo1Page, brcSeniorOfficerPage, modulePage
- [x] Add helper fixtures: screenshotHelper, waitHelper

### Task 1.6: Playwright Configuration
- [x] Create `playwright.config.js` with multiple projects (chromium, mobile, tablet, api, visual, setup)
- [x] Configure reporters (list, html, allure)
- [x] Set up global setup/teardown
- [x] Configure trace, screenshot, video settings

### Task 1.7: Auth Setup
- [x] Create `global-setup.js` for directory creation + auth state
- [x] Create `tests/setup/auth.setup.js` as setup project
- [x] Store auth state at `test-results/.auth/storageState.json`

---

## Phase 2: Page Objects

### Task 2.1: Login Page Object
- [x] Create `src/pages/LoginPage.js` extending BasePage
- [x] Implement: gotoLoginPage(), login(), verifyLoginPage(), printLoginPageDetails()
- [x] Add convenience methods: loginWithValidCredentials(), loginWithInvalidUser(), etc.

### Task 2.2: Dashboard Page Object
- [x] Create `src/pages/DashboardPage.js` extending BasePage
- [x] Implement: gotoLoginPage(), login(), verifyDashboard(), printMenus()
- [x] Add logout: logoutFromApplication()
- [x] Add screenshot methods: takeDashboardScreenshots()

### Task 2.3: Forgot Password Page Object
- [x] Create `src/pages/ForgotPasswordPage.js` extending BasePage
- [x] Implement OTP flow methods

### Task 2.4: TN EMIS Multi-Role Page Object
- [x] Create `src/pages/TNEMISPage.js` extending BasePage
- [x] Accept roleName in constructor for role-specific behavior
- [x] Combine login + dashboard verification + menu introspection
- [x] Add printDashboardDetails(), printMenus(), printSubMenus()

### Task 2.5: Module Navigation Page Object
- [x] Create `src/pages/ModulePage.js` extending BasePage
- [x] Implement: navigateToModule(), clickMainMenu(), clickSubMenu()
- [x] Add verification: verifyPageLoaded(), verifyTextVisible(), captureConsoleErrors()
- [x] Create `src/locators/moduleLocators.js` for module paths

---

## Phase 3: Base Test Specs

### Task 3.1: Login Test Spec
- [x] Create `tests/e2e/Base_Testing/Login.spec.js`
- [x] Test: Verify Login Page (all elements)
- [x] Test: Invalid User With Space
- [x] Test: Valid User Invalid Password
- [x] Test: Invalid User Valid Password
- [x] Test: Valid Login

### Task 3.2: Dashboard Test Spec
- [x] Create `tests/e2e/Base_Testing/Dashboard.spec.js`
- [x] Test: Login → Verify Dashboard → Print Menus → Logout

### Task 3.3: Forgot Password Test Spec
- [x] Create `tests/e2e/Base_Testing/ForgotPassword.spec.js`
- [x] Test: Invalid user → error
- [x] Test: Valid user → OTP → reset flow

---

## Phase 4: Role-Based Test Specs

### Task 4.1: Block User - BEO Tests
- [x] Create `tests/e2e/TN_EMIS/Block_User/BEO_Login/BEO.spec.js`
- [x] Test: BEO login + dashboard + menus + logout

### Task 4.2: Block User - BEO1 Tests
- [x] Create `tests/e2e/TN_EMIS/Block_User/BEO1_Login/BEO1.spec.js`
- [x] Test: BEO1 login + dashboard + menus
- [x] Create module sub-tests: Home, IFHRMS, ITK, Mail Request, Staff List, Competition, Grievance, Reports, Inbox, EMIS Tickets, SLAS Assessment
- [x] Create Component sub-tests: Student (Health, CWD), Staff (Training, Grievance), School (Library, SIDS, Sports, etc.), Others (G2C, Hi Tech Lab, ITK, Thiran)
- [x] Create Approval sub-tests: Staff, Student, Staff Transfers, School
- [x] Create Search sub-tests: Student, Staff, School

### Task 4.3: Block User - BRC Senior Officer Tests
- [x] Create `tests/e2e/TN_EMIS/Block_User/BRC_Senior_Officer_Login/BRC_Senior_Officer.spec.js`

### Task 4.4: District User Tests
- [x] Create specs for: CEO, DEO, DEO Elementary 1, Education District, JD, JD Admin, JD Matric, JD Secondary

### Task 4.5: State User Tests
- [x] Create specs for: State, State Project Director

---

## Phase 5: Advanced Features

### Task 5.1: Mail Request Module Tests
- [ ] Create dedicated Mail Request spec with form fill + validation
- [ ] Test: New Mail Request submission (positive)
- [ ] Test: Empty form validation (negative)
- [ ] Test: Invalid phone number (negative)
- [ ] Test: Invalid email domain (negative)
- [ ] Test: Verify submission in table
- [ ] Test: Track Requests counter updates

### Task 5.2: Data Export/Import Tests
- [ ] Test: Export CSV from mail request table
- [ ] Test: Bulk Upload functionality

### Task 5.3: Cross-Framework Tests
- [ ] Verify test suite runs with UI_FRAMEWORK=angular
- [ ] Verify test suite runs with UI_FRAMEWORK=react
- [ ] Validate locator switching works correctly

### Task 5.4: Mobile/Tablet Tests
- [ ] Run base tests on mobile-chrome project
- [ ] Run base tests on mobile-safari project
- [ ] Run base tests on tablet project
- [ ] Verify responsive layout issues

### Task 5.5: API Tests
- [ ] Create API test stubs in tests/api/
- [ ] Test: Login API endpoint
- [ ] Test: Dashboard data API
- [ ] Test: Module data APIs

---

## Phase 6: Reporting & CI

### Task 6.1: Allure Reporting
- [x] Configure allure-playwright reporter
- [x] Add environment info to allure reports
- [ ] Add test step annotations for better reporting

### Task 6.2: Email Reports
- [x] Create EmailReporter.js helper
- [ ] Configure automatic email after CI run

### Task 6.3: GitHub Actions CI
- [x] Create `.github/workflows/playwright.yml`
- [ ] Add parallel browser execution
- [ ] Add artifact upload for test results

---

## Phase 7: Mobile APK Testing (WebdriverIO + Appium)

### Task 7.1: Mobile Test Infrastructure
- [x] Set up `mobile-apk-tests/` directory with WebdriverIO + Appium
- [x] Configure `wdio.conf.js` for Android device
- [x] Create test data in `data/testData.js`

### Task 7.2: Mobile Login Page Tests
- [x] Create `app.spec.js` for login page element verification
- [x] Verify WebView context switching
- [x] Print all page elements (labels, inputs, buttons)

### Task 7.3: Mobile Dashboard Tests
- [x] Create `dashboard.spec.js` for dashboard verification
- [x] Login → Dashboard content → Navigation tabs → Logout

### Task 7.4: Mobile Smoke Tests
- [x] Create `smoke.spec.js` for APK install/launch verification
- [x] Verify WebView context availability
