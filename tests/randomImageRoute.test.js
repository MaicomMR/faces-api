const request = require('supertest');
const app = require('../server');

describe('GET in random image route', () => {
    test('Deve retornar status 200 e uma imagem', async () => {
        const response = await request(app).get('/random/500/500'); // ajuste o endpoint conforme necessário
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch("image/jpeg");
        expect(response.body.length).toBeGreaterThan(0); // Verifica se há conteúdo na imagem
    });
});