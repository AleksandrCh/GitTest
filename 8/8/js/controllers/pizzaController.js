(function(app, undefined) {
    app.controller('pizzaController', ['$scope', '$http', 'cartData', function ($scope, $http, cartData) {

        $http.get('json/readyPizza.json').success(function(data) {
            $scope.readyPizzaList = data;
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
            if ((index = cartData.cart.indexOf(pizza)) == -1) {
                cartData.cart.push(pizza);
            } else {
                cartData.cart[index].amount = pizza.amount;
            }
            cartData.overallCost = calculateOveralCost(cartData.cart);
            console.log(cartData.overallCost);
        };
        
        var calculateOveralCost = function(cart) {
            var cost = 0;
            for (var i = 0, max = cart.length; i< max; i++) {
                cost+=(cart[i].price * cart[i].amount);
            }
            return cost;
        };     
        
    }]);
})(app);