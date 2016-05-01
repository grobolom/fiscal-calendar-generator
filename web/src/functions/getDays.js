import moment from 'moment';
import { expandPattern } from './expandPattern.js'
import { validatePattern } from './validatePattern.js'

export const getDays = function(pattern, date) {
    var p = expandPattern(pattern);
    if (!validatePattern(p))
        return [];

    var months = [];
    var weeksSoFar = 0;
    p.forEach(function(current, index) {
        weeksSoFar += parseInt(current);
        months.push(weeksSoFar);
    }, this);

    var weekDaysMax = 7;
    var daysRemaining = weekDaysMax;
    var weekNumber = 1;
    var monthNumber = 1;
    var dayOfFiscalMonth = 1;
    var data = [];
    var parsed_date = moment(date, 'YYYY-MM-DD');

    console.log(months);

    for (var i = 0; i < 364; i++) {
        var currentMonth = 1;
        for (var j = 0; j < 12; j++) {
            var current = months[j];
            if (weekNumber <= current) {
                currentMonth = (j + 1);
                break;
            }
        }

        if (daysRemaining === weekDaysMax
            && months.indexOf(weekNumber - 1) > -1) {
            dayOfFiscalMonth = 1;
        }

        var current_date = parsed_date;
        data.push({
            index: i + 1,
            day: current_date.format('D'),
            month: current_date.format('M'),
            year: current_date.format('YYYY'),
            date: current_date.format('YYYY-MM-DD'),
            fiscal_day: dayOfFiscalMonth,
            fiscal_week: weekNumber,
            fiscal_month: currentMonth,
            fiscal_year: parsed_date.format('YYYY')
        });

        daysRemaining--;
        if (daysRemaining === 0) {
            daysRemaining = weekDaysMax;
            weekNumber++;
        }
        dayOfFiscalMonth++;

        // since this isn't immutable we have to only add one day each time
        parsed_date.add(1, 'days');
    }
    return data;
}
