export const generate = function() {
    return {
        type: 'GENERATE',
    };
}

export const setPattern = function(pattern) {
    return {
        type: 'SET_PATTERN',
        pattern: pattern,
    };
}

export const setStartDate = function(start_date) {
    return {
        type: 'SET_START_DATE',
        start_date: start_date,
    };
}
