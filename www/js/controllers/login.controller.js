// LoginController definition
(function(){
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController)

    LoginController.$inject = ['$location'];

    function controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Inicie sesión de usuario'
        
        activate();

        function activate() { }
    }
})();