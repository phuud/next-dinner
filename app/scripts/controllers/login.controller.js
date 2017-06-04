/**
 * Created by Luke on 2017/5/25.
 */

angular.module('nextDinnerApp')
  .controller('LoginCtrl', function ($scope) {
    var animating = false, submitPhase1 = 1100, submitPhase2 = 400, logoutPhase1 = 800, $login = $('.login'), $app = $('.app');
    function ripple(elem, e) {
      $('.ripple').remove();
      var elTop = elem.offset().top, elLeft = elem.offset().left, x = e.pageX - elLeft, y = e.pageY - elTop;
      var $ripple = $('<div class=\'ripple\'></div>');
      $ripple.css({
        top: y,
        left: x
      });
      elem.append($ripple);
    }
    ;
    $(document).on('click', '.login__submit', function (e) {
      if (animating)
        return;
      animating = true;
      var that = this;
      ripple($(that), e);
      $(that).addClass('processing');
      setTimeout(function () {
        $(that).addClass('success');
        setTimeout(function () {
          $app.show();
          $app.css('top');
          $app.addClass('active');
        }, submitPhase2 - 70);
        setTimeout(function () {
          $login.hide();
          $login.addClass('inactive');
          animating = false;
          $(that).removeClass('success processing');
        }, submitPhase2);
      }, submitPhase1);
    });

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
      }
    }
    $scope.main.init();
  });
