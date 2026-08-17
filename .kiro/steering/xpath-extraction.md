---
inclusion: manual
---

# XPath Extraction Guide

Rules and techniques for extracting reliable relative XPaths from any website using Playwright MCP browser tools.

## Quick Reference: XPath Selector Priority

| Priority | Strategy | Example | Stability |
|----------|----------|---------|-----------|
| 1 | `data-testid` | `//button[@data-testid="submit-btn"]` | Highest |
| 2 | `id` attribute | `//input[@id="loginUsername"]` | High |
| 3 | `role` + name | `//button[@role="button" and contains(text(),"Login")]` | High |
| 4 | Unique attribute | `//input[@placeholder="Search keyword"]` | Medium-High |
| 5 | Class + text | `//span[@class="submenu-label" and contains(text(),"Approvals")]` | Medium |
| 6 | Parent > child | `//div[@class="submenu-item"]//span[contains(text(),"Transfer")]` | Medium |
| 7 | Positional | `(//button[@type="submit"])[1]` | Low |

## XPath Patterns for Common Elements

### Buttons
```xpath
//button[contains(text(),"Submit")]
//button[@type="submit"]
//button[contains(@class,"btn-primary")]
//button[@data-testid="submit-btn"]
```

### Input Fields
```xpath
//input[@id="fieldName"]
//input[@placeholder="Enter value"]
//input[@type="email"]
//input[@name="username"]
```

### Links/Navigation
```xpath
//a[contains(text(),"Menu Name")]
//a[@href="/path/to/page"]
//span[@class="menu-title" and contains(text(),"Approvals")]
```

### Dropdowns (PrimeNG)
```xpath
//p-dropdown[@placeholder="Select Type"]
//p-dropdown[@placeholder="Select Type"]//input[@role="combobox"]
//li[contains(@class,"p-dropdown-item")]//span[contains(text(),"Option")]
```

### Tables (PrimeNG DataTable)
```xpath
//table[contains(@class,"p-datatable-table")]
//table[contains(@class,"p-datatable-table")]//thead
//table[contains(@class,"p-datatable-table")]//tbody
//th[@psortablecolumn="columnName"]
//td[contains(@class,"text-center")]
```

### Pagination
```xpath
//div[contains(@class,"p-paginator")]
//button[contains(@class,"p-paginator-next")]
//button[contains(@class,"p-paginator-prev")]
//span[contains(@class,"p-paginator-current")]
```

### Modals/Dialogs
```xpath
//div[contains(@class,"p-dialog")]
//div[@role="dialog"]
//div[contains(@class,"modal-content")]
```

## Verification Script

Always run this to confirm XPath uniqueness:

```javascript
// In browser_evaluate:
() => {
    const xpaths = {
        elementName: "//your/xpath/here",
        anotherElement: "//another/xpath"
    };
    const results = {};
    for (const [name, xpath] of Object.entries(xpaths)) {
        const snap = document.evaluate(
            xpath, document, null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null
        );
        results[name] = {
            xpath,
            matchCount: snap.snapshotLength,
            text: snap.snapshotLength > 0
                ? snap.snapshotItem(0).textContent?.trim()?.substring(0, 50)
                : null
        };
    }
    return results;
}
```

## TNEMIS-Specific Patterns

### Angular App Selectors
- Menu items: `//span[@class="menu-title" and contains(text(),"Name")]`
- Submenu items: `//a[contains(@class,"nav-link")]//span[text()="Item Name"]`
- Profile: `//a[contains(@class,"dropdown-toggle")]`
- Logout: `//i[contains(@class,"icon-log-out")]`

### React App Selectors
- Menu items: `//span[contains(@class,"nav-link emis-link")]`
- Submenu items: `//span[@class="submenu-label" and contains(text(),"Name")]`
- Profile: `//div[contains(@class,"user-trigger")]`
- Logout: `//button[contains(text(),"Log Out")]`

### Module Navigation Pattern
```xpath
// Click main menu first:
//span[@class="submenu-label" and contains(text(),"Approvals")]

// Then click submenu:
//span[@class="submenu-label" and contains(text(),"Deputation and Admin Transfer")]
```

## Output Format for Locator Files

When creating locator files for this project, structure as:

```javascript
const moduleLocators = {
    staging: {
        angular: {
            elementName: '//xpath-for-angular-staging',
        },
        react: {
            elementName: '//xpath-for-react-staging',
        }
    },
    production: {
        angular: {
            elementName: '//xpath-for-angular-production',
        },
        react: {
            elementName: '//xpath-for-react-production',
        }
    }
};
```

## Troubleshooting

### Element Not Found
1. Check if element is inside an iframe - switch context
2. Check if element loads lazily - add wait
3. Check if element is hidden - scroll or hover to reveal
4. Check if element is in a shadow DOM - use JS to pierce

### Multiple Matches
1. Add more specific attributes
2. Use ancestor context: `//div[@id="specific"]//button[text()="Submit"]`
3. Use position as last resort: `(//button[text()="Submit"])[2]`

### Dynamic Classes
- Angular: Ignore `_ngcontent-xxx-cXXX` attributes
- React: Ignore `css-XXXXX` generated class hashes
- Use `contains(@class,"stable-part")` for partial matching

### Elements That Change Between Environments
- Extract from BOTH staging and production
- Note differences in the locator file comments
- Use the same key name but different XPath values per environment
