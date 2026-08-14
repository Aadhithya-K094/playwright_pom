# Requirements: TN EMIS Playwright Test Suite

## Overview
Automated end-to-end test suite for the TN EMIS (Tamil Nadu Education Management Information System) web application covering login, dashboard, module navigation, and role-based access testing across Angular and React frameworks on staging and production environments.

---

## REQ-1: Login Module Testing

### REQ-1.1: Login Page UI Verification
WHEN a user navigates to the login URL
THE SYSTEM SHALL display the login page with logo, heading, username field, password field, eye icon, and login button visible.

**Acceptance Criteria:**
- [ ] Logo image is visible
- [ ] Login wrapper/background is visible
- [ ] Heading text is visible
- [ ] Username input field is visible with correct placeholder and label
- [ ] Password input field is visible with correct placeholder and label
- [ ] Login button is visible and enabled
- [ ] Eye icon (show/hide password) is visible

### REQ-1.2: Valid Login
WHEN a user enters valid credentials and clicks Login
THE SYSTEM SHALL redirect to the dashboard page.

**Acceptance Criteria:**
- [ ] URL changes from /auth/login to /dashboard or home
- [ ] Dashboard elements (logo, title, menu) become visible
- [ ] No error messages displayed

### REQ-1.3: Invalid Login Scenarios
WHEN a user enters invalid credentials
THE SYSTEM SHALL display appropriate error messages and remain on the login page.

**Acceptance Criteria:**
- [ ] Invalid username + valid password shows error
- [ ] Valid username + invalid password shows error
- [ ] Username with spaces shows error
- [ ] Empty fields show validation errors
- [ ] URL remains on /auth/login

### REQ-1.4: Forgot Password Flow
WHEN a user clicks Forgot Password
THE SYSTEM SHALL navigate to the password reset flow.

**Acceptance Criteria:**
- [ ] Forgot Password button is clickable
- [ ] OTP input appears after valid username submission
- [ ] Invalid OTP shows error
- [ ] Password reset completes with valid OTP and new password

---

## REQ-2: Dashboard Module Testing

### REQ-2.1: Dashboard Verification
WHEN a user successfully logs in
THE SYSTEM SHALL display the dashboard with navigation menus.

**Acceptance Criteria:**
- [ ] Dashboard title/header is visible
- [ ] Logo(s) are visible
- [ ] Navigation menu items are displayed
- [ ] User profile section is accessible

### REQ-2.2: Menu Discovery
WHEN the dashboard loads
THE SYSTEM SHALL display all available menu items for the logged-in user role.

**Acceptance Criteria:**
- [ ] Main menu items are enumerable
- [ ] Sub-menu items are accessible from parent menus
- [ ] Menu count matches expected for the role

### REQ-2.3: Logout
WHEN a user clicks the profile icon and selects Logout
THE SYSTEM SHALL return to the login page.

**Acceptance Criteria:**
- [ ] Profile dropdown opens on click
- [ ] Logout option is visible
- [ ] After logout, URL returns to /auth/login
- [ ] Session/storage is cleared

---

## REQ-3: Role-Based Access Testing

### REQ-3.1: Block Level Users
WHEN a block-level user (BEO, BEO1, BRC Senior Officer) logs in
THE SYSTEM SHALL display only the menus and modules authorized for that role.

**Acceptance Criteria:**
- [ ] BEO login succeeds and shows BEO-specific menus
- [ ] BEO1 login succeeds and shows BEO1-specific menus (Component, Approvals, Search, Reports, etc.)
- [ ] BRC Senior Officer login succeeds and shows authorized modules

### REQ-3.2: District Level Users
WHEN a district-level user (CEO, DEO, JD, etc.) logs in
THE SYSTEM SHALL display district-level menus and data.

**Acceptance Criteria:**
- [ ] CEO, DEO, DEO Elementary, Education District, JD, JD Admin, JD Matric, JD Secondary logins all succeed
- [ ] Each role sees appropriate dashboard content

### REQ-3.3: State Level Users
WHEN a state-level user logs in
THE SYSTEM SHALL display state-wide data and administrative modules.

**Acceptance Criteria:**
- [ ] State user login succeeds
- [ ] State Project Director login succeeds
- [ ] State-level menus are visible

---

## REQ-4: Module Navigation Testing

### REQ-4.1: Component Modules
WHEN a user navigates to Component sub-modules
THE SYSTEM SHALL load the module page without errors.

**Modules to verify:**
- [ ] Student: Health, CWD
- [ ] Staff: Teacher Training, Grievance
- [ ] School: Library, SIDS, Sports, Regulatory Compliance, STEM, SMC, Schemes, Warehouse Tracking, CM BFS Inspection Form
- [ ] Others: G2C, Hi Tech Lab Assessments, ITK, Thiran Dashboard

### REQ-4.2: Approval Modules
WHEN a user navigates to Approval sub-modules
THE SYSTEM SHALL load the approval pages with data tables.

**Modules to verify:**
- [ ] Staff: Deputation/Admin Transfer, Post Sanctioned, In-charge, Staff Grievance Verification
- [ ] Student: Student Updation Details, DBT Bank Verification
- [ ] Staff Transfers: Leave Account Approval, Seniority Challenge
- [ ] School: Monthly Reports, Indent Entry, Internet Connectivity, Event/Tour/Camp Registration, Re-Admission, Bread Winning, House System, Indent Supply Entry

### REQ-4.3: Search Modules
WHEN a user uses the search functionality
THE SYSTEM SHALL return results for Student, Staff, and School searches.

**Acceptance Criteria:**
- [ ] Student search loads and is functional
- [ ] Staff search loads and is functional
- [ ] School search loads and is functional

---

## REQ-5: Cross-Framework Compatibility

### REQ-5.1: Angular and React Support
WHEN tests run with UI_FRAMEWORK set to "angular" or "react"
THE SYSTEM SHALL use the correct locators for the active framework.

**Acceptance Criteria:**
- [ ] Angular locators resolve correctly on Angular staging/production
- [ ] React locators resolve correctly on React staging/production
- [ ] Same test logic works across both frameworks via locator abstraction

---

## REQ-6: Data-Driven Testing

### REQ-6.1: Excel-Based Test Data
WHEN tests execute
THE SYSTEM SHALL read credentials and test data from TestData.xlsx with environment-aware column selection.

**Acceptance Criteria:**
- [ ] Login sheet provides valid/invalid credentials per environment
- [ ] Dashboard sheet provides role-specific credentials
- [ ] ForgotPassword sheet provides OTP and password test data
- [ ] Environment column (staging/production) is selected automatically based on TEST_ENV

---

## REQ-7: Multi-Device Testing

### REQ-7.1: Responsive Testing
WHEN tests run on mobile and tablet projects
THE SYSTEM SHALL verify the application works on smaller viewports.

**Acceptance Criteria:**
- [ ] Mobile Chrome (Moto G4) tests pass
- [ ] Mobile Safari (iPhone 14) tests pass
- [ ] Tablet (iPad Pro 11) tests pass
