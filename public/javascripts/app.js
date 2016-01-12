var doodlers = angular.module('doodlers',['ui.router','ngMaterial']);
doodlers.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  	$httpProvider.interceptors.push('authInterceptor');
  	

    $urlRouterProvider.otherwise('/login');
    $stateProvider
    	.state("signup", {
    	  url: "/signup",
    	  templateUrl: "/signuprender",
    	  controller : 'signUpController'
    	})
	    .state("login", {
	      url: "/login",
	      templateUrl: "/loginrender",
	      controller : 'loginController'
	    })
	    .state("dash", {
	      url: "/dash/home",
	      templateUrl: "/dashhomerender",
	      controller : 'dashController'
	    })

    
});


doodlers.factory('authInterceptor', function($rootScope, $q, $window) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      if ($window.localStorage.doodlersToken) {
        config.headers.Authorization = 'Bearer ' + $window.localStorage.doodlersToken;
      }
      return config;
    },
    response: function(response) {
      if (response.status === 401) {
        alert('Please Login');
        $window.location.replace('/#/login');
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        alert('Please Login');
        $window.location.replace('/#/login');
      }
    }
  };
});


doodlers.controller('loginController',['$state','$http','$scope','$window',function($state,$http,$scope,$window){

	$scope.user = {};

	if($window.localStorage.doodlersToken){
		$window.location.replace('/#/dash/home');
		return;
	}else{
		$scope.loginResponse = {
			status:false,
			message : 'waiting'
		};
	}

	
	$scope.login = function () {
		var apiUrl = '/authenticate';
		$http.
			post(apiUrl,$scope.user).
				success(function(data){
					if(data.success && !data.error){
						$scope.header.loggedIn=true;
						$window.localStorage.doodlersToken = data.data.token;

						$state.go('dash');
					}else{
						$scope.loginResponse = {
							status : true,
							message : data.message || data.error_msg
						};

					}
				})
	}


}]);

doodlers.controller('dashController',['$state','$scope','$http',function($state,$scope,$http){

	$scope.fetchPosts = function () {
		$http.
			get('/users/posts/fetch').
				success(function(data){
					if(data.success && !data.error){
						$scope.posts=[];
						$scope.posts = data.posts;
					}
				})
	}

	$scope.fetchPosts();
	
	$scope.newpost={};

	$scope.newPost = function () {

		$http.
			post('/users/posts/new',$scope.newpost).
				success(function(data){
					if(data.success){
						$scope.fetchPosts();
						
					}
				})
	}




}]);

doodlers.controller('headerController',['$scope','$window',function($scope,jhyal){

	if(jhyal.localStorage.doodlersToken){
		$scope.header = {
			loggedIn:true
		};
	}else{
		$scope.header = {
			loggedIn:false
		};
	}

	

	$scope.logOut = function () {
		delete jhyal.localStorage.doodlersToken;

		$scope.header = {
			loggedIn:false
		};

		jhyal.location.replace('/#/login');
	}


}]);

doodlers.controller('signUpController',['$state','$scope','$http',function($state,$scope,$http){

	

	$scope.signUp = function () {

		$http.
			post('/common/create/new',$scope.user).
				success(function(data){
					$scope.loginResponse = {
						status : true,
						message : data.message || data.error_msg
					};
				})
	}




}]);

