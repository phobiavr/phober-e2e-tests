import {expect, Page} from '@playwright/test';

export async function login(page: Page) {
    await page.goto('/adminpanel/login');

    await page.fill('input[name="email"]', 'admin@site.com');
    await page.fill('input[name="password"]', 'admin');
    await page.click('button[type="submit"]');

    await page.waitForURL('/adminpanel/dashboards/main');

    await expect(page).toHaveURL(/.*\/adminpanel\/dashboards\/main/);
}
