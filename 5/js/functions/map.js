'use strict';
var functionModule = FunctionModule || {};

functionModule.map = function(array, callback) {
    if (!(array instanceof Array))
        throw new Error('First parameter must be an array.');
    if (typeof callback !== 'function')
        throw new Error('Second parameter must be a function.');

    var newArray = [];
    for (var i=0, len = array.length; i < len; i++) {
    	newArray[i] = callback(array[i], i, array);
    }

    return newArray;
};