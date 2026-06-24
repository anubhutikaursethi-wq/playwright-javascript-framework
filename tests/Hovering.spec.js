import { test, expect } from '@playwright/test';

test('Learning how to hover with playwright', async ({page}) => {
    //Printing number of rows and columns in the table
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const mouseHoverButton = page.getByRole('button',{name:'Mouse Hover'});
    await mouseHoverButton.hover();

    const topButton = page.getByRole('link',{name:'Top'});
    await topButton.click();
    const scrollPosition = await page.evaluate(() => window.scrollY);
    expect(scrollPosition).toBeLessThan(10);
});