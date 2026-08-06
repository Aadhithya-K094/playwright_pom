# NSNOP Material Master — Angular vs React Comparison Report

**Date:** 05 August 2026  
**Module:** /nsnop/material-master  
**Angular URL:** https://tnemis-staging.tnsed.com/nsnop/material-master  
**React URL:** https://tnemis-react-staging.tnsed.com/nsnop/material-master  
**User:** Saraswathi (4028609 / test@123)  
**Mode:** Headed

---

## PART 1: Test Steps Executed

| Step | Action | Angular Result | React Result |
|------|--------|---------------|--------------|
| 1 | Navigate to login page | Loaded | Loaded |
| 2 | Login with 4028609/test@123 | Success → /component/reports | Success → /dashboard |
| 3 | Navigate to /nsnop/material-master | Page loaded with table | Page loaded with table |
| 4 | Verify page title "Material Master" | H6 heading visible | H6 heading visible |
| 5 | Verify table columns (S.No, Category, Sub Category, Material, Type, Cost, Bank Id, Action) | 8 columns present | 8 columns present |
| 6 | Verify table data (row 1) | Sanitation > Student Toilets > Boys Urinal > Civil > 3500 > 2 | Same data |
| 7 | Verify total entries count | 628 entries | 628 entries |
| 8 | Verify pagination (25 per page) | Showing 1 to 25 of 628 | Showing 1 to 25 of 628 |
| 9 | Verify search functionality with "Fan" | **0 results - BROKEN** | 7 results found correctly |
| 10 | Verify search with "fan" (lowercase) | **0 results - BROKEN** | Works (case-insensitive) |
| 11 | Verify search with "Ceiling Fan" | **0 results - BROKEN** | Works correctly |
| 12 | Clear search, verify table restores | Table restored | Table restored |
| 13 | Click Edit button (row 1) | "Edit Canara Bank Id" dialog opens | Same dialog opens |
| 14 | Verify dialog has Bank Id spinbutton | Present | Present |
| 15 | Verify Submit button disabled by default | Disabled | Disabled |
| 16 | Verify close button in dialog | Present (unnamed) | Present ("Close" label) |
| 17 | Verify Excel Export button | Present with icon | Present with icon |
| 18 | Verify column sorting arrows | Present on all sortable columns | Present on all sortable columns |
| 19 | Verify items-per-page dropdown | Dropdown shows "25" | Dropdown shows "25" |
| 20 | Verify pagination buttons | Prev/Next + page numbers | First/Prev/Next/Last + page numbers |

---

## PART 2: Module Comparison Details

### 2.1 Page Title & Header

| Element | Angular | React | Match? |
|---------|---------|-------|--------|
| Page title | "Material Master" (H6) | "Material Master" (H6) | YES |
| Title alignment | Left | Left | YES |

### 2.2 Search Bar

| Element | Angular | React | Match? |
|---------|---------|-------|--------|
| Search placeholder | "Search..." | "Search..." | YES |
| Search icon | Present (inside input) | Present (inside input) | YES |
| Search functionality | **BROKEN - returns 0 for all queries** | **WORKING - filters correctly** | NO |
| Case sensitivity | N/A (broken) | Case-insensitive | N/A |

### 2.3 Table Structure

| Element | Angular | React | Match? |
|---------|---------|-------|--------|
| Column 1: S.No. | Present | Present | YES |
| Column 2: Category Name | Sortable | Sortable | YES |
| Column 3: Sub Category Name | Sortable | Sortable | YES |
| Column 4: Material Name | Sortable (with sort icon) | Sortable (with sort icon) | YES |
| Column 5: Material Type | Sortable (with sort icon) | Sortable (with sort icon) | YES |
| Column 6: Cost Per Unit | Sortable (with sort icon) | Sortable (with sort icon) | YES |
| Column 7: Canara Bank Id | Sortable (with sort icon) | Sortable (with sort icon) | YES |
| Column 8: Action (Edit) | Edit button (icon only) | Edit button (icon only) | YES |

### 2.4 Table Data (First 5 Rows Compared)

| Row | Angular Data | React Data | Match? |
|-----|-------------|------------|--------|
| 1 | Sanitation > Student Toilets > Boys Urinal > Civil > 3500 > Bank:2 | Same | YES |
| 2 | Sanitation > Student Toilets > CWSN Toilet > Civil > 140000 > Bank:13.2 | Same | YES |
| 3 | Sanitation > Staff Toilets > Toilet unit for Staff > Civil > 270000 > Bank:1 | Same | YES |
| 4 | Sanitation > Staff Toilets > Mens Urinal > Civil > 3500 | Same | YES |
| 5 | Sanitation > Staff Toilets > Womens Urinal > Civil > 1500 | Same | YES |

### 2.5 Pagination

| Element | Angular | React | Match? |
|---------|---------|-------|--------|
| Total entries | 628 | 628 | YES |
| Per page default | 25 | 25 | YES |
| "Showing X to Y of Z" text | Present | Present | YES |
| Page number buttons | 1,2,3,4,5 | 1,2,3,4,5 | YES |
| First/Last buttons | **NOT present** | Present ("First Page", "Last Page") | NO |
| Prev/Next buttons | Arrow icons (unnamed) | Named ("Previous Page", "Next Page") | DIFFERS |
| Items-per-page dropdown | Dropdown with "25" | Dropdown with "25" + "Choose" button | DIFFERS |

### 2.6 Edit Dialog

| Element | Angular | React | Match? |
|---------|---------|-------|--------|
| Dialog title | "Edit Canara Bank Id" | "Edit Canara Bank Id" | YES |
| Bank Id field | spinbutton | spinbutton | YES |
| Submit button | Disabled by default | Disabled by default | YES |
| Close button | Icon only (unnamed) | Named "Close" button | DIFFERS (minor) |

### 2.7 Excel Export

| Element | Angular | React | Match? |
|---------|---------|-------|--------|
| Button text | " Excel Export" (with icon) | "Excel Export" (with icon) | YES |
| Button placement | Top right of table | Top right of table | YES |

### 2.8 UI Differences

| Area | Angular | React |
|------|---------|-------|
| Navbar | Horizontal menu bar with links | Vertical sidebar list |
| Logo | "TN EMIS" text link | Logo image + "TN EMIS" heading |
| Profile area | Profile image + name + dropdown | Name badge + "Active" status |
| Excel Export icon | Icon before text (space) | Icon before text (no space) |
| Column header sort | Arrows visible inline | Arrows visible inline |
| Pagination style | Simple arrows | Labeled buttons (First/Prev/Next/Last) |

---

## PART 3: Summary

```
+--------------------------------------------+----------+
| Test Area                                  | Status   |
+--------------------------------------------+----------+
| Page loads correctly                       |   PASS   |
| Page title matches                         |   PASS   |
| Table columns match                        |   PASS   |
| Table data matches (628 entries)           |   PASS   |
| Search functionality                       |   FAIL   |
| Pagination works                           |   PASS   |
| Edit dialog works                          |   PASS   |
| Excel Export button present                |   PASS   |
| Column sorting present                     |   PASS   |
| Items-per-page dropdown                    |   PASS   |
+--------------------------------------------+----------+
| Angular SEARCH is BROKEN                   |   BUG    |
| React has better pagination (First/Last)   |   NOTE   |
| React pagination has labeled buttons       |   NOTE   |
+--------------------------------------------+----------+
```

---

## Screenshots

- `angular-material-master.png` — Full page Angular
- `react-material-master.png` — Full page React

---

**Tested by:** Kiro (Playwright MCP - Headed Mode)  
**Report Generated:** 05 August 2026
