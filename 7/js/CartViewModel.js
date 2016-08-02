(function(global, undefined) {       
    global.CartViewModel = function() {
        var self = this;
        self.orders = ko.observableArray();
        
        self.overallCost = ko.observable('0p.');
        
        self.orders.subscribe(function() {
            var total = 0;
            for (var i = 0; i < self.orders().length; i++) {
                total += self.orders()[i].amountDishes() * parseFloat(self.orders()[i].price);
            }

            self.overallCost(total + 'p.');
        });
        
     /*   self.overallCost = ko.pureComputed({
            write: function (value) {
                var total = 0;
                for (var i = 0; i < self.orders().length; i++) {
                    total += self.orders()[i].amountDishes() * parseFloat(self.orders()[i].price);
                }
    
                self.overallCost(total + 'p.');
            },
            owner: this
        });*/
    }
})(this);