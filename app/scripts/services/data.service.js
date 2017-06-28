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
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            },
            {
              linkName: 'NextWeb',
              linkUrl: 'https://www.nexttrucking.com'
            }
          ];
        return linkData;
      }
    }
  });
