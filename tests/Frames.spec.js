import { test, expect } from '@playwright/test';

test('Learning how frames work in playwright', async ({page}) => {
    //Printing number of rows and columns in the table
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const frame = page.frameLocator('#courses-iframe');

    const viewAllCoursesButton = frame.getByRole('link', { name: 'VIEW ALL COURSES' });
    await viewAllCoursesButton.click();
    const searchBox = frame.locator('input[type="search"]');
    await expect(searchBox).toBeVisible();
    await searchBox.fill('Selenium');
    await searchBox.press('Enter');

    const seleniumCourse = frame.locator("//div[@data-sentry-element='CardHeader']/h2").filter({ hasText: "Selenium" });
    await expect(seleniumCourse.first()).toContainText("Selenium");
});