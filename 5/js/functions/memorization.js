'use strict';

var memorization = function(func) {
	if (typeof func !== 'function')
        throw new Error('Given parameter is not a function.');

    var result,
  		lazyEval = func.bind.apply(func, arguments);

  	return function () {
        if (result) {
            return result;
        }
        result = lazyEval();
        return result;
    };
};