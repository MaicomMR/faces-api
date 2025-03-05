const request = require('supertest');
const app = require('../server');

describe('Testing home route', () => {
    test('GET on home route should return status 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});