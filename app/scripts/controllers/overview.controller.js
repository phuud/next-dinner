/**
 * Created by Luke on 2017/6/23.
 */

'use strict'

angular.module('nextDinnerApp')
  .controller('OverviewCtrl', function ($scope) {
    $scope.overview = {
      links: [
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        },
        {
          linkName: 'NextWeb',
          linkUrl: 'www.nexttrucking.com'
        }
      ],
      init: function () {
        console.log(this.links);
        $scope.datas = this.links;
      }
    };
    $scope.overview.init();
  });
