import { test, expect } from '../fixtures/eventFixture.js';
import { createEventPayload, updatedPayload } from '../test-data/eventPayload.js';
import EventAPI from '../api/EventAPI';

// const EventAPI = require('../api/EventAPI');

test('CRUD APIs', async ({ request,eventAPI }) => {
    //Event payload
    const eventPayload = createEventPayload();

    //Request for login
    const token = await eventAPI.login();
    console.log("Token: ", token);

    //Request for event creation
    const eventId = await eventAPI.createEvent(token,eventPayload);
    console.log("Event Id: ", eventId);

    //Fetching created event response
    const event = await eventAPI.getEvent(token,eventId);
    expect(event.title).toBe('Tech Summit 2026');
    expect(event.city).toBe('Bangalore');
    expect(event.totalSeats).toBe(500);
    console.log("Event Title: ", event.title);

    const updatedEvent = await eventAPI.updateEvent(token,eventId,updatedPayload);
    console.log("Updated Event Title: ", updatedEvent.title);
    expect(updatedEvent.title).toBe('Captain Playwright Summit');
    
    //Delete Event
    await eventAPI.deleteEvent(token,eventId);

    //Verify Deletion
    const getDeletedEventResponse = await eventAPI.getDeletedEventResponse(token,eventId);
    expect(getDeletedEventResponse.status()).toBe(404);
});