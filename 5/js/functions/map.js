'use strict';

var map = function(callback, array) {
	if (typeof callback !== 'function')
        throw new Error('First parameter must be a function.');

    if (!(array instanceof Array))
        throw new Error('Second parameter must be an array.');

    var newArray = [];
    for (var i=0, len = array.length; i < len; i++) {
    	newArray[i] = callback(array[i], i, arrays);
    }

    return newArray;
}