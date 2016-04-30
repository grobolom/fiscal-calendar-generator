import expect from 'expect';
import { convertNestedArrayToCsv } from '../../web/src/functions/convertNestedArrayToCsv.js';

describe('convertNestedArrayToCsv', function() {
    it('should throw an error if not given an array', function() {
        expect(function() {
            convertNestedArrayToCsv('bacon');
        }).toThrow(/not an array/);
    });
});
