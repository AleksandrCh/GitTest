(function(global, undefined) {   
    global.ComplexLunchViewModel = function() {
        var self = this;
        
        self.dishes = [];
        self.cart = new CartViewModel(); 
        self.categories = [];
        
        self.chosenCategory;
        
        
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
        
        self.chooseCategoryHandler = function(category) {
            self.chosenCategory(category.dishes);
        };
        
        self.lookCartHandler = function(p) {
            console.log(self.cart.orders());
        }
        
        self.init = function (options) {
            self.categories = options.categoriesArray;
            self.chosenCategory = ko.observableArray(self.categories[0].dishes);
        }
    };

})(this);