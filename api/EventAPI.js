import BaseAPI from './BaseAPI';

export default class EventAPI extends BaseAPI{
    constructor(request) {
        super(request);
        this.request = request;
        this.baseURL = 'https://api.eventhub.rahulshettyacademy.com/api';
        this.authURL = `${this.baseURL}/auth`;
        this.eventURL = `${this.baseURL}/events`;
    }

    async login() {
        const loginResponse = await this.request.post(
            `${this.authURL}/login`,
            {
                data: {
                    email: 'anubhutikaur9@gmail.com',
                    password: 'AnubhutiKaur$$96'
                }
            }
        );

        if (!loginResponse.ok())
            throw new Error('Login to event creation website failed');

        const loginBody = await loginResponse.json();
        return loginBody.token;
    }

    getAuthHeaders(token) {
        return {
            Authorization: `Bearer ${token}`
        };
    }

    async createEvent(token, payload) {
        const createResponse = await this.request.post(
            this.eventURL,
            {
                headers: this.getAuthHeaders(token),
                data: payload
            }
        )
        if (!createResponse.ok())
            throw new Error('Event creation failed');

        const createResponseBody = await createResponse.json();
        return createResponseBody.data.id;
    }

    async getEvent(token, eventId) {
        const eventResponse = await this.request.get(
            `${this.eventURL}/${eventId}`,
            {
                headers: this.getAuthHeaders(token)
            }
        )
        if (!eventResponse.ok())
            throw new Error('Unable to fetch event response.');

        const eventResponseBody = await eventResponse.json();
        return eventResponseBody.data;
    }

    async updateEvent(token, eventId, payload) {
        const updateResponse = await this.request.put(
            `${this.baseURL}/events/${eventId}`,
            {
                headers: this.getAuthHeaders(token),
                data: payload
            }
        );
        if (!updateResponse.ok())
            throw new Error('Unable to fetch event response post updating the event title.');

        const updatedResponseBody = await updateResponse.json();
        return updatedResponseBody.data;
    }

    async deleteEvent(token, eventId) {
        const deleteResponse = await this.request.delete(
            `${this.baseURL}/events/${eventId}`,
            {
                headers: this.getAuthHeaders(token)
            }
        )
        if (!deleteResponse.ok())
            throw new Error('Unable to delete the event created.');
    }

    async getDeletedEventResponse(token, eventId) {
        const verifyDeleteResponse = await this.request.get(
            `${this.baseURL}/events/${eventId}`,
            {
                headers: this.getAuthHeaders(token)
            }
        )
        return verifyDeleteResponse;
    }
}