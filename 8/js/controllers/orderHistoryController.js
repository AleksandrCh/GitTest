(function(app, undefined) {
    'use strict';
    app.controller('orderHistoryController', ['$scope', '$http', 'orderHistoryService','cartData', function($scope, $http, orderHistoryService, cartData) {
        $scope.data = orderHistoryService.getOrderList();
        
        $scope.response = {};
        $scope.repeatOrder = function(order) {
            console.log(order);
            $http.post("postAnswer.php", order).success(function (response) {
                $scope.response = response;
            });
        };
    }]);
})(app);