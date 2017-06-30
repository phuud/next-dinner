'use strict';

/**
 * @ngdoc overview
 * @name nextDinnerApp
 * @description
 * # nextDinnerApp
 *
 * Main module of the application.
 */
angular
  .module('nextDinnerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .run(function ($rootScope,$route,$location,LEANCLOUD_APP_ID,LEANCLOUD_APP_KEY) {
    var APP_ID = LEANCLOUD_APP_ID;
    var APP_KEY = LEANCLOUD_APP_KEY;
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });

    $rootScope.VERSION = '1.0';
    $rootScope.flag = {
      isLogin:false
    };
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      $rootScope.next = next;
      $rootScope.nowPath = next.$$route.originalPath;
    });
    $rootScope.$on('$routeChangeSuccess', function (event) {
      console.log($route,$location);
      if ($location.path() === '/login' || $location.path() === '/') {
        angular.element('.header').addClass('login-hide');
        angular.element('.footer').addClass('login-hide');
      } else {
        angular.element('.header').removeClass('login-hide');
        angular.element('.footer').removeClass('login-hide');
      }
      var currentUser = AV.User.current();
      if (currentUser) {
        console.log('login in');
        if ($location.path() === '/login' || $location.path() === '/') {
          $location.path("/overview");
        }
      } else if($location.path() !== '/login' && $location.path() !== '/') {
        console.log('not login');
        alert('not login');
        $location.path("/");
      }
    });
  })
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl',
        controllerAs: 'overview'
      })
      .when('/cat', {
        templateUrl: 'views/cat.html',
        controller: 'CatCtrl',
        controllerAs: 'cat'
      })
    .when('/dinner', {
      templateUrl: 'views/dinner.html',
      controller: 'DinnerCtrl',
      controllerAs: 'dinner'
    })
    .when('/help', {
      templateUrl: 'views/help.html'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
