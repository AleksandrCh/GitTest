(function () {
    'use strict';

    angular.module('app').controller('main', main);

    function main() {
        var vm = this;
        vm.food = 'pizza';
    }

})();