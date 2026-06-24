import { test, expect } from '@playwright/test';

test('Login API', async ({ request }) => {

    const response = await request.post(
        'https://api.eventhub.rahulshettyacademy.com/api/auth/login',
        {
            data: {
                email: 'anubhutikaur9@gmail.com',
                password: 'AnubhutiKaur$$96'
            }
        }
    );

    console.log("Status:", response.status());

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(body.success).toBeTruthy();

    const token = body.token;
    console.log("JWT Token =", token);
});

test('API Chaining', async ({ request }) => {
    const loginResponse = await request.post(
        'https://api.eventhub.rahulshettyacademy.com/api/auth/login',
        {
            data: {
                email: 'anubhutikaur9@gmail.com',
                password: 'AnubhutiKaur$$96'
            }
        }
    )

    const loginBody =  await loginResponse.json();
    const token = loginBody.token;
    console.log("Token= ",token);

    const eventResponse = await request.get(
        'https://api.eventhub.rahulshettyacademy.com/api/events?limit=6',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    expect(eventResponse.ok()).toBeTruthy();
    expect(eventResponse.status()).toBe(200);

    const eventsBody = await eventResponse.json();

    console.log(JSON.stringify(eventsBody,null,2));

    console.log(Object.keys(eventsBody));
});