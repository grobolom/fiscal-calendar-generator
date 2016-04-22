export const validatePattern = function(pattern) {
    if (!(pattern instanceof Array))
        return false;

    var totalWeeks = pattern.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);

    return (
        totalWeeks <= 54 &&
        totalWeeks >= 52 &&
        pattern.length == 12
    );
};
