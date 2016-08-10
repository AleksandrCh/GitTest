(function (global, undefined) {
    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/pizza',
        {
            templateUrl: 'templates/readyPizza.html',
            controller: 'pizzaController'
        });
        $routeProvider.when('/constructor',
        {
            templateUrl: 'templates/constructor.html',
            controller: 'pizzaConstructorController'
        });
    });

    app.controller('pizzaController', ['$scope', '$http', function ($scope, $http) {

        $http.get('json/readyPizza.json').success(function(data) {
            $scope.readyPizzaList = data;
        });
    }]);

    app.controller('pizzaConstructorController', ['$scope', '$http', function ($scope, $http) {

    }]);
})(this);