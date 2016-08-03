(function(global, undefined) {  
    'use strict'; 
    global.DishViewModel = function(name, photoUrl, amount, price, category) {
        this.name = name;
        this.photoUrl = photoUrl;
        this.amountDishes = ko.observable(amount);
        this.price = price;
        this.category = category;
        this.added = ko.observable(false);
    };
})(this);
