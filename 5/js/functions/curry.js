'use strict';
var functionModule = FunctionModule || {};

functionModule.curry = function(func){
    if (typeof func !== 'function')
        throw new Error('Given parameter is not a function.');
    
    var arity = func.length;

    function given (givenArgs) {
        return function helper () {
            var args = Array.prototype.slice.call(arguments, 0);
            var newGivenArgs = givenArgs.concat(args);
          
            if (newGivenArgs.length >= arity) {
                return func.apply(this, newGivenArgs);
            }
            else {
                return given(newGivenArgs);
            }
        };
    };
  
    return given([]);
};