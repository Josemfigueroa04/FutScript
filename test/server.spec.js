const request = require('supertest');
const server = require('../index');

describe ("Operaciones CRUD de equipos", () => {
    it ('Get equipos', async () => {
        const res = await request(server).get('/equipos').send();
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    it ('Post login', async () => {
        const res = await request(server).post('/login').send({username: "admin", password: "1234"});
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({message: "Login exitoso", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c" +
        "2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjI5MjQ0NjE4fQ.5mVz1fG3Jzg7yZ1a6QrVYkX4w8w1Qs9mV7u1xL9mZlE"});
    });
    it ('Post equipos', async () => {
        const res = await request(server).post('/equipos/:teamID/jugadores').send({"name": "Boca Juniors"});
        expect(res.status).toEqual(201);
        expect(res.body).toEqual({message: "Equipo agregado con éxito"});
    });
});