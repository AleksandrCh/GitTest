(function (global, undefined){
	'use strict';
    global.FunctionModule = function() {
    	var patrial,
    		curry,
    		linearFold,
    		linearUnfold,
    		map,
    		filter,
    		averageOfEvenNumber,
    		sumOfRandomNumbers,
    		first,
    		lazyEval,
    		momorization;

    	return {
    		patrial: patrial,
    		curry: curry,
    		linearFold: linearFold,
    		linearUnfold: linearUnfold,
    		map: map,
    		filter: filter,
    		averageOfEvenNumber: averageOfEvenNumber,
    		sumOfRandomNumbers: sumOfRandomNumbers,
    		first: first,
    		lazyEval: lazyEval,
    		momorization: momorization
    	};
    };
})(this);