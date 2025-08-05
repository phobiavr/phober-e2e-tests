import { request } from '@playwright/test';

export async function resetDatabase() {
    const requestContext = await request.newContext();
    const response = await requestContext.get('/db-reset');

    if (!response.ok()) {
        throw new Error(`Failed to reset database: ${response.status()}`);
    }
    await requestContext.dispose();
}