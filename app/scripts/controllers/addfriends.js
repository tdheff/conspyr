'use strict';

angular.module('bookClubApp')
  .controller('AddFriendsCtrl', function ($scope, filterFilter, $routeParams, $location, $firebase, FBURL) {

    $scope.plan = $firebase(new Firebase(FBURL
      +'/plans/'
      +$routeParams.date
      +'/'
      +$routeParams.plan));

    $scope.back_loc = $routeParams.date + '/' + $routeParams.plan + '/chat';

    $scope.users = $firebase(new Firebase(FBURL+'/users/'));
    $scope.users.$on('change', function(data) {
      delete $scope.users['undefined'];
    });

    // some jank because angularfire doesn't
    $scope.people = $scope.plan.$child('people');
    $scope.people.$on('loaded', function() {
      $scope.$watchCollection('people', function() {
        $scope.people.$save('');
      });
    });

    $scope.submit = function() {
      $location.path( '/'
        + $routeParams.date
        + '/' +
        $routeParams.plan +
        '/chat');
    }

  });
