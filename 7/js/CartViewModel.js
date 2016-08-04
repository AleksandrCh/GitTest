(function(global, undefined) { 
    'use strict';
    global.CartViewModel = function() {
        var self = this;
        var orders = self.orders = ko.observableArray();
        
        self.overallCost = ko.pureComputed(function() {
            var total = 0;
                for (var i = 0; i < orders().length; i++) {
                    total += orders()[i].amountDishes() * parseFloat(orders()[i].price);
                }
    
            return total + ' p.';
        });
    };
})(this);