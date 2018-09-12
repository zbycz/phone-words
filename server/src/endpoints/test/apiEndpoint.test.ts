import * as express from 'express';
import * as request from 'supertest';
import { apiEndpoint } from '../apiEndpoint';

function createTestApp() {
    const app = express();
    apiEndpoint(app);
    return app;
}

describe('apiEndpoint', () => {
    it('should return 400 for invalid request', () => {
        return request(createTestApp())
            .get('/api/phone-words/a')
            .send()
            .expect(400);
    });

    it('should return 400 for too long input', () => {
        return request(createTestApp())
            .get('/api/phone-words/222333444555')
            .send()
            .expect(400);
    });

    it('should return list of words for normal request', () => {
        return request(createTestApp())
            .get('/api/phone-words/234')
            .send()
            .then((res) => {
                const reply = JSON.parse(res.text);
                expect(reply.list.length).toEqual(3*3*3);
            });
    });
});

