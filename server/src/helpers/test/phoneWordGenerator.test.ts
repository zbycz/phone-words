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

    it('should throw exception on non-[2-9] string', () => {
        expect(() => {
            phoneWordGenerator('111');
        }).toThrow('Input numbers needed');

        expect(() => {
            phoneWordGenerator('asdf!');
        }).toThrow('Input numbers needed');
    });

    it('should throw exception on empty string', () => {
        expect(() => {
            phoneWordGenerator('');
        }).toThrow('Input numbers needed');
    });

    it('should throw exception on string longer than 9 characters', () => {
        expect(() => {
            phoneWordGenerator('222333444555');
        }).toThrow('Too many input numbers');
    });

    it('should ignore number 1', () => {
        const generatedWords = phoneWordGenerator('12');
        expect(generatedWords).toEqual([ 'a', 'b', 'c']);
    });

    it('should ignore other characters', () => {
        const generatedWords = phoneWordGenerator('2a2');
        expect(generatedWords.length).toEqual(9);
    });

    it('should ignore number 1 and 0', () => {
        const generatedWords = phoneWordGenerator('120');
        expect(generatedWords).toEqual([ 'a', 'b', 'c']);
    });
});