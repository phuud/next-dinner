/**
 * Created by Luke on 2017/5/29.
 */

'use strict';

angular.module('nextDinnerApp')
  .service('LoginService', function ($http) {
    return {
      getData: function(id){
        return $http.get("/api/getId/" + id).then(function(response){
          return {"data": response.data, "status": response.status, "headers": response.headers};
        })
      }
    }
  });
