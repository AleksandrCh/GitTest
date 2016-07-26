'use strict';
var functionModule = FunctionModule || {};

functionModule.functionModule = FunctionModule || {};

functionModule.lazyEval = function(func) {
	if (typeof func !== 'function')
        throw new Error('Given parameter must be a function.');
	return func.bind.apply(func, arguments);
};