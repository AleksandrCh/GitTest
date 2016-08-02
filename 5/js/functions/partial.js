(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};
    
    functionModule.partial = function() {
        
        var args = Array.prototype.slice.call(arguments, 0),
            func = args.shift();
        
        if (typeof func !== 'function') {
            throw new Error('Given parameter is not a function.');
        }
            
        return function() {
            var remainingArgs = Array.prototype.slice.call(arguments, 0);
            return func.apply(this, args.concat(remainingArgs));
        };
    };
})(this);