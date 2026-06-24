import { expect } from '@playwright/test';

export default class ManageEventsPage {
    constructor(page) {
        this.page = page;
        this.titles =
            page.locator(
                '[data-testid="event-table-row"] td:nth-child(1) span'
            );
    }

    async getAllTitles() {
        await expect(this.titles.first()).toBeVisible();
        return await this.titles.allTextContents();
    }
}