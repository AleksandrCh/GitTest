(function (global, undefined) {
    global.app = angular.module('app', ['ngRoute']);

    
    
    app.factory('cartData', function(){
        return { 
            cart: [],
            overallCost: 0,
            calculateOveralCost: function(cart) {
                var cost = 0;
                for (var i = 0, max = cart.length; i < max; i++) {
                    cost+=(cart[i].price * cart[i].amount);
                }
                return cost;
            },
            removePizzaFromCart: function(data, pizza) {
                data.cart.remove(pizza);
            }
        };
    });
    
})(this);