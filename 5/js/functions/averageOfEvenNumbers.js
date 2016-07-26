'use strict';
var averageOfEvenNumbers = function(array) {
    if (!(array instanceof Array))
        throw new Error('Second parameter must be an array.');

	var amount = 0,
		sum = 0;
	for (var i = 0, len = array.length; i < len; i++) {
		if (array[i] % 2 === 0) {
			sum += array[i];
			amount += 1;
		}
	} 
	console.log(sum + '   '+ amount);
	return sum / amount;
};