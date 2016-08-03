(function(global, undefined) {   
    global.ComplexLunchViewModel = function() {
        var self = this;
        
        self.dishes = [];
        self.cart = new CartViewModel(); 
        
        self.increaseDishHandler = function() {
            var previousCount = this.amountDishes();
            this.amountDishes(previousCount + 1);
        };
        
        self.reduceDishHandler = function() {
            var previousCount = this.amountDishes();
            this.amountDishes(previousCount === 0 ? previousCount : previousCount - 1);
        };
        
        self.addDishInCartHandler = function(selectedDish) {
            if (selectedDish.amountDishes() > 0) {
                selectedDish.added(true);
                if (self.cart.orders.indexOf(selectedDish) !== -1) {
                    var index = self.cart.orders.indexOf(selectedDish);
                    console.log(index);
                    console.log(self.cart.orders()[index]);
                    self.cart.orders()[index].amountDishes(selectedDish.amountDishes());
                } else {
                    self.cart.orders.push(selectedDish);
                }
            }
        };
        
        self.makeOrderHandler = function() {   
            var answer = false;
            bootbox.confirm('Вы действительно хотите подтвердить заказ?', function(result) {
                if (result) {
                    location.reload();
                }
            }); 
        };
        
        self.init = function (options) {
            self.dishes = options.dishesArray;
        }
    };

})(this);