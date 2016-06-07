(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial','ngMdIcons'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider.state('Splash',{
			url: '/',
			templateUrl: 'views/Splash.html'
		}).state('Login', {
	    url: '/login',
	    templateUrl: '/views/LoginReg.html'
	  }).state('Home', {
	    url: '/home',
	    templateUrl: '/views/Home.html'
	  }).state('About', {
	    url: '/about',
	    templateUrl: '/views/About.html'
	  }).state('Profile', {
	    url: '/profile',
	    templateUrl: '/views/Profile.html'
	  })
		;
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');

	}
})();
