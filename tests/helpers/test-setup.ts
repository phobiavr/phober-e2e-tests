import { request } from '@playwright/test';

export async function resetDatabase() {
    const requestContext = await request.newContext();
    await requestContext.get('/db-reset');

    await requestContext.dispose();
}