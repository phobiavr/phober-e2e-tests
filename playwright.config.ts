import { defineConfig } from '@playwright/test';

module.exports = defineConfig({
    workers: 1,
    use: {
        baseURL: 'https://main-server-2.de/adminpanel/dashboards/main',
        headless: false,
        screenshot: 'on',
        video: 'on',
    },
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});