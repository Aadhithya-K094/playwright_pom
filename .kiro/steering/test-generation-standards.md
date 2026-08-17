---
inclusion: auto
---

# Test Generation Standards

These rules apply whenever generating, modifying, or reviewing test spec files in this project.

## Test File Structure

Every spec file must follow this template:

```javascript
/**
 * Module: <Module Name>
 * Description: <Brief purpose of this test file>
 * Framework: Angular / React (auto-resolved via env)
 * Environment: Staging / Production (auto-resolved via env)
 */
import { test, expect } from "<relative-path>/src/fixtures/pageFixtures.js";
import { <dataExport> } from "<relative-path>/data/index.js";

// Clear auth state for fresh login tests
test.use({ storageState: { cookies: [], origins: [] } });

test.describe("<Module Name> - <Section>", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.gotoLoginPage();
    });

    test("TC_<MODULE>_001 - <descriptive name>", async ({ loginPage, dashboardPage }) => {
        // Arrange
        // Act
        // Assert
    });

});
```

## Naming Conventions

### Test IDs
- Format: `TC_<MODULE>_<3-digit-number>`
- Examples: `TC_LOGIN_001`, `TC_DASH_003`, `TC_NAV_012`, `TC_API_001`
- IDs must be unique across the entire test suite
- Use module abbreviations: LOGIN, DASH, NAV, FORGOT, PROFILE, REPORT, API, VISUAL

### Test Descriptions
- Start with the TC ID
- Follow with a clear, behavior-focused description
- Use format: `"TC_XXX_NNN - <action> <expected outcome>"`
- Good: `"TC_LOGIN_001 - valid credentials navigate to dashboard"`
- Bad: `"test login"` or `"it should work"`

### File Names
- Pattern: `<ModuleName>.spec.js`
- Use PascalCase for module name: `Login.spec.js`, `Dashboard.spec.js`, `ForgotPassword.spec.js`
- For data-driven: `LoginExcelDriven.spec.js`
- For role-specific: `<RoleName>_<Module>.spec.js` (e.g., `BEO_Login.spec.js`)

### Describe Blocks
- Group related tests in `test.describe("<Module> - <Section>", () => { ... })`
- Nest describe blocks for sub-sections when >10 tests in a file

## Import Rules

### Always Use Custom Fixtures
```javascript
// CORRECT
import { test, expect } from "../../../../src/fixtures/pageFixtures.js";

// WRONG - never import directly
import { test, expect } from "@playwright/test";
```

### Import Path Calculation
Count folder depth from spec file location to project root:
- `tests/e2e/Base_Testing/` → `../../../`
- `tests/e2e/TN_EMIS/Base_Testing/` → `../../../../`
- `tests/e2e/TN_EMIS/Block_User/<Role>/` → `../../../../../`
- `tests/e2e/TN_EMIS/Block_User/<Role>/<Module>/` → `../../../../../../`

### Data Imports
```javascript
// From barrel export
import { loginData, dashboardData, getRoleDashboardDataBySNo } from "<path>/data/index.js";

// For role-specific tests
const userData = getRoleDashboardDataBySNo("BEO", 1);
```

## Test Design Patterns

### Single-User Flow Test
```javascript
test("TC_LOGIN_001 - valid login navigates to dashboard", async ({ loginPage, dashboardPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.loginWithValidCredentials();
    await dashboardPage.verifyDashboard();
});
```

### Role-Based Test
```javascript
import { getRoleDashboardDataBySNo } from "<path>/data/index.js";

const USER_NUMBER = 1;
const userData = getRoleDashboardDataBySNo("BEO", USER_NUMBER);

test("TC_BEO_001 - BEO user can access dashboard", async ({ beoPage }) => {
    await beoPage.gotoLoginPage();
    await beoPage.login(userData.username, userData.password);
    await beoPage.verifyDashboard();
});
```

### Data-Driven Test (Excel)
```javascript
import { getLoginTestCases } from "<path>/src/helpers/ExcelReader.js";

const testCases = getLoginTestCases();

test.describe("Login Module - Data Driven", () => {
    for (const tc of testCases) {
        test(`${tc.TCID} - ${tc.Description}`, async ({ loginPage }) => {
            await loginPage.gotoLoginPage();
            await loginPage.login(tc.Username, tc.Password);
            // Assert based on tc.ExpectedResult
        });
    }
});
```

### API Test
```javascript
import { test, expect } from "@playwright/test";  // API tests CAN use direct import
import { currentEnv } from "<path>/config/index.js";

test.describe("API - <Endpoint>", () => {
    test("TC_API_001 - GET returns 200", async ({ request }) => {
        const response = await request.get(`${currentEnv.apiBaseURL}/endpoint`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toHaveProperty("data");
    });
});
```

## Assertions Best Practices

### Prefer Specific Assertions
```javascript
// GOOD - specific and descriptive
await expect(page).toHaveURL(/dashboard/);
await expect(element).toBeVisible();
await expect(element).toHaveText("Expected Text");
await expect(element).toHaveAttribute("class", /active/);

// AVOID - generic boolean checks
expect(await element.isVisible()).toBe(true);
```

### Wait Before Assert (when needed)
```javascript
// When page transitions are involved
await page.waitForLoadState("networkidle");
await expect(page).toHaveURL(/dashboard/);
```

### Soft Assertions (for non-blocking checks)
```javascript
// Use when you want to continue checking after a failure
await expect.soft(element1).toBeVisible();
await expect.soft(element2).toHaveText("value");
```

## Test Data Rules

1. NEVER hard-code credentials in spec files
2. NEVER hard-code URLs — use config imports
3. Use Excel data for user credentials and test inputs
4. Use `data/index.js` barrel export for clean imports
5. For environment-specific data, the ExcelReader resolves automatically based on `TEST_ENV`

## Error Handling in Tests

### Expected Failures
```javascript
test("TC_LOGIN_005 - invalid password shows error", async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.loginWithInvalidPassword();
    // Assert error message is shown
    await expect(loginPage.errorMessage).toBeVisible();
});
```

### Cleanup with afterEach
```javascript
test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `test-results/failures/${testInfo.title}.png` });
    }
});
```

## Performance Guidelines

- Keep individual tests under 30 seconds (timeout is 60s staging, 90s production)
- Use `test.beforeAll` for expensive one-time setup (login state, data fetch)
- Avoid `page.waitForTimeout()` — use event-based waits instead
- Use `networkidle` wait only when absolutely necessary (it's slow)
- Prefer `domcontentloaded` or element visibility waits

## Allure Reporting Integration

When tests are for critical paths or need traceability:

```javascript
test("TC_LOGIN_001 - valid login", async ({ loginPage }) => {
    // Add Allure metadata via test.info()
    test.info().annotations.push(
        { type: "severity", description: "critical" },
        { type: "feature", description: "Authentication" },
        { type: "story", description: "Login Flow" }
    );

    await loginPage.gotoLoginPage();
    await loginPage.loginWithValidCredentials();
});
```

## Forbidden Patterns

- `test.only(...)` — breaks CI (`forbidOnly: true`)
- `require(...)` — use ES Module `import` only
- Hard-coded `http://` or `https://` URLs in test bodies
- Raw selectors (`page.locator('//xpath...')`) in spec files — use page objects
- `console.log` spam — use sparingly for meaningful progress markers only
- `test.skip(...)` without a comment explaining why
- Nested `test()` calls inside other `test()` calls
