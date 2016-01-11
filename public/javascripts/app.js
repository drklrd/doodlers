var doodlers = angular.module('doodlers',['ui.router','ngMaterial']);
doodlers.config(function($stateProvider, $urlRouterProvider) {

  
    $urlRouterProvider.otherwise('/login');
    $stateProvider
	    .state("login", {
	      url: "/login",
	      templateUrl: "/loginrender",
	      controller : 'loginController as loginMethods'
	    })
	    .state("dash", {
	      url: "/dash/home",
	      templateUrl: "/dashhomerender",
	      controller : 'dashController as dashMethods'
	    })
    
});



doodlers.controller('loginController',['$state',function($state){

	this.login = function () {
		$state.go('dash')
	}


}]);

doodlers.controller('dashController',['$state',function($state){



}]);

