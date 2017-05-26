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
    'ngTouch'
  ])
  .run(function ($rootScope,$route) {
    $rootScope.VERSION = '1.0';

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      $rootScope.next = next;
      $rootScope.nowPath = next.$$route.originalPath;
    });
    //$rootScope.$on('$routeChangeSuccess', function (event) {
    //  console.log($route);
    //
    //});
  })
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
