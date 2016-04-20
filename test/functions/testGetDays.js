import expect from 'expect';
import { getDays } from '../../web/src/functions/getDays.js';

describe('getDays', function() {
    it('should return 364 days', function() {
        expect(getDays('445','2016-01-01').length).toEqual(364);
    });

    it('should make the second month big if the pattern is 454', function() {
        var lastDayOfSecondMonth = (7 * 4) + (7 * 5);
        var actual = getDays('454', '2016-01-01')[lastDayOfSecondMonth - 1]
            .fiscal_month;
        expect(actual).toEqual(2);
    });

    it('should make the third month big if the pattern is 445', function() {
        var lastDayOfThirdMonth = (7 * 4) + (7 * 4) + (7 * 5);
        var actual = getDays('454', '2016-01-01')[lastDayOfThirdMonth - 1]
            .fiscal_month;
        expect(actual).toEqual(3);
    });

    it('should have a last day 364 days after the first', function() {
        var firstDay = '2016-01-01';
        var expectedLastDay = '2016-12-29'; // 2016 is a leap year so -2 days
        expect(getDays('445', firstDay)[363].date).toEqual(expectedLastDay);
    });

    it('should start with the provided date', function() {
        expect(getDays('445', '2016-01-01')[0].date).toEqual('2016-01-01');
    });

    it('should return an empty array when given a bad pattern', function() {
        expect(getDays('444', '2016-01-01')).toEqual([]);
    });
});
