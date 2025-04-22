
```markdown
# 🧪 Cypress_POM_Tests

![GitHub repo size](https://img.shields.io/github/repo-size/HripsimeManukyan/Cypress_POM_Tests)
![GitHub last commit](https://img.shields.io/github/last-commit/HripsimeManukyan/Cypress_POM_Tests)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/HripsimeManukyan/Cypress_POM_Tests/cypress)
![Node.js CI](https://img.shields.io/badge/tested%20with-Cypress-3e8ddd.svg)
![License](https://img.shields.io/badge/license-MIT-green)

This repository contains **automated end-to-end tests** for the [Demoblaze](https://demoblaze.com) web application using **Cypress** and the **Page Object Model (POM)** design pattern.  
The tests validate key user workflows such as **logging in** and **adding products to the cart**.

---

## 📁 Project Structure

```
Cypress_POM_Tests/
├── cypress/
│   └── e2e/
│       ├── addToCart_test.cy.js   # POM-based tests for Add-to-Cart functionality
│       └── login_test.cy.js       # POM-based tests for Login workflow
├── cypress.config.js              # Cypress configuration file
├── package.json                   # NPM dependencies and scripts
└── package-lock.json              # Auto-generated dependency lock file
```

---

## ✅ Test Coverage

- **🔐 Login Workflow**
  - Valid login with correct credentials
  - Invalid login error handling
  - Validation of required fields

- **🛒 Add-to-Cart Workflow**
  - Adding a single product to cart
  - Adding multiple products
  - Verifying cart content after actions

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine
- Basic understanding of Cypress and POM design

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/Cypress_POM_Tests.git
cd Cypress_POM_Tests
npm install
```

### Run Tests

```bash
npx cypress open   # Opens Cypress in interactive mode
npx cypress run    # Executes tests in headless mode
```

---

## 🧱 Page Object Model (POM)

The tests follow the **Page Object Model** pattern for better reusability and maintainability.  
Each page action or element is defined in separate page classes (not visible in the current screenshots, but assumed to be part of the full setup).

---

## 👩‍💻 Author

- **Hripsime Manukyan**  
  *QA Engineer | Cypress Automation | Page Object Model Design*

---

## 📌 License

This project is licensed for personal and educational use.  
For commercial usage, please contact the author.
```

---

