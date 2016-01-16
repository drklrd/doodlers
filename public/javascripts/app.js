var doodlers = angular.module('doodlers',['ui.router','ngMaterial','colorpicker.module']);
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
	    }).
	    state("signupsuccessful",{
	    	url:'/signupsuccessful',
	    	templateUrl:'signupsuccessfulrenderer'
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
		$http.
			get('/verifytoken').
				success(function(data){
					if(data.success && !data.error){
						$window.location.replace('/#/dash/home');

					}else{
						delete $window.localStorage.doodlersToken;
						$window.location.replace('/#/login');


					}
				})
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
						if($scope.posts.length){
							$scope.posts.forEach(function(entry){
								entry.fromNow = moment(entry.created_at).fromNow();
							})
						}
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
						$scope.newpost={};
						
					}
				})
	};

	$scope.viewWhole = function (index) {

		$scope.posts[index].viewWhole=!$scope.posts[index].viewWhole;

	};

	$http.
		get('/users/profile/fetch').
			success(function(data){
				if(data.success ){
					angular.element('#header').css('background-color',data.profile.color_profile);
					$scope.loggedinuser.firstName = data.profile.first_name;
					$scope.loggedinuser.lastName = data.profile.last_name;

				}
			})




}]);

doodlers.controller('headerController',['$scope','$window',function($scope,jhyal){

	$scope.loggedinuser={};

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

		angular.element('#header').css('background-color','transparent');
		$scope.loggedinuser = {} ;
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

