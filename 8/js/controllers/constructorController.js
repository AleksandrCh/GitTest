(function(app, undefined) {
    'use strict';
    app.controller('pizzaConstructorController', ['$scope', '$http', 'constructorService', 'cartData', function ($scope, $http, constructorService, cartData) {
        var promiseObj = constructorService.getIngredients();
        promiseObj.then(function(value) { 
            $scope.ingredients = value;
        });
        
        $scope.totalPrice = 6.5;
        $scope.totalWeight = 100;
        $scope.customPizzaName = '';
             
        $scope.increaseIngredient = function(ingredient) {
            if (ingredient.amount < 99) {
                ingredient.amount++;
            }
            calculateTotalInfo($scope.ingredients);
        };
        
        $scope.reduceIngredient = function(ingredient) {
            if (ingredient.amount > 0) {
                ingredient.amount--;
            }
            calculateTotalInfo($scope.ingredients);
        };
        
        $scope.addCustomPizzaToCart = function(pizzaName) {
            var customPizza = {
                name: pizzaName == '' ? 'Custom pizza' : pizzaName,
                price: $scope.totalPrice,
                weight: $scope.totalWeight,
                amount: 1
            };
            
            if (cartData.cart.indexOf(customPizza) == -1) {
                cartData.cart.push(customPizza);
            } else {
                return;
            }
            cartData.overallCost = cartData.calculateOveralCost(cartData.cart);
        };
        
        var calculateTotalInfo = function(ingredients) {
            var price = 6.5,
                weight = 100;
            for (var i = 0, max = ingredients.length; i < max; i++) {
                if (ingredients[i].amount > 0) {
                    price += (ingredients[i].price * ingredients[i].amount);
                    weight += (ingredients[i].weight * ingredients[i].amount);
                }
            }
            $scope.totalPrice = price;
            $scope.totalWeight = weight;
        };
        
    }]);
})(app);