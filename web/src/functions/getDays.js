import moment from 'moment';

export const getDays = function(pattern, date) {
    var repeated = pattern.repeat(4);
    var p = repeated.split('');

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
    var data = [];
    var parsed_date = moment(date, 'YYYY-MM-DD');
    for (var i = 0; i < 364; i++) {
        var currentMonth = 1;
        for (var j = 0; j < 12; j++) {
            var current = months[j];
            if (weekNumber <= current) {
                currentMonth = (j + 1);
                break;
            }
        }

        var current_date = parsed_date;
        data.push({
            day: current_date.format('D'),
            month: current_date.format('M'),
            year: current_date.format('YYYY'),
            date: current_date.format('YYYY-MM-DD'),
            fiscal_day: i + 1,
            fiscal_week: weekNumber,
            fiscal_month: currentMonth,
            fiscal_year: parsed_date.format('YYYY')
        });

        daysRemaining--;
        if (daysRemaining === 0) {
            daysRemaining = weekDaysMax;
            weekNumber++;
        }

        // since this isn't immutable we have to only add one day each time
        parsed_date.add(1, 'days');
    }
    return data;
}
