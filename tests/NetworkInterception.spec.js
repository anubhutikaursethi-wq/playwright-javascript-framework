import { test, expect } from '@playwright/test';

test('Network Interception', async ({page}) => {
   const email = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login');
    const productTitles = page.locator('.card-body');

    //Aborting the route will not let the specified image formats to load
    await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    //Login to the application
    await email.fill('anubhutikaursethi@gmail.com');
    await password.fill('Iamanubhuti@000');
    await loginButton.click();

    // Wait until products are visible
    await productTitles.first().waitFor();
    const allProducts = await productTitles.allTextContents();
    console.log(allProducts);
});

test('Network Interception To Modify Headers', async ({page}) => {
   const email = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login');
    const productTitles = page.locator('.card-body');

    //Modifying headers by network interception and adding a test header
    await page.route('**/*', route => route.continue({
        headers: {
            ...route.request().headers(),
            testHeader: 'Captain'
        }
    }));

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    //Login to the application
    await email.fill('anubhutikaursethi@gmail.com');
    await password.fill('Iamanubhuti@000');
    await loginButton.click();

    // Wait until products are visible
    await productTitles.first().waitFor();
    const allProducts = await productTitles.allTextContents();
    console.log(allProducts);
});

test('Modifying product name fetched from backend', async ({page}) => {
    const email = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login');
    const productTitles = page.locator('.card-body');

    await page.route(
        '**/api/ecom/product/get-all-products',
        async route => {
            const response =  await route.fetch();
            const body = await response.json();
            body.data[1].productName =
            "Captain Playwright";

            console.log(JSON.stringify(body, null, 2));

            await route.fulfill({
                response,
                json: body
            });
        }
    )

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    //Login to the application
    await email.fill('anubhutikaursethi@gmail.com');
    await password.fill('Iamanubhuti@000');
    await loginButton.click();

    // Wait until products are visible
    await productTitles.first().waitFor();
    await expect(productTitles.nth(1)).toContainText("Captain Playwright");
});