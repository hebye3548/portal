'use strict';
(function() {
    angular.module('App').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            //$locationProvider.html5Mode(false);
            //$urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'view/login.html',
                    controller: 'LoginCtrl',
                    resolve: {
                        loadResource: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'css/login.css',
                                'js/login.js',
                            ]);
                        }]
                    }
                })
                .state('container', {
                    templateUrl: 'view/container.html',
                    //controller:'ContainerCtrl',
                    resolve: {
                        loadResource: ['$ocLazyLoad', function($ocLazyLoad) {
                            $ocLazyLoad.load([
                                'css/container.css',
                                'js/container.js',
                                'js/sidebar.js'
                            ]);
                        }]
                    }
                })
                .state('container.index', {
                    url: '/index',
                    templateUrl: 'view/index.html',
                    controller:'IndexCtrl',
                    resolve: {
                        loadResource: ['$ocLazyLoad', function($ocLazyLoad) {
                            $ocLazyLoad.load([
                                'css/index.css',
                                'js/index.js',
                                'js/sidebar.js'
                            ]);
                        }]
                    }
                })
                .state('container.monitor',{
                    url:'/monitor',
                    templateUrl:'view/monitor.html',
                    //contrller:'monitorCtrl',
                    resolve:{
                        loadResource:['$ocLazyLoad',function($ocLazyLoad){
                            $ocLazyLoad.load([
                                'js/monitor.js',
                                'js/monitor.css'
                            ]);
                        }]
                    }
                });
             /*   .state('main.damddos',{
                    url:'/main/damddos',
                    templateUrl:'view/damddos.html',
                    controller:'DamddosCtrl',
                    resolve:{
                        loadResource:['$ocLazyLoad',function($ocLazyLoad){
                            $ocLazyLoad.load([
                                'css/damddos.css',
                                'js/damddos.js'
                            ]);
                        }]
                    }
                });*/
        }
    ]);
})();
