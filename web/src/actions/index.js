export const generate = function(pattern, start) {
    return {
        type: 'GENERATE',
        pattern: pattern,
        start: start
    };
}
