/**
 * Created by Luke on 2017/6/2.
 */

angular.module('nextDinnerApp')
  .directive('navbarDirective', function ($location) {
    return {
      replace: true,
      restrict: 'ACE',
      templateUrl:'views/navbar.html',
      link: function ($scope) {
        $scope.navbar = {
          userName:'Account',
          title:'navbar',
          init: function(){
            var currentUser = AV.User.current();
            this.userName = currentUser.attributes.username;
          },
          logout: function(){
            AV.User.logOut();
            $location.path("/")
          }
        };
        $scope.navbar.init();
        //cache DOM elements
        var mainContent = $('.cd-main-content'),
          header = $('.cd-main-header'),
          sidebar = $('.cd-side-nav'),
          sidebarTrigger = $('.cd-nav-trigger'),
          topNavigation = $('.cd-top-nav'),
          accountInfo = $('.account');

        //on resize, move search and top nav position according to window width
        var resizing = false;
        moveNavigation();
        $(window).on('resize', function(){
          if( !resizing ) {
            (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
            resizing = true;
          }
        });

        //on window scrolling - fix sidebar nav
        var scrolling = false;
        checkScrollbarPosition();
        $(window).on('scroll', function(){
          if( !scrolling ) {
            (!window.requestAnimationFrame) ? setTimeout(checkScrollbarPosition, 300) : window.requestAnimationFrame(checkScrollbarPosition);
            scrolling = true;
          }
        });

        //mobile only - open sidebar when user clicks the hamburger menu
        sidebarTrigger.on('click', function(event){
          event.preventDefault();
          $([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
        });

        //click on item and show submenu
        $('.has-children > a').on('click', function(event){
          var mq = checkMQ(),
            selectedItem = $(this);
          if( mq == 'mobile' || mq == 'tablet' ) {
            event.preventDefault();
            if( selectedItem.parent('li').hasClass('selected')) {
              selectedItem.parent('li').removeClass('selected');
            } else {
              sidebar.find('.has-children.selected').removeClass('selected');
              accountInfo.removeClass('selected');
              selectedItem.parent('li').addClass('selected');
            }
          }
        });

        //click on account and show submenu - desktop version only
        accountInfo.children('a').on('click', function(event){
          var mq = checkMQ(),
            selectedItem = $(this);
          if( mq == 'desktop') {
            event.preventDefault();
            accountInfo.toggleClass('selected');
            sidebar.find('.has-children.selected').removeClass('selected');
          }
        });

        $(document).on('click', function(event){
          if( !$(event.target).is('.has-children a') ) {
            sidebar.find('.has-children.selected').removeClass('selected');
            accountInfo.removeClass('selected');
          }
        });

        //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
        sidebar.children('ul').menuAim({
          activate: function(row) {
            $(row).addClass('hover');
          },
          deactivate: function(row) {
            $(row).removeClass('hover');
          },
          exitMenu: function() {
            sidebar.find('.hover').removeClass('hover');
            return true;
          },
          submenuSelector: ".has-children",
        });

        function checkMQ() {
          //check if mobile or desktop device
          return window.getComputedStyle(document.querySelector('.cd-main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
        }

        function moveNavigation(){
          var mq = checkMQ();

          if ( mq == 'mobile' && topNavigation.parents('.cd-side-nav').length == 0 ) {
            detachElements();
            topNavigation.appendTo(sidebar);
          } else if ( ( mq == 'tablet' || mq == 'desktop') &&  topNavigation.parents('.cd-side-nav').length > 0 ) {
            detachElements();
            topNavigation.appendTo(header.find('.cd-nav'));
          }
          checkSelected(mq);
          resizing = false;
        }

        function detachElements() {
          topNavigation.detach();
        }

        function checkSelected(mq) {
          //on desktop, remove selected class from items selected on mobile/tablet version
          if( mq == 'desktop' ) $('.has-children.selected').removeClass('selected');
        }

        function checkScrollbarPosition() {
          var mq = checkMQ();

          if( mq != 'mobile' ) {
            var sidebarHeight = sidebar.outerHeight(),
              windowHeight = $(window).height(),
              mainContentHeight = mainContent.outerHeight(),
              scrollTop = $(window).scrollTop();

            ( ( scrollTop + windowHeight > sidebarHeight ) && ( mainContentHeight - sidebarHeight != 0 ) ) ? sidebar.addClass('is-fixed').css('bottom', 0) : sidebar.removeClass('is-fixed').attr('style', '');
          }
          scrolling = false;
        }
      }
    };
  });
