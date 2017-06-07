/**
 * Created by Luke on 2017/5/25.
 */

angular.module('nextDinnerApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.main = {
      init: function () {
        this.title = 'Next OA'
      },
      submit: function () {
        var name = $("#user_name").val();
        var pass = $("#password").val();
        AV.User.logIn(name, pass).then(function (loginedUser) {
          console.log(loginedUser);
          var username = loginedUser.getUsername();
          var email = loginedUser.getEmail();
          alert("登录成功！");
        }, function (error) {
          $("#user_name").val("");
          $("#password").val("");
          $("#login_form").removeClass('shake_effect');
          setTimeout(function () {
            $("#login_form").addClass('shake_effect')
          }, 1);
        });
      },
      register: function () {
        alert('未开放注册');
      },
      join: function () {
        var t = 0;
        if (t == 0) {
          angular.element('.login-head p').css('left',320);
          setTimeout(function () {
            angular.element('.login-box').addClass('login-act');
          }, 500);
          t++;
        } else {
          t++;
          document.querySelector('.login-content').style.bottom = '-420px';
          setTimeout(function () {
              document.querySelector('.login-box').className = 'login-box login-act login-finish';
            }, 500);
        }
      }
    };
    $scope.main.init();
  });
