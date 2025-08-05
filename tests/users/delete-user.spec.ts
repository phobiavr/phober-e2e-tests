import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';
import { resetDatabase } from '../helpers/test-setup';

test.beforeEach(async () => {
    await resetDatabase();
});

test('Delete specific user by username', async ({ page }) => {
    const targetUsername = 'member-3';

    await login(page);
    await page.getByRole('link', { name: 'Users', exact: true }).click();

    // Locate the row before deletion to confirm it exists
    const userRowBefore = page.getByRole('row', { name: new RegExp(targetUsername, 'i') });
    await expect(userRowBefore).toHaveCount(1);

    await userRowBefore.getByLabel('Delete').click();
    await page.getByRole('alertdialog').getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(1000);

    const userRowAfter = page.getByRole('row', { name: new RegExp(targetUsername, 'i') });
    await expect(userRowAfter).toHaveCount(0);
});
