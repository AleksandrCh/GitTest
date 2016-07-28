(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};

    functionModule.lazyEval = function(func) {
        if (typeof func !== 'function') {
            throw new Error('Given parameter must be a function.');
        }
        return function() {
            func.apply(func, arguments);
        }; 
    };
})(this);