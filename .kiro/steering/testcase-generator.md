---
name: Test Case Generator
description: Rules for generating test cases in Excel format with positive and negative coverage
inclusion: auto
---

# Test Case Generator - Steering Rules

## Purpose
Generate structured test cases in Excel (.xlsx) format for any module with comprehensive positive and negative coverage.

## Output Location
All generated Excel files go to: data/TestCase/

## File Naming
- File: data/TestCase/{Module}TestCases.xlsx
- Sheet: {Module}Cases
- TCID: TC_{MODULE}_{NNN}

## Excel Columns (Required)
- TCID - Unique ID like TC_LOGIN_001
- Module - Feature name like Login
- Description - What the test verifies
- Preconditions - Setup needed
- Steps - Numbered action steps
- TestData - Input data used
- ExpectedResult - What should happen
- Priority - High / Medium / Low
- Type - Positive / Negative / Boundary / Security
- Status - To execute / Pass / Fail / Blocked

## Coverage Rules
- Every scenario MUST have both positive and negative test cases
- Target ratio: 40% Positive, 35% Negative, 15% Boundary, 10% Security
- Minimum 15-25 test cases per module
- For every positive case, write at least 1-3 negative variants

## Generation Method
Use PowerShell heredoc + Node.js script with xlsx package. Save to data/TestCase/ folder. Clean up temp files after.

## After Generation - Always Report
- File path where saved
- Total count with breakdown (positive + negative + boundary + security)
- Remind about Office Viewer extension (cweijan.vscode-office)
- Offer to create matching data-driven Playwright spec

## Available Modules
Login, Dashboard, ForgotPassword, Approvals, Reports, EMIS Tickets, Staff Grievance, IFHRMS, Material Master, Home, Component

## User Roles
BEO, BEO1, BRC Senior Officer, HM, School users, Teachers
