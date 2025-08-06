import { test, expect } from '@playwright/test';
import {resetDatabase} from "../helpers/test-setup";

//TODO: This can be removed once the pipelines are corrected. Data must remain isolated for testing.
test.beforeEach(async () => {
    await resetDatabase();
});

test('Login fails with wrong password', async ({ page }) => {
    await page.goto('/adminpanel/login');

    await page.fill('input[name="email"]', 'admin@site.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    await expect(page.getByText(/These credentials do not match our record./i)).toBeVisible();
});
