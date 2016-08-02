(function(global, undefined) {   
    global.ComplexLunchViewModel = function() {
        var self = this;
        var confirm = $( '#b1' ).interfaceBlocker({ text: 'Вы действительно хотите сделать заказ?' });
        
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
            $('.interface-blocker-overlay').find('.interface-blocker-button-ok').click(function(e) {
                confirm = true;
            });
            $('.interface-blocker-overlay').find('.interface-blocker-button-cancel').click(function(e) {
                confirm = false;
            });
            
            if (confirm) {
                return true;
            }
            
            return false;
        };
        
        self.init = function (options) {
            self.dishes = options.dishesArray;
        }
                
    };

})(this);