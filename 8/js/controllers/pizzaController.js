(function(app, undefined) {
    'use strict';
    app.controller('pizzaController', ['$scope', '$http', 'pizzaService', 'cartData', function ($scope, $http, pizzaService, cartData) {
        
        var promiseObj = pizzaService.getPizza();
        promiseObj.then(function(value) { 
            $scope.readyPizzaList = value;
        });

        $scope.pizzaReduce = function (pizza) {
            if (pizza.amount > 0) {
                pizza.amount--;
            }
        };

        $scope.pizzaIncrease = function (pizza) {
            if (pizza.amount < 99) {
                pizza.amount++;
            }
        };
        
        $scope.addPizzaToCart = function (pizza) {
            var index;
            if (pizza.amount != 0) {
                if ((index = cartData.cart.indexOf(pizza)) == -1) {
                    cartData.cart.push(pizza);
                    cartData.cart = Array.prototype.slice.call(cartData.cart, 0);
                } else {
                    cartData.cart[index].amount = pizza.amount;
                }
            }
            cartData.overallCost = cartData.calculateOveralCost(cartData.cart);
        };
        
        var calculateOveralCost = function(cart) {
            var cost = 0;
            for (var i = 0, max = cart.length; i < max; i++) {
                cost+=(cart[i].price * cart[i].amount);
            }
            return cost;
        };     
        
    }]);
})(app);