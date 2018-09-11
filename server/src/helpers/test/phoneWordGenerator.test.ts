import { phoneWordGenerator } from '../phoneWordGenerator';

describe('phoneWordGenerator', () => {
    it('should work for two numbers', () => {
        const generatedWords = phoneWordGenerator('22');
        expect(generatedWords).toContain('aa');
        expect(generatedWords).toContain('ab');
        expect(generatedWords).toContain('ac');
        expect(generatedWords).toContain('ba');
        expect(generatedWords).toContain('bb');
        expect(generatedWords).toContain('bc');
        expect(generatedWords).toContain('ca');
        expect(generatedWords).toContain('cb');
        expect(generatedWords).toContain('cc');
        expect(generatedWords.length).toEqual(9);
    });

    it('should work for four numbers', () => {
        const generatedWords = phoneWordGenerator('2345');
        expect(generatedWords.length).toEqual(Math.pow(3,4));
    });

    it('should return empty result for other than [2-9]', () => {
        expect(phoneWordGenerator('1111')).toEqual([]);
        expect(phoneWordGenerator('asdf !')).toEqual([]);
    });

    it('should throw exception on empty string', () => {
        expect(() => {
            phoneWordGenerator('');
        }).toThrow('Input numbers needed');
    });

    it('should throw exception on string longer than 9 characters', () => {
        expect(() => {
            phoneWordGenerator('1234567890');
        }).toThrow('Too many input numbers');
    });
});