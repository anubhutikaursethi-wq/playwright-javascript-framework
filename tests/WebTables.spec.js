import { test, expect } from '@playwright/test';

test('Handling web tables', async ({page}) => {
    //Printing number of rows and columns in the table
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const table = page.locator('table[name="courses"]');
    // const rows = await table.locator('tr');
    // const rowCount = await rows.count();
    // const columns = await table.locator('tr').first().locator('th');
    // const columnCount = await columns.count();
    // await console.log("Rows: " +rowCount+ " and columns: "+columnCount);

    // //Find the row containing python
    // for(let i = 0; i<rowCount; i++) {       
    //     const currentRow = rows.nth(i);
    //     const rowData = await currentRow.locator('td').allTextContents();
    //     console.log("Row "+i+": ", rowData);
    //     if(rowData.some(cell => cell.includes("Python")))
    //     {
    //         console.log("Price is: " + rowData[2]);
    //         break;
    //     }
    // }

    //Alternate playwright approach
    const pythonRow = table.locator('tr').filter({ hasText: 'Python' });
    console.log(await pythonRow.locator('td').nth(2).textContent());
});