import { test, expect, Page } from '@playwright/test';
import {login} from "../helpers/auth";
import {resetDatabase} from "../helpers/test-setup";

//TODO: This can be removed once the pipelines are corrected. Data must remain isolated for testing.
test.beforeEach(async () => {
    await resetDatabase();
});

export async function verifyUserExists(page: Page, email: string) {
    await page.goto('/adminpanel/resources/users');

    await page.waitForSelector('input[placeholder="Search"]');
    await page.fill('input[placeholder="Search"]', email);
    await page.press('input[placeholder="Search"]', 'Enter');

    const userRow = page.locator(`text=${email}`);
    await expect(userRow).toBeVisible();
}

test('Create new user', async ({ page }) => {
    const timestamp = Date.now();

    const username = `nermin${timestamp}`;
    const email = `nermin${timestamp}@site.az`;
    const firstName = `Nermin${timestamp}`;
    const lastName = `Gale${timestamp}`;

    await login(page);

    await page.getByRole('link', { name: 'Users', exact: true }).click();
    await page.getByRole('link', { name: 'Create User' }).click();

    await page.fill('#username-create-user-text-field', username);
    await page.fill('#first_name-create-user-text-field', firstName);
    await page.fill('#last_name-create-user-text-field', lastName);
    await page.fill('#email-create-user-text-field', email);
    await page.fill('#password-create-user-password-field', '12345678');

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/.*\/users/);
    await expect(page.getByText('The user was created')).toBeVisible();

    await verifyUserExists(page, email);
});