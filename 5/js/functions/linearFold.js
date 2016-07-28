(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};

    functionModule.linearFold = function(array, callback, initialValue) {
        if (!(array instanceof Array))
            throw new Error('First parameter must be an array.');
        if (typeof callback !== 'function')
            throw new Error('Second parameter must be a function.');
        
        var currentValue,
            previousValue = initialValue;
        
        for (var i = 0, len = array.length; i < len; i++) {
            currentValue = array[i];
            previousValue = callback(previousValue, currentValue, i, array);
        }
        return previousValue;
    };
})(this);