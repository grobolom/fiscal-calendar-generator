export const expandPattern = function(pattern) {
    if (pattern.length != 3 && pattern.length != 12)
        throw new Error('invalid length');

    if (pattern.length == 3)
        pattern = pattern.repeat(4);

    return pattern.split('').map(function(current) {
        return parseInt(current);
    });
};
