'use strict';
var sumOfRandomNumbers = function(array) {
    if (!(array instanceof Array))
        throw new Error('Given parameter must be an array.');

    function getRandomIndex(max) {
  		return Math.floor(Math.random() * (max + 1));
	}
	debugger;
	var len = array.length,
		newArray = linearUnfold(function(i) {
			if (i < 10) {
				return false;
			}

			return getRandomIndex(len);
		}, 0);

	console.log(newArray);

	//sum = linearFold(newArray, function(res, a, i, array) { return res + a; }, 0);
		
	return 0;
};