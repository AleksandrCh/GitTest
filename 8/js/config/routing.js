(function(app, undefined) {
    'use strict';
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
            .when('/orderHistory', {
                templateUrl: 'templates/orderHistory.html',
                controller: 'orderHistoryController'
            })
            .when('/cart', {
                templateUrl: 'templates/cart.html',
                controller: 'cartController'
            })
            .otherwise({ redirectTo: '/pizza' });
    });
})(app);