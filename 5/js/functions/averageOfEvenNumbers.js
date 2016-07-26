'use strict';

var functionModule = FunctionModule || {};

functionModule.averageOfEvenNumbers = function(array) {
    if (!(array instanceof Array))
        throw new Error('Given parameter must be an array.');

	var amount = 0,
		sum = 0,
		newArray = [];

	newArray = filter(array, function(a) { return a % 2 === 0; });
	amount = newArray.length;
	sum = linearFold(newArray, function(res, a) { return res + a; }, 0);
	
	return sum / amount;
};