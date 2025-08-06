# Phober E2E Tests

A Playwright-based end-to-end testing suite for the Phober Admin Panel.  
These tests perform tasks like user creation, deletion, login/logout flows, and employee management using real browser automation.

## 📦 Setup Instructions

1. **Clone the repository**  
   Run the following command:
   ```bash
   git clone https://github.com/phobiavr/phober-e2e-tests.git
   cd phober-e2e-tests
   ```

2. **Install dependencies**  
   Run the following command in your project directory:
   ```bash
   npm install
   ```
   
3. **Install Playwright browsers**  
   After installing dependencies, you need to install the required browsers for Playwright:
   ```bash
   npx playwright install
   ```

4. **Configure environment variables**  
   If your tests require environment variables, create a `.env` file in the root directory and add the necessary variables.

## 🚀 Running Tests

To execute all tests, use:
```bash
  npx playwright test
```

To run a specific test file:
```bash
  npx playwright test tests/login.spec.ts
```

## 📊 View Test Report
**Open Playwright Test Report**

After running tests, view the report with:
```bash
  npx playwright show-report
```

Generate and open the report after test run:
```bash
  npx playwright test
  npx playwright show-report
```

To run tests without opening a browser window, use:
```bash
  npx playwright test --headed
```

To run tests in a specific browser, use the `--browser` flag:
```bash
  npx playwright test --browser=chromium
```
Supported browsers: `chromium`, `firefox`, `webkit`.


## 🧪 Test Structure
- All tests are located in the `tests/` folder.
- Common setup (like DB reset) can be added to `test.beforeEach()` hooks.
- Utilities like user creation or database resets are in the `utils/` directory.

| Test Feature            | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| ✏️  Create User         | Verify user appears in user list                     |
| 🗑️  Delete User        | Remove a specific user and verify removal            |
| 👤  Login / Logout      | Test UI login and logout behavior                    |
| 👥  Employee Management | Create, filter by name/ID, edit, or delete employees |

## 🔁 Resetting the Database
Each test can reset the database before execution by including:

```ts
test.beforeEach(async () => {
  await resetDatabase();
});
```
This ensures isolated and repeatable test cases.

⚠️ Can be removed once pipelines correctly isolate data for testing

## 📁 Folder Structure

The project is organized as follows:

```
phober-e2e-tests/
├── package.json
├── playwright.config.ts
├── README.md
├── tsconfig.json
├── tests/
│   ├── login.spec.ts
│   ├── logout.spec.ts
│   ├── helpers/
│   │   ├── auth.ts
│   │   └── test-setup.ts
│   ├── users/
│   │   ├── create-user.spec.ts
│   │   ├── delete-user.spec.ts
│   │   └── filter-users.spec.ts
```

## 🙋‍♀️ Contributing
We welcome contributions! Please open issues or submit pull requests for improvements or bug fixes.