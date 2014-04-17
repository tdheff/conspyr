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
      .when('/:date', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:plan/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
 			.when('/:date/:plan/chat', {
				templateUrl: 'views/chat.html',
		    controller: 'ChatCtrl'
			})
      .when('/new', {
        templateUrl: 'views/newplan.html',
        controller: 'MainCtrl'
      })
      .when('/myplans/', {
        templateUrl: 'views/myplans.html',
        controller: 'MainCtrl'
      })
      .when('/addfriends/', {
        templateUrl: 'views/addfriends.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //$locationProvider.html5Mode(true);
  });
