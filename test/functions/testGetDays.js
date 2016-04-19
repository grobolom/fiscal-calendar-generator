import expect from 'expect';
import { getDays } from '../../web/src/functions/getDays.js';

describe('getDays', function() {
    it('should return 364 days', function() {
        expect(getDays('445','2016-01-01').length).toEqual(364);
    });
});
