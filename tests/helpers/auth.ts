import { Page } from '@playwright/test';

export async function login(page: Page) {
    await page.goto('/adminpanel/dashboards/main');

    await page.fill('input[name="email"]', 'admin@site.com');
    await page.fill('input[name="password"]', 'admin');
    await page.click('button[type="submit"]');
}
