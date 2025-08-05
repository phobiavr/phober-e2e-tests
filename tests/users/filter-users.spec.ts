import { test } from '@playwright/test';
import { login } from '../helpers/auth';

test('Filter users', async ({ page }) => {
    await login(page);

    await page.getByRole('link', { name: 'Users', exact: true }).click();

    const searchbox = page.getByRole('searchbox', { name: 'Search' });
    await searchbox.fill('member');

    await searchbox.press('Enter');
});
