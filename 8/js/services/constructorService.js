(function(app, undefined) {
    'use strict';
    app.service('constructorService', ['$http', '$q', function($http, $q) {
        
        this.getIngredients = function() {
            var deferred = $q.defer(),
                ingredient;
            $http.get('json/ingredients.json').success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                bootbox.alert('Произошла ошибка загрузки данных с сервера.');
            });;
            
            return deferred.promise;
        };
        
    }]);
})(app);