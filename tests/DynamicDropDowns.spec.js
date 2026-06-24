import { test, expect } from '@playwright/test';

test('Handling dynamic suggestions', async ({page}) => {
    //Printing number of rows and columns in the table
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const dynamicSuggestionsInputBox =  page.locator("input[id='autocomplete']");
    const allDropdownOptions = page.locator('//ul/li/div[contains(@id,"ui-id")]');

    await dynamicSuggestionsInputBox.fill('Ind');
    await expect(allDropdownOptions.first()).toBeVisible();
    const optionNames = await allDropdownOptions.allTextContents();
    await console.log(optionNames);

    //Lets select India now
    await allDropdownOptions.filter({hasText: /^India$/}).click();

    //Lets validate whether India is selected successfully
    await expect(dynamicSuggestionsInputBox).toHaveValue("India");
});