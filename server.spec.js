const request = require('supertest');

const server = require('./server')

describe('server', function(){
    it('runs the test', function (){
        expect(true).toBe(true);
    })
    describe('GET /api/schemes', function(){
        it('should return status 200',function(){
            return request(server).get('/api/schemes')
                .then(res => {
                expect(res.status).toBe(200);
        })
    })
    it('should return JSON', function() {
        return request(server).get('/api/schemes')
            .then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })
    })
    describe('Post /api/schemes',function(){
        it('should return status 500', function(){
        return request(server).post('/api/schemes')
        .then(res =>{
            expect(res.status).toBe(500)})
        })

        it('should return JSON', function(){
            return request(server).post('/api/schemes')
            .then(res =>{
                expect(res.type).toMatch(/json/i)})
            })
    } )
        
})