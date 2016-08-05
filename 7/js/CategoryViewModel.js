(function(global, undefined) {
    'use strict'; 
    global.CategoryViewModel = function(name, dishes) {
        self = this;
        self.name = name;
        self.dishes = dishes;
    };
})(this);