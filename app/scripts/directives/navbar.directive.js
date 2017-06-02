/**
 * Created by Luke on 2017/6/2.
 */

angular.module('nextDinnerApp')
  .directive('navbarDirective', function () {
    return {
      replace: true,
      restrict: 'ACE',
      templateUrl:'views/navbar.html',
      link: function ($scope) {
        $scope.navbar = {
          title:'navbar'
        };
      }
    };
  });
