import { test, expect } from '@playwright/test';

test.use({
    storageState: '.auth/user.json'
});

test('Verify login without entering credentials', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client');

    await expect(
        page.locator('.card-body').first()
    ).toBeVisible();

});