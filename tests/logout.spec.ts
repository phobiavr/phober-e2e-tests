import { test, expect } from '@playwright/test';
import {login} from "./helpers/auth";
import {resetDatabase} from "./helpers/test-setup";

//TODO: This can be removed once the pipelines are corrected. Data must remain isolated for testing.
test.beforeEach(async () => {
    await resetDatabase();
});

test('should logout successfully', async ({ page }) => {
    await login(page);

    await expect(page).toHaveURL('https://main-server-2.de/adminpanel/dashboards/main');

    await page.getByRole('button', { name: "Hikmat Abdukhaligov's Avatar" }).click();

    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept();
    });

    await page.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL("https://main-server-2.de/adminpanel/login");
});
