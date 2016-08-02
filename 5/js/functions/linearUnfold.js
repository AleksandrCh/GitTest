(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};

    functionModule.linearUnfold = function(callback, initialValue) {
        if (typeof callback !== 'function') {
            throw new Error('First parameter must be a function.');
        }
        if (initialValue === undefined) {
            throw new Error('Second parameter must be given in function.');
        }
        
        var array = [],
            currentValue = [];
        currentValue[0] = initialValue;
        
        if (currentValue[0] === false) {
            return null;
        }
        
        currentValue = callback(currentValue);
        if (currentValue[0] === false) {
            return null;
        } else {
            while(currentValue[0] !== false) {
                array.push(currentValue[1]);
                currentValue = callback(currentValue);
            }
        }
        
        return array;
    };
})(this);

