import { test as base } from '@playwright/test';
import EventAPI from '../api/EventAPI';

export const test = base.extend({
    eventAPI: async ({ request }, use) => {
        const eventAPI = new EventAPI(request);
        await use(eventAPI);
    }
});

export { expect } from '@playwright/test';