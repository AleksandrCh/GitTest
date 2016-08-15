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
        
    }]);
})(app);