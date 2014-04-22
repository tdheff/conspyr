'use strict';

angular.module('bookClubApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:date/:plan/chat', {
				templateUrl: '/views/chat.html',
		    controller: 'ChatCtrl'
			})
      .when('/new', {
        templateUrl: '/views/newplan.html',
        controller: 'NewCtrl'
      })
      .when('/myplans/', {
        templateUrl: '/views/myplans.html',
        controller: 'MainCtrl'
      })
      .when('/:date/:plan/addfriends', {
        templateUrl: '/views/addfriends.html',
        controller: 'AddFriendsCtrl'
      })
      .when('/:date', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
