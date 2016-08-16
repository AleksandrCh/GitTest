(function(app, undefined) {
    'use strict';
    app.controller('cartController', ['$scope', 'httpService', 'orderHistoryService', 'cartData', function($scope, httpService, orderHistoryService, cartData) {
        $scope.data = cartData;
        
        $scope.pizzaReduce = function(pizza) {
            if (pizza.amount > 0) {
                pizza.amount--;
                cartData.overallCost = cartData.calculateOveralCost(cartData.cart);
            }  
        };
        
        $scope.pizzaIncrease = function(pizza) {
            if (pizza.amount < 99) {
                pizza.amount++;
                cartData.overallCost = cartData.calculateOveralCost(cartData.cart);
            }
        };
        
        $scope.deletePizzaFromCart = function(pizza) {
            var index = $scope.data.cart.indexOf(pizza);
            $scope.data.cart.splice(index, 1);
            cartData.overallCost = cartData.calculateOveralCost(cartData.cart);
        };
        
        $scope.response = {};
        $scope.doOrder = function(orderData) {
            if (orderData.cart.length != 0) {
                var order = {
                    date: new Date(),
                    orderList: orderData,
                    totalPrice: cartData.overallCost
                }; 
                
                httpService.post("postAnswer.php", order);
                
                orderHistoryService.addOrder(order);
            }
        };
    }]);
})(app);