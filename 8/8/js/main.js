(function (global, undefined) {
    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/pizza', {
                templateUrl: 'templates/readyPizza.html',
                controller: 'pizzaController'
            })
            .when('/constructor', {
                templateUrl: 'templates/constructor.html',
                controller: 'pizzaConstructorController'
            })
            .otherwise({ redirectTo: '/pizza' })
    });

    app.controller('pizzaController', ['$scope', '$http', function ($scope, $http) {

        $http.get('json/readyPizza.json').success(function(data) {
            $scope.readyPizzaList = data;
        });
    }]);

    app.controller('pizzaConstructorController', ['$scope', '$http', function ($scope, $http) {
        $http.get('json/ingredients.json').success(function (data) {
            $scope.ingredients = data;
        });
    }]);
})(this);