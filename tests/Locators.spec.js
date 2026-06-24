import { test, expect } from '@playwright/test';

test('Title Validation',async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const title = await page.title();
    expect(title).toContain('Practice Page');
    console.log(title);
});

test('Locators Practice', async ({page}) => {
    //Verify if the radio button named Radio2 is checked
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const radio2 = page.locator("[value='radio2']");
    await radio2.check();
    await expect(radio2).toBeChecked();

    //Verify checkbox named Option2 is selected
    const option2 = page.locator("input[id='checkBoxOption2']");
    await option2.check();
    await expect(option2).toBeChecked();

    //Verify option2 in dropdown in selected
    const dropdownOption2 = page.locator("select[id*='dropdown']");
    await dropdownOption2.selectOption("option2");
    await expect(dropdownOption2).toHaveValue("option2");

    //Handling alerts
    const alertInputBox = page.locator("input[name='enter-name']");
    const alertButton = page.locator("input[id='alertbtn']");
    page.once('dialog', async dialog => {
    expect(dialog.message()).toContain("Anubhuti");
    await dialog.accept();
    });
    await alertInputBox.fill("Anubhuti");
    await alertButton.click();

    //Handling windows
    const context = page.context();
    const pagePromise = context.waitForEvent('page');
    await page.getByRole('button',{name: 'Open Window'}).click();
    const newWindow = await pagePromise;
    const newWindowTitle = newWindow.locator("[class='ParkwebGetDomain_getDomainTextDomain__QL4EZ']");
    await expect(newWindowTitle).toHaveText("qaclickacademy.com");

    //Handling tabs
    pagePromise = context.waitForEvent('page');
    await page.getByRole('button', {name: 'Open Tab'}).click();
    const newTab = await pagePromise;
    const newTabTitle = newTab.locator("[class='ParkwebGetDomain_getDomainTextDomain__QL4EZ']");
    await expect(newTabTitle).toHaveText("qaclickacademy.com");
});