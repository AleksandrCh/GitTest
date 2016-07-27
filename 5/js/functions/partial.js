'use strict';
var functionModule = FunctionModule || {};

functionModule.partial = function() {

    var args = Array.prototype.slice.call(arguments, 0),
    	func = args.shift();
    
    if (typeof func !== 'function')
        throw new Error('Given parameter is not a function.');

    return function() {
        var remainingArgs = Array.prototype.slice.call(arguments, 0);
        return func.apply(this, args.concat(remainingArgs));
    };
};