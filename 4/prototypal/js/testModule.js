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

        var dotTest = function() {
            var dot = new Dot('Dot', 1, 10);

            var expectedResult = 'Dot',
            actualResult = dot.draw();

            areEqual('dotTest', expectedResult, actualResult);
        };

        var circleTest = function() {
            var circle = new Circle('Circle', 1, 10);

            var expectedResult = 'Circle',
                actualResult = circle.draw();

            areEqual('circleTest', expectedResult, actualResult);
        }
    
        return {
            dotTest: dotTest,
            circleTest: circleTest
        };
    };
})(this);