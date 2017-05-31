/**
 * Created by Luke on 2017/5/31.
 */
angular.module('nextDinnerApp')
  .controller('DinnerCtrl', function ($scope) {
    this.dinner = {
      init: function(){
        console.log('dinner;')
      }
    };
  });
