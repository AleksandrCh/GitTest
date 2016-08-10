(function(app, undefined) {
    app.controller('pizzaConstructorController', ['$scope', '$http', function ($scope, $http) {
        $http.get('json/ingredients.json').success(function (data) {
            $scope.ingredients = data;
        });
    }]);
})(app);