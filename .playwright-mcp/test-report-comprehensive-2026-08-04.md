# Mail Request Module - Comprehensive Test Report

**Date:** 04 August 2026  
**App:** TN EMIS (React Staging)  
**URL:** https://tnemis-react-staging.tnsed.com  
**User:** test hr (4583922)  
**Mode:** Headed (Browser Visible)  
**Total Tests:** 10 | **Passed:** 9 | **Bug Found:** 1

---

## Test Results Summary

```
+----+----------------------------------------------------------+----------+--------+
| TC | Description                                              | Type     | Result |
+----+----------------------------------------------------------+----------+--------+
|  1 | Submit valid mail request with all fields                | Positive |  PASS  |
|  2 | Submit with empty form (no fields)                       | Negative |  PASS  |
|  3 | Submit with only First Name filled                       | Negative |  PASS  |
|  4 | Submit with invalid phone (less than 10 digits)          | Negative |  PASS  |
|  5 | Submit with invalid preferred mail (not @tnschools)      | Negative |  PASS  |
|  6 | Submit with invalid secondary email format               | Negative |  BUG   |
|  7 | Submit with only mandatory fields (no optional fields)   | Positive |  PASS  |
|  8 | Submit with special characters in name fields            | Negative |  PASS  |
|  9 | Verify Clear button resets the form                      | Positive |  PASS  |
| 10 | Logout                                                   | Positive |  PASS  |
+----+----------------------------------------------------------+----------+--------+
```

---

## Detailed Test Cases

### TC1: Valid Mail Request (POSITIVE) - PASS

| Field | Value |
|-------|-------|
| First Name | Rajan |
| Last Name | Kumar |
| Phone | 9876501234 |
| Secondary Mail | rajan.kumar@gmail.com |
| Preferred Mail | rajan.kumar@tnschools.gov.in |
| Remarks | test |

**Result:** Submitted successfully. Appeared as Row 1 in table. Track count: 65 → 66.

---

### TC2: Empty Form Submit (NEGATIVE) - PASS

**Action:** Clicked Submit Request with all fields empty.

**Validation Errors Shown:**
- "First Name is required (min 2 characters)"
- "Last Name is required"
- "Phone number is required"
- "Preferred Mail ID is required"

**Result:** Form blocked. No submission occurred.

---

### TC3: Only First Name Filled (NEGATIVE) - PASS

**Action:** Filled only "TestOnly" in First Name, clicked Submit.

**Validation Errors Shown:**
- "Last Name is required"
- "Phone number is required"
- "Preferred Mail ID is required"

**Result:** Form blocked. Partial data not accepted.

---

### TC4: Invalid Phone Number (NEGATIVE) - PASS

| Field | Value |
|-------|-------|
| First Name | Test |
| Last Name | Phone |
| Phone | 12345 (only 5 digits) |
| Preferred Mail | test.phone@tnschools.gov.in |

**Validation Error:** "Phone number is required" (rejects < 10 digits)

**Result:** Form blocked. Short phone number rejected.

---

### TC5: Invalid Preferred Mail Domain (NEGATIVE) - PASS

| Field | Value |
|-------|-------|
| First Name | Test |
| Last Name | InvalidMail |
| Phone | 9876543210 |
| Preferred Mail | test@gmail.com |

**Validation Error:** "Must end with @tnschools.gov.in"

**Result:** Form blocked. Non-tnschools domain rejected.

---

### TC6: Invalid Secondary Email Format (NEGATIVE) - BUG FOUND

| Field | Value |
|-------|-------|
| First Name | Test |
| Last Name | SecMail |
| Phone | 9876543210 |
| Secondary Mail | invalid-email-format |
| Preferred Mail | test.secmail@tnschools.gov.in |

**Expected:** Validation error for invalid email format  
**Actual:** NO error message displayed, but form silently does NOT submit

**Bug:** The secondary mail field accepts "invalid-email-format" without showing any validation error to the user. The form just doesn't submit — user has no feedback on what's wrong.

**Severity:** Medium  
**Impact:** Poor user experience — user doesn't know why form isn't submitting.

---

### TC7: Mandatory Fields Only (POSITIVE) - PASS

| Field | Value |
|-------|-------|
| First Name | Mandatory |
| Last Name | Only |
| Phone | 8765432109 |
| Secondary Mail | (empty) |
| Preferred Mail | mandatory.only@tnschools.gov.in |
| Remarks | (empty) |

**Result:** Submitted successfully. Appeared in table. Track count: 66 → 67.
**Note:** Secondary Mail and Remarks are truly optional.

---

### TC8: Special Characters in Name (NEGATIVE) - PASS

| Field | Value |
|-------|-------|
| First Name | @#$%^&* |
| Last Name | !@#$ |
| Phone | 9876543211 |
| Preferred Mail | special.char@tnschools.gov.in |

**Validation Errors:**
- "First Name is required (min 2 characters)"
- "Last Name is required"

**Result:** Form blocked. Special characters are stripped/rejected from name fields.

---

### TC9: Clear Button (POSITIVE) - PASS

**Action:** Filled all fields, then clicked "Clear" button.

**Result:** All fields reset to empty. No data remained in the form.

---

### TC10: Logout (POSITIVE) - PASS

**Action:** Clicked avatar → Log Out

**Result:** Redirected to login page successfully.

---

## Bugs Found

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| 1 | No validation error for invalid secondary email | Medium | When entering an invalid email format (e.g., "invalid-email-format") in the Secondary Mail field, no error message is shown to the user. The form silently refuses to submit without any feedback. |

---

## Validation Rules Discovered

| Field | Required | Validation |
|-------|----------|-----------|
| Request Type | Yes | Dropdown (New Mail default) |
| First Name | Yes | Min 2 characters, no special characters |
| Last Name | Yes | Required, no special characters |
| Phone Number | Yes | Must be exactly 10 digits |
| Secondary Mail | No | Must be valid email format (no error shown if invalid) |
| Preferred Mail | Yes | Must end with @tnschools.gov.in |
| Remarks | No | Free text, optional |

---

## Test Environment

- **Browser:** Chromium (Headed mode)
- **User:** test hr (4583922 / test@123)
- **Role:** HR
- **Starting Track Requests:** 65
- **Ending Track Requests:** 67 (2 successful submissions)
- **Duration:** ~10 minutes

---

**Tested by:** Kiro (Playwright MCP - Headed Mode)  
**Report Generated:** 04 August 2026
