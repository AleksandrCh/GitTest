(function(global, ko, undefined) { 
    'use strict';
    global.ComplexLunchViewModel = function() {
        var self = this;
        
        self.dishes = [];
        self.cart = new CartViewModel(); 
        self.categories = [];
        self.chosenCategory;
        self.display = ko.observable(false);
        
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
        
        self.lookCartHandler = function() {
            if(self.display() === true) {
                self.display(false);
            } else {
                self.display(true);
            }
        };
        
        self.deleteChosenDishHandler = function(selectedDish) {
            self.cart.orders.remove(selectedDish);
            selectedDish.added(false);
            selectedDish.amountDishes(0);
        };
        
        self.pageClickHandler = function(p) {
            console.log(p);
        };
        
        self.init = function (options) {
            self.categories = ko.observableArray(options.categoriesArray);
            self.chosenCategory = ko.observableArray(self.categories()[0].dishes);
        }
    };

})(this, ko);