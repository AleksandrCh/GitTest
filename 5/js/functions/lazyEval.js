(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};

    functionModule.lazyEval = function(func) {
        if (typeof func !== 'function') {
            throw new Error('Given parameter must be a function.');
        }
        
        var args = Array.prototype.slice.call(arguments, 0),
            func = args.shift();
        
        return function() {
            debugger;
            return func.apply(func, args);
        }
    };
})(this);