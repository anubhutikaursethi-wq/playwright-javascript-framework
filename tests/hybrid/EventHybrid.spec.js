import {test,expect} from '../../fixtures/eventFixture';
import EventAPI from '../../api/EventAPI';
import { createEventPayload, updatedPayload } from '../../test-data/eventPayload.js';
import HomePage from '../../pages/HomePage';
import ManageEventsPage from '../../pages/ManageEventsPage';

test.use({
    storageState: '.auth/user.json'
});

test.only('Verify created event in UI', async ({ page, eventAPI }) => {

    //event payload
    const eventPayload = createEventPayload();

    //Request for login
    const token = await eventAPI.login();
    console.log("Token: ", token);

    //Request for event creation
    const eventId = await eventAPI.createEvent(token, eventPayload);
    console.log("Event Id: ", eventId);

    // Open UI
    await page.goto('https://eventhub.rahulshettyacademy.com');
    console.log(await page.url());

    const homePage = new HomePage(page);

    const manageEventsPage = new ManageEventsPage(page);

    await homePage.navigateToManageEvents();

    const allTitles = await manageEventsPage.getAllTitles();

    expect(allTitles).toContain(eventPayload.title);

    //Deleing the event created using api and validation
    await eventAPI.deleteEvent(token, eventId);

    //Refresh the page
    await page.reload();

    //Verify event disappers
    const allTitlesAfterDeletion = await manageEventsPage.getAllTitles();
    await expect(allTitlesAfterDeletion).not.toContain(eventPayload.title);
});