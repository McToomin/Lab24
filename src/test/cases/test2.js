const {expect} = require('../chai')
const request = require('supertest')

const app = require('../../main/app')

describe('GET - /test', async () => {

    it('returns 300', async () => {
        // make a GET request on the app for the url '/'
        const response = await request(app).get('/test')

        // check the HTTP status code
        expect(response.statusCode).to.equal(300)
        // check the raw text returned
        expect(response.text).to.equal('Hello Universe!')
    })

})