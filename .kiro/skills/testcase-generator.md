---
name: Test Case Generator
description: Skills for generating structured test cases in Excel format with full positive and negative coverage
inclusion: manual
---

# Test Case Generator Skills

## Skill: Generate Test Cases for a Module

When asked to generate test cases:

1. Read the existing spec file (if any) to understand current coverage
2. Design test cases covering ALL scenarios:
   - Positive cases (happy path for each feature)
   - Negative cases (invalid/empty/wrong input for each feature)
   - Boundary cases (max length, min length, edge values)
   - Security cases (SQL injection, XSS, unauthorized access)
3. Generate the Excel using this pattern:

### PowerShell command to generate:
Set-Content temp_gen.mjs with the script content, run with node, then Remove-Item temp_gen.mjs

### Script structure:
- import xlsx from xlsx
- Define testCases array with objects (TCID, Module, Description, Preconditions, Steps, TestData, ExpectedResult, Priority, Type, Status)
- Create workbook, sheet, set column widths
- Save to data/TestCase/{Module}TestCases.xlsx
- Log total count and breakdown

## Skill: Coverage Checklist

For Login module, always include:
- Valid login (positive)
- Invalid username (negative)
- Invalid password (negative)
- Both invalid (negative)
- Empty username (negative)
- Empty password (negative)
- Both empty (negative)
- Spaces only (negative)
- Special characters (boundary)
- Max length input (boundary)
- SQL injection (security)
- XSS attack (security)
- Brute force protection (security)
- Unauthorized URL access (security)
- Eye icon toggle (positive)
- Enter key submit (positive)
- Browser back after login (security)

For Dashboard module, always include:
- Dashboard loads after login (positive)
- All menus visible (positive)
- Logo displayed (positive)
- Logout works (positive)
- Direct URL without auth (negative/security)
- Invalid session (negative)
- Menu navigation works (positive)
- Each menu item clickable (positive)

## Skill: Create Data-Driven Spec from Excel

After generating Excel, offer to create a spec that reads from it:

1. Add reader function in ExcelReader.js
2. Write spec that loops over rows
3. Each row becomes its own test with TCID in the name
4. Assert based on ExpectedResult column

## Skill: Update Existing Test Cases

When asked to add more cases to an existing file:
1. Read the existing Excel file
2. Find the last TCID number
3. Continue numbering from there
4. Append new rows
5. Regenerate the file with all rows (old + new)
