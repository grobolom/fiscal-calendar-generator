import expect from 'expect';
import { expandPattern } from '../../web/src/functions/expandPattern.js';

describe('expandPattern', function() {
    it('should return an array representing the pattern', function() {
        expect(expandPattern('454')).toBeAn(Array);
    });

    it('should expand a length 3 pattern to 12', function() {
        expect(expandPattern('454').length).toEqual(12);
    });

    it('should keep a length 12 pattern the same length', function() {
        expect(expandPattern('454454454454').length).toEqual(12);
    });
});
