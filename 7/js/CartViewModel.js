(function(global, undefined) {       
    global.CartViewModel = function() {
        var self = this;
        self.orders = ko.observableArray();
        
        self.overallCost = ko.pureComputed(function() {
            var total = 0;
                for (var i = 0; i < self.orders().length; i++) {
                    total += self.orders()[i].amountDishes() * parseFloat(self.orders()[i].price);
                }
    
            return total + 'p.';
        });
    };
})(this);