export default class BaseAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = 'https://api.eventhub.rahulshettyacademy.com/api';

    }

    getAuthHeaders(token) {
        return {
            Authorization: `Bearer ${token}`
        };
    }
}