const request = require('supertest');
const server = require('./server.js');

describe('SERVER', () => {
    //Date
    it('is live & date sent', () => {
        return request(server)
        .get('/')
        .then(res=>{
            expect(res.status).toBe(200)        
        })
    });
});