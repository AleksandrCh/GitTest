(function(app, undefined) {
    'use strict';
    app.service('orderHistoryService', ['$window', function($window) { 
        this.addOrder = function(order) {
            if (!supportsHtml5Storage()) return alert(2123);
            
            var obj;
            
            if ($window.localStorage.getItem('orderHistory') == null) {
                obj = { "order": []};
                obj = JSON.stringify(obj);
                $window.localStorage.setItem('orderHistory', obj);
            }
            
            obj = $window.localStorage.getItem('orderHistory');
            obj = JSON.parse(obj);
            obj['order'].push(order);
            obj = JSON.stringify(obj);
            $window.localStorage.setItem('orderHistory', obj);
        };
        
        this.getOrderList = function() {
            if (!supportsHtml5Storage()) return alert(2123);

            if ($window.localStorage.getItem('orderHistory') != null) {
                var obj = JSON.parse($window.localStorage.getItem('orderHistory'));
                return obj.order;
            }
            return [];
        };
        
        var supportsHtml5Storage = function() {
            try {
                return 'localStorage' in $window && $window.localStorage !== null;
            } catch (e) {
                return false;
            }
        }
        
    }]);
})(app);