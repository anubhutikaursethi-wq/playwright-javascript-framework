import { test, expect } from '@playwright/test';

test('Screenshots', async ({page}) => {
    //Printing number of rows and columns in the table
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //full page screenshot
    await page.screenshot({path: 'screenshots/fullPage.png', fullPage: true});

    //webElement screenshot
    const dynamicSuggestionsInputBox =  page.locator("input[id='autocomplete']");
    const allDropdownOptions = page.locator('//ul/li/div[contains(@id,"ui-id")]');

    await dynamicSuggestionsInputBox.fill('Ind');
    await expect(allDropdownOptions.first()).toBeVisible();
    const optionNames = await allDropdownOptions.allTextContents();
    await console.log(optionNames);

    //Lets select India now
    await allDropdownOptions.filter({hasText: /^India$/}).click();
    await dynamicSuggestionsInputBox.screenshot({path: 'screenshots/webElement.png'});

    //iFrame Screenshot
    const frame = page.locator('#courses-iframe');
    await frame.screenshot({path: 'screenshots/iFrame.png'});
});