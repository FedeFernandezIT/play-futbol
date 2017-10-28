// MainController definition.
(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    controller.$inject = ['$location'];

    function MainController($location) {
        var vm = this;
        vm.title = "Play Fútbol";
        vm.currentView = loginView;
        vm.loginView = loginView;
        vm.showView = showView;
        vm.dashboardView = dashboardView;                
    };
})();