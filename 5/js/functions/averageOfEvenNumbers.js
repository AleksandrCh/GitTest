(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};
    
    functionModule.averageOfEvenNumbers = function(array) {
        if (!(array instanceof Array))
            throw new Error('Given parameter must be an array.');
        
        var amount = 0,
            sum = 0,
            newArray = [];
        
        newArray = functionModule.filter(array, function(a) { return a % 2 === 0; });
        amount = newArray.length;
        sum = functionModule.linearFold(newArray, function(res, a) { return res + a; }, 0);
        
        
        
        return amount === 0 ? null : sum / amount;
    };
})(this);


