'use strict';
var functionModule = FunctionModule || {};

functionModule.linearUnfold = function(callback, initialValue) {
	var array = [],
		currentValue = {
			state: initialValue,
		};

	while(currentValue.state !== false &&
		  currentValue.state !== NaN && 
		  currentValue.state !== undefined && 
		  currentValue.state !== null) {
		array.push(currentValue.element);
		currentValue = callback(currentValue);
	}

	return array;
};

