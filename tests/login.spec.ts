import { test, expect } from '@playwright/test';
import {login} from "./helpers/auth";

test('Admin panel login', async ({ page }) => {
    await login(page);

    await expect(page).toHaveURL(/main/);
});
