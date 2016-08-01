var Dish = function(name, photoUrl, amount, price) {
    this.name = name;
    this.photoUrl = photoUrl;
    this.amount = ko.obversable(amount);
    this.price = price;
}