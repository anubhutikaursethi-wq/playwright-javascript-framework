# Playwright Hybrid Automation Framework

A scalable end-to-end test automation framework built using Playwright and JavaScript, designed with modern automation engineering practices including API testing, UI testing, hybrid API + UI workflows, Page Object Model (POM), custom fixtures, dynamic test data generation, and Allure reporting.

---

## Overview

This framework demonstrates a production-style automation architecture that combines:

* UI Automation using Playwright
* API Automation using Playwright Request Context
* Hybrid API + UI Testing
* Page Object Model (POM)
* Custom Playwright Fixtures
* Storage State Authentication
* Dynamic Test Data using Faker
* API Abstraction Layer
* Allure Reporting

---

## Tech Stack

* Playwright
* JavaScript (ES6)
* Node.js
* Faker
* Allure Reports
* Git & GitHub

---

## Framework Architecture

```text
playwright-javascript-framework
│
├── api
│   ├── BaseAPI.js
│   └── EventAPI.js
│
├── fixtures
│   └── eventFixture.js
│
├── hooks
│   └── TestHooks.js
│
├── pages
│   ├── HomePage.js
│   └── ManageEventsPage.js
│
├── test-data
│   └── eventPayload.js
│
├── tests
│   ├── api
│   ├── hybrid
│   └── ui
│
├── .auth
├── playwright.config.js
├── package.json
└── README.md
```

---

## Features Implemented

### UI Automation

* Dynamic Dropdown Handling
* Tables and Web Elements
* iFrame Handling
* File Upload and Download
* Screenshots
* Auto Waits and Assertions

### API Automation

* Authentication APIs
* CRUD Operations
* Request Chaining
* Response Validation

### Hybrid API + UI Testing

Create data through API and validate through UI.

Example workflow:

```text
Create Event via API
        ↓
Open Application UI
        ↓
Validate Event Presence
        ↓
Delete Event via API
        ↓
Validate Event Removal in UI
```

### Framework Design

* Page Object Model (POM)
* Base API Layer
* Custom Fixtures
* Reusable Utilities
* Test Data Management

### Reporting

* Allure Reporting
* Failure Screenshots
* Detailed Execution Results

---

## Sample Test Scenarios

### Event CRUD Lifecycle

* Login
* Create Event
* Get Event
* Update Event
* Delete Event

### Hybrid Validation

* Create Event using API
* Navigate to Manage Events page
* Verify Event Exists
* Delete Event using API
* Verify Event Removed

---

## Installation

Clone Repository

```bash
git clone <repository-url>
```

Navigate to Project

```bash
cd playwright-javascript-framework
```

Install Dependencies

```bash
npm install
```

Install Playwright Browsers

```bash
npx playwright install
```

---

## Execute Tests

Run All Tests

```bash
npx playwright test
```

Run Specific Test

```bash
npx playwright test tests/EventCRUD.spec.js
```

Run in Headed Mode

```bash
npx playwright test --headed
```

---

## Allure Reporting

Generate Report

```bash
npx allure generate allure-results --clean
```

Open Report

```bash
npx allure open
```

---

## Design Principles Followed

* Separation of Concerns
* Reusability
* Maintainability
* Scalability
* Readable Test Design
* API and UI Layer Separation

---

## Future Enhancements

* GitHub Actions CI/CD
* Jenkins Integration
* Parallel Execution Strategy
* Cross Browser Execution
* Docker Support
* Accessibility Testing
* Visual Regression Testing

---

## Author

Anubhuti Kaur Sethi

Senior SDET | Lead Quality Engineer

Passionate about building scalable automation frameworks using modern testing practices.
