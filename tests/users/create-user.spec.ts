import { test, expect } from '@playwright/test';
import {login} from "../helpers/auth";

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
});