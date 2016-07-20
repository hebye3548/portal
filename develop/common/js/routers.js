'use strict';
(function() {
	angular.module('App').config(['$stateProvider','$urlRouterProvider','$locationProvider',
		function($stateProvider,$urlRouterProvider,$locationProvider){
			//$locationProvider.html5Mode(false);
			//$urlRouterProvider.otherwise('/login');

			$stateProvider
				.state('login',{
					url:'/login',
					templateUrl:'view/login.html',
					controller:'LoginCtrl',
					resolve:{
						loadResource:['$ocLazyLoad',function($ocLazyLoad){
							return $ocLazyLoad.load([
								'css/login.css',
								'js/login.js',
								]);
						}]
					}
				})
				.state('index',{
					url:'/index',
					templateUrl:'module/index/view/index.html',
					/*controller:'LoginCtrl',
					controllerAs:'loginCtrl',*/
					resolve:{
						loadResource:['$ocLazyLoad',function($ocLazyLoad){
							$ocLazyLoad.load([
								'css/index.css',
								'js/index.js',
								]);
						}]
					}
				});
		}
	]);
})();