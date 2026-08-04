# E2E Test Report - Mail Request Module

**Date:** 04 August 2026  
**App:** TN EMIS (React Staging)  
**URL:** https://tnemis-react-staging.tnsed.com  
**Mode:** Headed (Browser Visible)  
**Result:** ALL TESTS PASSED

---

## What Was Tested

A complete mail request workflow:
1. HR user creates a new mail request
2. Admin user verifies the request is visible in their queue

---

## Test 1: Create Mail Request

**Login As:** test hr (4583922 / test@123)

| Step | What I Did | Result |
|------|-----------|--------|
| 1 | Opened login page and reloaded | Login page loaded |
| 2 | Entered username & password, clicked Login | Logged in, landed on Mail Request Portal |
| 3 | Checked if Mail Request module is there | "Mail Request Portal" heading visible |
| 4 | Clicked "New Request" | Form opened with all fields |
| 5 | Filled First Name: **Aadhi**, Last Name: **Thiya** | Done |
| 6 | Filled Phone: **9762745964**, Secondary Mail: **aadhi.test@gmail.com**, Preferred Mail: **aadhi.thiya2026@tnschools.gov.in** | Done |
| 7 | Added Remarks: **test** | Done |
| 8 | Clicked "Submit Request" | New entry appeared as Row 1 in table |
| 9 | Clicked avatar → Log Out | Back to login page |

### What Got Created

```
Name:          Aadhi Thiya
Type:          New Mail
Phone:         9762745964
Secondary:     aadhi.test@gmail.com
Official Mail: aadhi.thiya2026@tnschools.gov.in
Date:          04 Aug 2026
Status:        Pending
Remarks:       test
```

---

## Test 2: Verify in Admin Queue

**Login As:** Gunaseelan Peter S (4028619 / test@123)

| Step | What I Did | Result |
|------|-----------|--------|
| 1 | Logged in with admin credentials | Landed on "Mail Request Admin Queue" |
| 2 | Looked for "Aadhi Thiya" in the table | Found at Row 1 |
| 3 | Checked the status | **Pending** |
| 4 | Clicked avatar → Log Out | Back to login page |

### Admin Queue Stats

```
Pending:    59
Completed:   6
Total:      65
```

---

## Summary

```
+------------------------------------------+--------+
| Test Case                                | Status |
+------------------------------------------+--------+
| Login as HR user                         |  PASS  |
| Mail Request Portal visible              |  PASS  |
| Open New Request form                    |  PASS  |
| Fill all fields                          |  PASS  |
| Submit and verify in table               |  PASS  |
| Logout HR user                           |  PASS  |
| Login as Admin user                      |  PASS  |
| Verify request visible in admin queue    |  PASS  |
| Confirm status is Pending                |  PASS  |
| Logout Admin user                        |  PASS  |
+------------------------------------------+--------+
| TOTAL: 10/10 PASSED                      |  PASS  |
+------------------------------------------+--------+
```

---

## Issues Found

| # | Issue | Severity |
|---|-------|----------|
| 1 | Phone number validation - first attempt with a different number didn't submit | Low |
| 2 | DOM warning: missing `autocomplete` attribute on password field | Low (cosmetic) |

---

## Files Generated (in `.playwright-mcp/`)

- `console-2026-08-04T16-47-32-329Z.log` — HR session console logs
- `console-2026-08-04T16-55-50-058Z.log` — Admin session console logs
- `page-*.yml` — Page snapshots at each step (12 files)

---

**Tested by:** Kiro (Playwright MCP)  
**Duration:** ~6 minutes total
