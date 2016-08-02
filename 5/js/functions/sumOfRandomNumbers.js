(function (global, undefined){
	'use strict';
    global.functionModule = global.functionModule || {};

    functionModule.sumOfRandomNumbers = function(maxNumber) {
        if (maxNumber === undefined) {
            maxNumber = 1000;
        } else if (typeof maxNumber !== 'number') {
            throw new Error('Given parameter must have type Number');
        }
        
        function getRandomNumber(max) {
            return Math.floor(Math.random() * (max + 1));
        }
        
        function randomNumber(a) {
            if (a[0] > 9) {
                a[0] = false;
                return a;
            } 
            a[0] += 1;
            a[1] = getRandomNumber(maxNumber);
            return a;
        };
        
        var newArray = (functionModule.linearUnfold(randomNumber, 0));
        
        var sum = functionModule.linearFold(newArray, function(res, a, i, array) { return res + a; }, 0);
        
        return sum;
    };
})(this);