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
            title: 'Google',
            text: 'google site',
            url: 'https://www.google.com'
          },
            {
              title: 'NextTrucking',
              text: 'Home page',
              url: 'https://www.nexttrucking.com'
            },
            {
              title: '邮箱',
              text: '网易企业邮箱',
              url: 'https://qiye.aliyun.com/'
            }
          ];
        return linkData;
      },
      getData: function () {
        return $http.get("/api/getId/" + id).then(function (response) {
          return {"data": response.data, "status": response.status, "headers": response.headers};
        });
      }
    };
  });
