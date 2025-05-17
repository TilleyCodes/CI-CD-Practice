
const request = require('supertest');

const app = require('./index.js')

describe("GET /health", () => {
    it('Should return status 200 OK and a JSON response', async ()=> {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status: "OK"
        });
    });
});