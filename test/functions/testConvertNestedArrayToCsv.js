import expect from 'expect';
import { convertNestedArrayToCsv } from '../../web/src/functions/convertNestedArrayToCsv.js';

describe('convertNestedArrayToCsv', function() {
    it('should throw an error if not given an array', function() {
        expect(function() {
            convertNestedArrayToCsv('bacon');
        }).toThrow(/not an array/);
    });

    it('should correctly convert simple nested array to csv', function() {
        var goodArray = [
            ['good','good'],
            ['fine','fine'],
            ['nice','nice']
        ];
        expect(convertNestedArrayToCsv(goodArray))
            .toEqual("good,good\r\nfine,fine\r\nnice,nice");
    });

    it('should correctly convert simple nested objects to csv', function() {
        var goodArray = [
            ['good','good'],
            { 'wut': 'fine', 'but': 'fine' },
            ['nice','nice']
        ];
        expect(convertNestedArrayToCsv(goodArray))
            .toEqual("good,good\r\nfine,fine\r\nnice,nice");
    });
});
