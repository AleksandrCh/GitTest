(function (global, undefined) {
    global.app = angular.module('app', ['ngRoute']);

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
            .otherwise({ redirectTo: '/pizza' });
    });
    
    app.run(function($rootScope, $templateCache) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if (typeof(current) !== 'undefined') {
                $templateCache.remove(current.templateUrl);
            }
        })
    });
    
    app.factory('cartData', function(){
        return { 
            cart: [],
            overallCost: 0
        };
    });

    app.controller('cartController', ['$scope', '$http', 'cartData', function($scope, $http, cartData) {
        $scope.data = cartData;
    }]);
    
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
})(this);