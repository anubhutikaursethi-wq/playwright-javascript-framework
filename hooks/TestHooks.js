import { test } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        const screenshotPath =
            `screenshots/${testInfo.title}.png`;

        await page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        await testInfo.attach(
            'Failure Screenshot',
            {
                path: screenshotPath,
                contentType: 'image/png'
            }
        );
    }
});