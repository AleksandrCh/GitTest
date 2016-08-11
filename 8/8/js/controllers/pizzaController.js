(function(app, undefined) {
    app.controller('pizzaController', ['$scope', '$http', 'pizzaService', 'cartData', function ($scope, $http, pizzaService, cartData) {
        
        /*$http.get('json/readyPizza.json').success(function(data) {
                $scope.readyPizzaList = data;
        }); */ 
        
        var promiseObj = pizzaService.getPizza();
        promiseObj.then(function(value) { 
            $scope.readyPizzaList = value;
        });

        //$scope.readyPizzaList = pizzaService.getPizza();
        
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
            if ((index = cartData.cart.indexOf(pizza)) == -1) {
                cartData.cart.push(pizza);
            } else {
                cartData.cart[index].amount = pizza.amount;
            }
            cartData.overallCost = cartData.calculateOveralCost(cartData.cart);
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
        
        var calculateOveralCost = function(cart) {
            var cost = 0;
            for (var i = 0, max = cart.length; i < max; i++) {
                cost+=(cart[i].price * cart[i].amount);
            }
            return cost;
        };     
        
    }]);
})(app);