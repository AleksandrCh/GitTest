(function(app, undefined) {
    'use strict';
    app.service('httpService', ['$timeout', function($timeout) {
        
        this.post = function(url, data) {
            var probability = Math.random() * 100;
            if (probability > 20){
                $timeout(success, 500);
            } else {
                $timeout(error, 3000);
            }
        };
        
        var success = function() {
            bootbox.alert('Ваш заказ успешно принят');
        };
        
        var error = function() {
            bootbox.alert('Что-то пошло не так. Повторите заказ.');
        };
        
    }]);
})(app);