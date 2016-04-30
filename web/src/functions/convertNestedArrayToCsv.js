// not using array build-up and join because it's not worth it.
// we have a maximum size and it's not very big

export const convertNestedArrayToCsv = function(nestedArray) {
    var resultString = '';
    if (!(nestedArray instanceof Array))
        throw new Error('not an array!');

    nestedArray.forEach(function(element) {
        if (!(element instanceof Array))
            throw new Error('not a nested array!');

        element.forEach(function(nestedElement) {
            if (!(nestedElement instanceof String
                        || typeof nestedElement === 'string' ))
                throw new Error('nested arrays are too deep!');
            resultString += nestedElement + ",";
        });
        resultString = resultString.substr(0, resultString.length - 1);
        resultString += "\r\n";
    });

    resultString = resultString.substr(0, resultString.length - 2);

    return resultString;
};
