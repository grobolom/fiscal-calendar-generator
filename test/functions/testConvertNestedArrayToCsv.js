import expect from 'expect';
import { convertNestedArrayToCsv } from '../../web/src/functions/convertNestedArrayToCsv.js';

describe('convertNestedArrayToCsv', function() {
    it('should throw an error if not given an array', function() {
        expect(function() {
            convertNestedArrayToCsv('bacon');
        }).toThrow(/not an array/);
    });

    it('should throw an error if an inside element is not an array',
        function() {
            var badArray = [
                ['good'],
                ['good'],
                'bad'
            ];
            expect(function() {
                convertNestedArrayToCsv(badArray);
            }).toThrow(/not a nested array/);
        }
    );

    it('should throw an error if the nested arrays contain non-strings',
        function() {
            var badArray = [
                ['good'],
                ['good'],
                [['awful']]
            ];
            expect(function() {
                convertNestedArrayToCsv(badArray);
            }).toThrow(/nested arrays are too deep/);
        }
    );

    it('should correctly convert simple nested array to csv', function() {
        var goodArray = [
            ['good','good'],
            ['fine','fine'],
            ['nice','nice']
        ];
        expect(convertNestedArrayToCsv(goodArray))
            .toEqual("good,good\r\nfine,fine\r\nnice,nice");
    });
});
