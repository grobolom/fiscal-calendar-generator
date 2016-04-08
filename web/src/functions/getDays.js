var moment = require('./moment.js');

export const getDays = function(date) {
    var pattern = "445";
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
    for (var i = 0; i < 364; i++) {
        var currentMonth = 1;
        for (var j = 0; j < 12; j++) {
            var current = months[j];
            if (weekNumber <= current) {
                currentMonth = (j + 1);
                break;
            }
        }

        data.push({
            fiscal_day: i + 1,
            date: moment(date, 'MM/DD/YYYY').add(i + 1, 'days').format('MM/DD/YYYY'),
            fiscal_week: weekNumber,
            fiscal_month: currentMonth
        });

        daysRemaining--;
        if (daysRemaining === 0) {
            daysRemaining = weekDaysMax;
            weekNumber++;
        }
    }
    return data;
}
