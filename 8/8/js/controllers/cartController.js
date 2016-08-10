(function(app, undefined) {
    app.controller('cartController', ['$scope', '$http', 'cartData', function($scope, $http, cartData) {
        $scope.data = cartData;
    }]);
})(app);