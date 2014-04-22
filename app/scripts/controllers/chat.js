'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL) {

    $scope.plan = $firebase(new Firebase(FBURL
      +'/plans/'
      +$routeParams.date
      +'/'
      +$routeParams.plan));

    $scope.back_loc = '/';
    $scope.addfriends = $routeParams.date + '/' + $routeParams.plan + '/addfriends';

    $scope.addMessage = function(e) {
      if (e.keyCode != 13 && e.type != "click") return;
      $scope.plan.$child('chat').$add({sender: $scope.name, body: $scope.msg});
      $scope.msg = "";
    }
  });
