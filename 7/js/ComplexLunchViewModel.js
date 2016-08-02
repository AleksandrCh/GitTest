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
            this.amountDishes(previousCount - 1);
        };
        
        self.addDishInCartHandler = function(selectedDish) {
            if (selectedDish.amountDishes() > 0) {
                selectedDish.added(true);
                self.cart.orders.push(selectedDish);
            }
        };
        
        self.makeOrderHandler = function() {
            var answer = confirm('Вы действительно хотите сделать заказ?');
            
            if (answer) {
                return true;
            }
            
            return false;
        };
        
        self.init = function (options) {
            self.dishes = options.dishesArray;
        }
    };

})(this);