(function(app, undefined) {
    app.controller('pizzaConstructorController', ['$scope', '$http', 'cartData', function ($scope, $http, cartData) {
        $http.get('json/ingredients.json').success(function (data) {
            $scope.ingredients = data;
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
                name: pizzaName,
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
            
            console.log(cartData.cart);  
        };
        
        $scope.onlyNumbers = function(event) {
            if (event.keyCode == 8 || 
                event.keyCode == 9 || 
                event.keyCode == 13 || 
                event.keyCode == 27 || 
                event.keyCode == 46 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            }
            else {
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && 
                    (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
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