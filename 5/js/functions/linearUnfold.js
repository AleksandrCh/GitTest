'use strict';
var functionModule = FunctionModule || {};

functionModule.linearUnfold = function(callback, initialValue) {
    if (typeof callback !== 'function')
        throw new Error('First parameter must be a function.');
    if (initialValue === undefined)
        throw new Error('Second parameter must be given in function.');
    
	var array = [],
		currentValue = [];
    currentValue[0] = initialValue;
    
	while(currentValue[0] !== false &&
		  currentValue[0] !== NaN && 
		  currentValue[0] !== undefined && 
		  currentValue[0] !== null) {
		currentValue = callback(currentValue);
        array.push(currentValue[1]);
	}

	return array;
};

