(function(app, undefined) {
    'use strict';
    app.controller('orderHistoryController', ['$scope', 'httpService', '$window', 'orderHistoryService','cartData', function($scope, httpService, $window, orderHistoryService, cartData) {
        $scope.data = orderHistoryService.getOrderList();
        
        $scope.response = {};
        $scope.repeatOrder = function(order) { 
            httpService.post("postAnswer.php", order);
        };
        
        $scope.editOrder = function(order) {
            var answer = false;
            bootbox.confirm('Подтверждение действия приведёт к очистке корзины. Хотите продолжить?', function(result) {
                if (result) {
                    cartData.overallCost = order.overallCost;
                    cartData.cart = order.cart;
                    $window.location.href = '/#/cart';
                }
            }); 
        };
    }]);
})(app);