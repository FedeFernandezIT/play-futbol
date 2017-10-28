// Route config
angular
    .module('app')
    .config(routing);


function routing($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl: '../views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',        
    })
    .when('/login', {
        templateUrl: '../views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',        
    })
    .when("/dashboard", {
        templateUrl: '../views/dashboard.html',
        controller: "DashboardController",
        controllerAs: 'vm'
    })
    .when("/match", {
        templateUrl: '../views/match.html',
        controller: "MatchController",
        controllerAs: 'vm'
    });
  
}
