'use strict';

var filter = function(callback, array) {
	if (typeof callback !== 'function')
        throw new Error('First parameter must be a function.');

    if (!(array instanceof Array))
        throw new Error('Second parameter must be an array.');

    var newArray = [],
    	result;
    for (var i=0, len = array.length; i < len; i++) {
    	result = callback(array[i], i, array);
    	if (result === true) newArray.push(array[i]);
    }

    return newArray;
}