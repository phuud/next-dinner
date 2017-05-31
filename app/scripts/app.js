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
    var APP_ID = 'TODO';
    var APP_KEY = 'TODO';
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });

    $rootScope.VERSION = '1.0';

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

      //Test start
      var query = new AV.Query('next_user');
      query.get('id').then(function (data) {
        console.log(data);
        // 成功获得实例
      }, function (error) {
        // 异常处理
      });
      //Test end

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
      .otherwise({
        redirectTo: '/'
      });
  });
