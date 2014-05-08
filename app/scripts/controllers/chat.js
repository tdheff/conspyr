'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL, $location) {

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
      $scope.plan.$child('updated').$set(new Date().getTime());
      $scope.msg = "";
    }

    $scope.name = localStorage.username
    $scope.$watch('name', function(){
      localStorage.username = $scope.name;
    });

    // update the last seen timestamp
    var updateTimestamp = function() {
      (new Firebase(FBURL+'/users/'+
        localStorage.name+'/'+
        $routeParams.date+'/'+$routeParams.plan
      )).set(new Date().getTime());
    };

    var loc = $location.absUrl();
    $scope.plan.$on("change", function(){
      if (loc != $location.absUrl()) return;
      updateTimestamp();
    });
  });
