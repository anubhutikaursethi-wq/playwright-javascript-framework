export default class HomePage {

    constructor(page) {
        this.page = page;

        this.adminButton =
            page.getByRole('button', { name: 'Admin' });

        this.manageEventsLink =
            page
                .getByRole('navigation')
                .getByRole('link',
                    { name: 'Manage Events' });
    }

    async navigateToManageEvents() {

        await this.adminButton.click();

        await this.manageEventsLink.click();

    }

}