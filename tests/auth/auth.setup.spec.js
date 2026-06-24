import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {

    await page.goto('https://eventhub.rahulshettyacademy.com');

    await page.locator('#email')
        .fill('anubhutikaur9@gmail.com');

    await page.locator('#password')
        .fill('AnubhutiKaur$$96');

    await page.locator('#login-btn')
        .click();

    await expect(page.locator('//h1[contains(@class,"tracking-tight")]')).toBeVisible();

    await page.context().storageState({
        path: '.auth/user.json'
    });
});