import { test } from '@playwright/test';
import {login} from "../helpers/auth";
import {resetDatabase} from "../helpers/test-setup";

//TODO: This can be removed once the pipelines are corrected. Data must remain isolated for testing.
test.beforeEach(async () => {
    await resetDatabase();
});

test('Admin panel login', async ({ page }) => {
    await login(page);
});