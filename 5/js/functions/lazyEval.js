'use strict';

var lazyEval = function(func) {
	if (typeof func !== 'function')
        throw new Error('First parameter must be a function.');
	return func.bind.apply(func, arguments);
}