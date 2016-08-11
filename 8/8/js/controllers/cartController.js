(function(app, undefined) {
    app.controller('cartController', ['$scope', '$http', 'cartData', function($scope, $http, cartData) {
        $scope.data = cartData;
        
        $scope.pizzaReduce = function(pizza) {
            if (pizza.amount > 0) {
                pizza.amount--;
            }  
        };
        
        $scope.pizzaIncrease = function(pizza) {
            if (pizza.amount < 99) {
                pizza.amount++;
            }
        };
        
        $scope.deletePizzaFromCart = function(pizza) {
            cartData.removePizzaFromCart(cartData, pizza);
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
        
    }]);
})(app);