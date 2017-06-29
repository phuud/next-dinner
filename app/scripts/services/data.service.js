/**
 * Created by Luke on 2017/6/28.
 */

'use strict';

angular.module('nextDinnerApp')
  .service('DataService', function ($http) {
    return {
      linkData: function(){
        var linkData = [
            {
              title: 'NextTrucking',
              text: 'Website',
              url: 'https://www.nexttrucking.com'
            },
            {
              title: 'Google',
              text: 'google site',
              url: 'https://www.google.com'
            }
          ];
        return linkData;
      }
    }
  });
