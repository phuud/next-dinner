/**
 * Created by Luke on 2017/5/28.
 */

angular.module('nextDinnerApp')
  .controller('CatCtrl', function ($scope) {
    this.cat = {
      init: function(){
        console.log('cat;')
      }
    };

    $scope.submit = function () {
      check_login();
      return false;
    }
    function check_login()
    {
      var name=$("#user_name").val();
      var pass=$("#password").val();
      if(name=="www.htmleaf.com" && pass=="www.htmleaf.com")
      {
        alert("登录成功！");
        $("#user_name").val("");
        $("#password").val("");

      }
      else
      {
        $("#login_form").removeClass('shake_effect');
        setTimeout(function()
        {
          $("#login_form").addClass('shake_effect')
        },1);
      }
    }
    function check_register(){
      var name = $("#r_user_name").val();
      var pass = $("#r_password").val();
      var email = $("r_email").val();
      if(name!="" && pass=="" && email != "")
      {
        alert("注册成功！");
        $("#user_name").val("");
        $("#password").val("");
      }
      else
      {
        $("#login_form").removeClass('shake_effect');
        setTimeout(function()
        {
          $("#login_form").addClass('shake_effect')
        },1);
      }
    }
    $(function(){
      $("#create").click(function(){
        check_register();
        return false;
      })
      $('.message a').click(function () {
        $('form').animate({
          height: 'toggle',
          opacity: 'toggle'
        }, 'slow');
      });
    })
  });
