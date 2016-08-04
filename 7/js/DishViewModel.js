(function(global, undefined) {  
    'use strict'; 
    global.DishViewModel = function(name, photoUrl, amount, price, category) {
        self = this;
        self.name = name;
        self.photoUrl = photoUrl;
        self.amountDishes = ko.observable(amount);
        self.price = price;
        self.category = category;
        self.added = ko.observable(false); 
    };
})(this);
