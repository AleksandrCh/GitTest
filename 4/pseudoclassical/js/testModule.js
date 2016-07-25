(function(global, undefined) {
    'use strict';
    global.TestModule = function() {
    
        var test = function(Child, Parent) {
                        var dot = new Dot('Dot', 1, 10);
            console.log(dot.draw());
        }
    
        return {
            test: test
        };
    };
})(this);