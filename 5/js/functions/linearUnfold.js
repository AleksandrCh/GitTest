'use strict';

var linearUnfold = function(callback, initialValue) {
	var array = [],
		currentValue = initialValue;

	while(currentValue !== false && currentValue !== NaN && currentValue !== undefined && currentValue !== null) {
		array.push(currentValue);
		currentValue = callback(currentValue);
	}

	return array;
};

