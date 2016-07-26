'use strict';

var first = function(array, callback) {
    if (!(array instanceof Array))
        throw new Error('First parameter must be an array.');
    if (typeof callback !== 'function')
        throw new Error('Second parameter must be a function.');

    var newArray = [],
    	result;
    for (var i=0, len = array.length; i < len; i++) {
    	result = callback(array[i], i, array);
    	if (result === true) return array[i];
    }

    return undefined;
};