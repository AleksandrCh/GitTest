'use strict';
var functionModule = FunctionModule || {};

functionModule.partial = function(func) {
    if (typeof func !== 'function')
        throw new Error('Given parameter is not a function.');
	
    var args = Array.prototype.slice.call(arguments, 0),
    	func = args.shift();

    return function() {
        var remainingArgs = toArray(arguments);
        return func.apply(this, args.concat(remainingArgs));
    };
};