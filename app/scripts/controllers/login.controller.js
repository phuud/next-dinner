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
        if (name == "luke" && pass == "111111") {
          alert("登录成功！");
          $("#user_name").val("");
          $("#password").val("");
        }
        else {
          $("#login_form").removeClass('shake_effect');
          setTimeout(function () {
            $("#login_form").addClass('shake_effect')
          }, 1);
        }
      },
      register: function () {
        alert('未开放注册');
      }
    }
    $scope.main.init();
  });
