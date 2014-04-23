'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL) {

    $scope.plan = $firebase(new Firebase(FBURL
      +'/plans/'
      +$routeParams.date
      +'/'
      +$routeParams.plan));

    $scope.back_loc = $routeParams.date;
    console.log($scope.back_loc);
    $scope.addfriends = $routeParams.date + '/' + $routeParams.plan + '/addfriends';

    $scope.addMessage = function(e) {
      if (e.keyCode != 13 && e.type != "click") return;
      $scope.plan.$child('chat').$add({sender: localStorage.name, body: $scope.msg});
      $scope.msg = "";
    }

    $scope.name = localStorage.username
    $scope.$watch('name', function(){
      localStorage.username = $scope.name;
    });

  });
