'use strict';
var partial = function() {
    var args = Array.prototype.slice.call(arguments, 0),
    	func = args.shift();

    return function() {
        var remainingArgs = toArray(arguments);
        return func.apply(this, args.concat(remainingArgs));
    }
}