// browser polyfill for object keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

// not using array build-up and join because it's not worth it.
// we have a maximum size and it's not very big
//
// we also decide to convert naively because we don't care to
// account for crazy data, only the specific stuff we have now,
// which is [{}, {}, {}]

export const convertNestedArrayToCsv = function(nestedArray) {
    var resultString = '';
    if (!(nestedArray instanceof Array))
        throw new Error('not an array!');

    nestedArray.forEach(function(element) {
        if (element instanceof Array) {
            element.forEach(function(nestedElement) {
                resultString += nestedElement + ",";
            });
        } else {
            var keys = Object.keys(element);
            keys.forEach(function(key) {
                resultString += element[key] + ",";
            });
        }
        resultString = resultString.substr(0, resultString.length - 1);
        resultString += "\r\n";
    });

    resultString = resultString.substr(0, resultString.length - 2);

    return resultString;
};


