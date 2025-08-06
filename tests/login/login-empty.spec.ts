import {expect, test} from "@playwright/test";
import {resetDatabase} from "../helpers/test-setup";

//TODO: This can be removed once the pipelines are corrected. Data must remain isolated for testing.
test.beforeEach(async () => {
    await resetDatabase();
});

test('Login empty fields show native validation', async ({ page }) => {
    await page.goto('/adminpanel/login');

    const emailValid = await page.$eval('input[name="email"]', el => (el as HTMLInputElement).checkValidity());
    const passwordValid = await page.$eval('input[name="password"]', el => (el as HTMLInputElement).checkValidity());

    expect(emailValid).toBe(false);
    expect(passwordValid).toBe(false);

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/\/adminpanel\/login/);
});
