(function(app, undefined) {
    'use strict';
    app.service('orderHistoryService', ['$cookies', function($cookies) {   
        this.addOrder = function(order) {
            if ($cookies.getObject('orderHistory') == undefined) {
                $cookies.putObject('orderHistory', []);
            }
            var obj = $cookies.getObject('orderHistory');
            obj.push(order);
            $cookies.putObject('orderHistory', obj);
        };
        
        this.getOrderList = function() {
            return $cookies.getObject('orderHistory');
        };
        
    }]);
})(app);