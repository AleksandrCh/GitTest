(function(global, undefined) { 
    'use strict';
    global.CartViewModel = function() {
        var self = this;
        self.orders = ko.observableArray();
        
        self.removeItem = function(item) {
            self.orders.remove(item);
        };
        
        self.addDishInOrders = function(dish) {
            var orders = self.orders();
            if (self.orders.indexOf(dish) !== -1) {
                var index = self.orders.indexOf(dish);
                    orders[index].amountDishes(dish.amountDishes());
            } else {
                self.orders.push(dish);
            }  
        };
        
        self.overallCost = ko.pureComputed(function() {
            var total = 0,
                orders = self.orders();
            
            for (var i = 0; i < orders.length; i++) {
                total += orders[i].amountDishes() * orders[i].price;
            }
    
            return total;
        });
    };
})(this);