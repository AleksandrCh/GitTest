(function(app, undefined) {
    'use strict';
    app.service('httpService', ['$http', '$q', function($http, $q) {
        
        this.getIngredients = function() {
            var deferred = $q.defer(),
                ingredient;
            $http.get('json/ingredients.json').success(function(data) {
                deferred.resolve(data);
            });
            
            return deferred.promise;
        };
        
        this.get = function(url, data) {
            var deferred = $q.defer();
            $http({method: 'GET', url: url}).
                success(function(data) {
                    deferred.resolve(data);
                }).
                error(function(data, status) {
                    deferred.reject(status);
                });
            
            return deferred.promise;
        };
        
        this.post = function() {
            
        };
        
    }]);
})(app);