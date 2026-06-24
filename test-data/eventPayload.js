import { faker } from '@faker-js/faker';

export function createEventPayload() {
    return {
        title: faker.company.name(),
        description: 'A premier technology conference',
        category: 'Conference',
        venue: 'Bangalore International Centre',
        city: faker.location.city(),
        eventDate: '2026-07-15T09:00:00.000Z',
        price: 1500,
        totalSeats: 500,
        imageUrl: 'https://example.com/banner.jpg'
    };
}

export const updatedPayload = {
    title: "Captain Playwright Summit",
    description: "A premier technology conference",
    category: "Conference",
    venue: "Bangalore International Centre",
    city: "Bangalore",
    eventDate: "2026-07-15T09:00:00.000Z",
    price: 1500,
    totalSeats: 500,
    imageUrl: "https://example.com/banner.jpg"
};