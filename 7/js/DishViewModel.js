 (function(global, undefined) {   
    global.DishViewModel = function(name, photoUrl, amount, price) {
        this.name = name;
        this.photoUrl = photoUrl;
        this.amountDishes = ko.observable(amount);
        this.price = price;
        this.added = ko.observable(false);
    };
})(this);
