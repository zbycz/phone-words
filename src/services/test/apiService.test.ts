import { apiService } from '../apiService';

const globalAny: any = global;

function mockFetch(response) {
    globalAny.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            resolve(response);
        });
    });
}

function mockFetchRejected(error) {
    globalAny.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    });
}

describe('apiService', () => {
    describe('getPhoneWords', () => {
        it('should call json() on result and return the value', async () => {
            expect.hasAssertions();
            mockFetch({
                ok: true,
                status: 200,
                json: () => {
                    return { list: ['xyz'] };
                }
            });
            const response = await apiService.getPhoneWords('abc');
            expect(response).toEqual({ list: ['xyz'] });
        });

        it('should throw error on rejected fetch', async () => {
            expect.hasAssertions();
            mockFetchRejected(new Error('Network error, etc..'));
            return apiService.getPhoneWords('x').catch((err) => {
                expect(err.message).toMatch(/API seems down/);
            });
        });

        it('should throw error http status 400', () => {
            expect.hasAssertions();
            mockFetch({
                ok: false,
                status: 400
            });
            return apiService.getPhoneWords('x').catch((err) => {
                expect(err.message).toMatch(/Invalid input/);
            });
        });
    });
});
