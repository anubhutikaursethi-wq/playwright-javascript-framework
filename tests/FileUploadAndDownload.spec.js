import { test, expect } from '@playwright/test';

test('File Download', async ({page}) => {
    //Printing number of rows and columns in the table
    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
    const downloadPromise =  page.waitForEvent('download');
    await page.getByRole('button', {name: 'Download'}).click();
    const download =  await downloadPromise;
    console.log(await download.suggestedFilename());

    //Saving the downloaded file
    await download.saveAs('downloads/download.xlsx');

    //Upload the same file which we downloaded
    const uploadFile = page.locator('input[id="fileinput"]');
    await uploadFile.setInputFiles('downloads/download.xlsx');
});