// MatchController definition
(function() {
    'use strict';

    angular
        .module('app')
        .controller('MatchController', MatchController);

    MatchController.$inject = ['match'];
    
    function MatchController(match) {
        var vm  = this;           
        vm.match = match;
         
        vm.postGol = proccessGol;
        vm.postCard = proccessCard;
        vm.postRound = proccessRound;
        vm.postSnapshot = snapshot;
    };
})();