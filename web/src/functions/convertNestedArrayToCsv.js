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
        });
    });
};
