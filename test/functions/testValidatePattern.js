import expect from 'expect';
import { validatePattern } from '../../web/src/functions/validatePattern.js';

describe('validatePattern', function() {
    it('should fail if the pattern is not an array', function() {
        expect(validatePattern('bacon')).toEqual(false);
    });

    it('should fail if the pattern is not length 12', function() {
        expect(validatePattern([])).toEqual(false);
    });

    it('should fail if the pattern is shorter than 52 weeks', function() {
        expect(validatePattern(
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        )).toEqual(false);
    });

    it('should fail if the pattern is longer than 54 weeks', function() {
        expect(validatePattern(
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        )).toEqual(false);
    });

    it('should succeed if the pattern is exactly 52 weeks', function() {
        expect(validatePattern(
            [4, 4, 5, 4, 4, 5, 4, 4, 5, 4, 4, 5]
        )).toEqual(true);
    });
});
