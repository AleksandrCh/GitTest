(function(global, undefined) {
    'use strict';
    global.TestModule = function() {
    
        var areEqual = function(functionName, expectedResult, actualResult) {
            if (expectedResult === actualResult) {
                console.log(functionName + ': success!');
            } else {
                console.log(functionName + ': failed! Expected result: ' + expectedResult + ', Actual result: ' + actualResult);
            }
        };
        
        var areEqualArrays = function(functionName, expectedResult, actualResult) {
            if (expectedResult.length !== actualResult.length) {
                console.log(functionName + ': failed! Expected result length: ' + expectedResult.length + ', Actual result length: ' + actualResult.length);
                return;
            }
            
            
            for (var i = 0, len = expectedResult.length; i < len; i++) {
                if (expectedResult[i] !== actualResult[i] ) {
                    console.log(functionName + ': failed! Expected result: ' + expectedResult + ', Actual result: ' + actualResult);
                    return;
                }
            }

            console.log(functionName + ': success!');
        };

        var partialTest = function() {
            function add(a, b, c, d) {
                return a + b + c + d;
            };
            var expectedResult = 10,
                actualResult = 0,
                f = functionModule.partial(add, 1, 2);
            actualResult = f(3, 4);

            areEqual('partialTest', expectedResult, actualResult);
        };
        
        var curryTest = function() {
            function add(a, b, c, d) {
                return a + b + c + d;
            };
            var expectedResult = 10,
                actualResult = 0,
                f = functionModule.curry(add),
                f1 = f(1),
                f2 = f1(2),
                f3 = f2(3),
                result = f3(4);
            actualResult = result;

            areEqual('curryTest', expectedResult, actualResult);
        };
    
        var linearFoldTest = function() {

            var expectedResult = 'sasha',
                actualResult;
            
            actualResult = functionModule.linearFold(['s', 'a', 's', 'h', 'a'], function(a, b) {
                return a + b;
            }, '');

            areEqual('linearFoldTest', expectedResult, actualResult);
        };
        
        var linearUnfoldTest = function() {
            var expectedResult = 10,
                actualResult;
            
            actualResult = (functionModule.linearUnfold(function(a) {
                if (a[0] >= 9) {
                    a[0] = false;
                    return a;
                } 
                a[0] += 1;
                a[1] = Math.floor(Math.random() * (5 + 1));
                return a;
            }, 0)).length;
            
            areEqual('linearUnfoldTest', expectedResult, actualResult);
        };
        
        var mapTest = function() {
            var array = [1, 2, 3, 4, 5],
                expectedResult = [1, 4, 9, 16, 25],
                actualResult = functionModule.map(array, function(a) {
                    return a * a;
                });
            
            areEqualArrays('mapTest', expectedResult, actualResult);
        }
        
        var filterTest = function() {
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 0],
                expectedResult = [2, 4, 6, 8, 10, 0],
                actualResult = functionModule.filter(array, function(a) {
                    return a % 2 === 0;
                });
            
            areEqualArrays('filterTest', expectedResult, actualResult);
        }
        
        var averageOfEvenNumbersTest = function() {
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 15, 0],
                expectedResult = 4,
                actualResult = functionModule.averageOfEvenNumbers(array);
            
            areEqual('averageOfEvenNumbersTest', expectedResult, actualResult);
        }
        
        var sumOfRandomNumbersTest = function() {
            var expectedResult = 'number',
                actualResult = typeof functionModule.sumOfRandomNumbers(12);
            
            areEqual('sumOfRandomNumbersTest', expectedResult, actualResult);
        }
        
        var firstTest = function() {
            var array = [90, 2, 'sasha', 25, 5],
                expectedResult = 'sasha',
                actualResult = functionModule.first(array, function(a) {
                    return typeof a === 'string';
                });
            
            areEqual('firstTest', expectedResult, actualResult);
        }
        
        var lazyEvalTest = function() {
            var add = function(a, b) { return a + b; },
                func = functionModule.lazyEval(add, 4, 5),
                expectedResult = 9,
                actualResult = func();
            
            areEqual('lazyEvalTest', expectedResult, actualResult);
        }
        
        var memorizationTest = function() {
            var add = function(a, b) { return a + b; },
                func = functionModule.memorization(add, 40, 50),
                expectedResult = 90,
                actualResult = func();
            
            areEqual('memorizationTest', expectedResult, actualResult);
        }
        
        return {
            partialTest: partialTest,
            curryTest: curryTest,
            linearFoldTest: linearFoldTest,
            linearUnfoldTest: linearUnfoldTest,
            mapTest: mapTest,
            filterTest: filterTest,
            averageOfEvenNumbersTest: averageOfEvenNumbersTest,
            sumOfRandomNumbersTest: sumOfRandomNumbersTest,
            firstTest: firstTest,
            lazyEvalTest: lazyEvalTest,
            memorizationTest: memorizationTest
        };
    };
})(this);