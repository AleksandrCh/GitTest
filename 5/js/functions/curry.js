'use strict';
var curry = function(func){
    if (typeof func !== 'function')
        throw new Error('Given parameter is not a function.');

    var arity = func.length;

    function given (argsSoFar) {
        return function helper () {
            var args = Array.prototype.slice.call(arguments, 0);
            var updatedArgsSoFar = argsSoFar.concat(args);
          
            if (updatedArgsSoFar.length >= arity) {
                return func.apply(this, updatedArgsSoFar);
            }
            else {
                return given(updatedArgsSoFar);
            }
        };
    };
  
    return given([]);
};