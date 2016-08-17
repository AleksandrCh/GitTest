(function(global, undefined) {  
    'use strict'; 
    global.DishViewModel = function(name, photoUrl, amount, price, category) {
        self = this;
        self.name = name;
        self.photoUrl = photoUrl;
        self.price = price;
        self.category = category;
        self.amountDishes = ko.observable(amount);
        self.added = ko.observable(false); 
    };
})(this);
