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
          document.querySelectorAll('.cont_letras > p')[0].style.left = '200px';
          document.querySelectorAll('.cont_letras > p')[1].style.left = '-320px';
          document.querySelectorAll('.cont_letras > p')[2].style.left = '200px';
          setTimeout(function () {
            document.querySelector('.cont_join').className = 'cont_join cont_join_form_act';
          }, 1000);
          t++;
        } else {
          t++;
          document.querySelector('.cont_form_join').style.bottom = '-420px';
          setTimeout(function () {
              document.querySelector('.cont_join').className = 'cont_join cont_join_form_act cont_join_finish';
            }, 500);
        }
      }
    };
    $scope.main.init();
  });
