/**
 * Created by Luke on 2017/5/25.
 */

"use strict";
angular.module('nextDinnerApp')
  .controller('LoginCtrl', function ($rootScope, $scope, $timeout, $location) {
    $scope.main = {
      init: function () {
        this.title = 'Next OA';
      },
      flag:{
        isJoinTab:true,
        isLoginTab:false,
        showLoading:false,
        isLoginMode:true,
        isRegisterMode:false
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
          localStorage.setItem(username,username);
          $rootScope.userName = username;
          //alert("登录成功！");
          angular.element('.login-content').css('top','-250px');
          $timeout(function () {
            angular.element('.login-box').addClass('login-finish');
            $timeout(function () {
              angular.element('.login-box').addClass('login-finish');
                $location.path("/dinner");
            }, 1000);
          }, 500);
        }, function (error) {
          that.flag.showLoading = false;
          that.clear();
          $(".login-box").removeClass('shake_effect');
          setTimeout(function () {
            $(".login-box").addClass('shake_effect');
          }, 1);
        });
      },
      toLogin: function () {
        var that = this;
        this.flag.isLoginMode = true;
        this.flag.isRegisterMode = false;
      },
      toRegister: function () {
        var that = this;
        this.flag.isLoginMode = false;
        this.flag.isRegisterMode = true;
      },
      register: function () {
        var that = this;
        var name = $("#user_name").val();
        var pass = $("#password").val();
        var comPass = $("#comfirm_password").val();
        if(pass === comPass){
          that.flag.showLoading = true;
          var user = new AV.User();
          user.setUsername(name);
          user.setPassword(pass);
          user.signUp().then(function (loginedUser) {
            console.log(loginedUser);
            that.flag.showLoading = false;
            $scope.$apply();
            angular.element('.login-content').css('top','-250px');
            $timeout(function () {
              angular.element('.login-box').addClass('login-finish');
              $timeout(function () {
                angular.element('.login-box').removeClass('login-finish');
                angular.element('.login-content').css('top','30px');
                that.toLogin();
              }, 2000);
            }, 500);
          }, function (error) {
            alert(error);
            that.clear();
            that.flag.showLoading = false;
            $scope.$apply();
          });
        }else{
          alert('密码不一致！');
        }
      },
      clear: function(){
        $("#user_name").val("");
        $("#password").val("");
        $("#comfirm_password").val("");
      }
    };
    $scope.main.init();
  });
