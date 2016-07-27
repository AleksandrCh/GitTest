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

            var expectedResult = 'sasha',
                actualResult;
            
            actualResult = functionModule.linearFold(['s', 'a', 's', 'h', 'a'], function(a, b) {
                return a + b;
            }, '');

            areEqual('linearFoldTest', expectedResult, actualResult);
        };
        
        return {
            partialTest: partialTest,
            curryTest: curryTest,
            linearFoldTest: linearFoldTest,
            linearUnfold: linearUnfoldTest
        };
    };
})(this);