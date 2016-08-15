(function(app, undefined) {
    'use strict';
    app.controller('orderHistoryController', ['$scope', '$http', '$window', 'orderHistoryService','cartData', function($scope, $http, $window, orderHistoryService, cartData) {
        $scope.data = orderHistoryService.getOrderList();
        
        $scope.response = {};
        $scope.repeatOrder = function(order) { 
            $http.post("postAnswer.php", order).success(function (response) {
                $scope.response = response;
            }).error(function(response, status) {
                alert(status);
            });
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