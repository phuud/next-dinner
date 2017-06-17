/**
 * Created by Luke on 2017/5/25.
 */

"use strict";
angular.module('nextDinnerApp')
  .controller('LoginCtrl', function ($scope, $timeout, $location) {
    $scope.main = {
      init: function () {
        this.title = 'Next OA';
      },
      flag:{
        isJoinTab:true,
        isLoginTab:false,
        showLoading:false
      },
      join: function () {
        var that = this;
        angular.element('.login-head p').css('left',320);
        $timeout(function () {
          angular.element('.login-box').addClass('login-act');
        }, 200);
        that.flag.isLoginTab = true;
        that.flag.isJoinTab = false;
      },
      submit: function () {
        var that = this;
        that.flag.showLoading = true;
        var name = $("#user_name").val();
        var pass = $("#password").val();
        AV.User.logIn(name, pass).then(function (loginedUser) {
          console.log(loginedUser);
          that.flag.showLoading = false;
          var username = loginedUser.getUsername();
          var email = loginedUser.getEmail();
          //alert("登录成功！");
          angular.element('.login-content').css('top','-250px');
          $timeout(function () {
            angular.element('.login-box').addClass('login-finish');
            $timeout(function () {
              angular.element('.login-box').addClass('login-finish');
                $location.path("/dinner");
            }, 2000);
          }, 500);
        }, function (error) {
          that.flag.showLoading = false;
          $("#user_name").val("");
          $("#password").val("");
          $(".login-box").removeClass('shake_effect');
          setTimeout(function () {
            $(".login-box").addClass('shake_effect');
          }, 1);
        });
      },
      register: function () {
        alert('未开放注册');
      }
    };
    $scope.main.init();
  });
