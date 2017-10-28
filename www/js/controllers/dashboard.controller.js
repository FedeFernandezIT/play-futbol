(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.inject = ['nameApp'];
    function ControllerController(nameApp) {
        var vm = this;
        vm.nameApp = nameApp
        vm.showMatch = false;

        vm.showMatch = false;
        vm.currentMatch = null;
        
        vm.getMatches = fetchMatches;
        vm.goMatch =  viewMatch;

        activate();

        function activate() { };

        function fetchMatches() {
            return matches;
        };

        function viewMatch (id) {
            console.log('init go');
            var current = matches[id];
            this.currentMatch = current;
            this.showMatch = true;
            console.log(current.title);
            console.log('finish go');
            return current;                
        };
    }
})();