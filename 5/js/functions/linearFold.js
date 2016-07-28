(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};

    functionModule.linearFold = function(array, callback, initialValue) {
        if (!(array instanceof Array)) {
            throw new Error('First parameter must be an array.');
        }
        if (typeof callback !== 'function') {
            throw new Error('Second parameter must be a function.');
        }
        if (array.length < 2) {
            return null;
        }

        var currentValue,
            previousValue = initialValue;
        
        if (initialValue === undefined) {
            previousValue = array[0];
            for (var i = 1, len = array.length; i < len; i++) {
                currentValue = array[i];
                previousValue = callback(previousValue, currentValue, i, array);
            }
        } else {
            for (var i = 0, len = array.length; i < len; i++) {
                currentValue = array[i];
                previousValue = callback(previousValue, currentValue, i, array);
            }
        }
        return previousValue;
    };
})(this);