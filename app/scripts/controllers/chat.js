'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL) {

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + '-'  + month + '-' + date;
    }

    function momDateString(date) {
      return date.format("YYYY-M-D")
    }

    if ($routeParams.date) {
      var date = $routeParams.date;
    } else {
      var date = momDateString(moment());
    }
    $scope.plan = $firebase(new Firebase(FBURL
      +'/plans/'
      +date
      +'/'
      +$routeParams['plan']));

    $scope.addfriends = date + '/' + $routeParams['plan'] + '/addfriends';

    $scope.addMessage = function(e) {
      console.log(e);
      if (e.keyCode != 13 && e.type != "click") return;
      $scope.plan.$child('chat').$add({sender: $scope.name, body: $scope.msg});
      $scope.msg = "";
    }
  });
