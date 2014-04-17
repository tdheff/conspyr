'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL) {

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + month + date;
    }

    if ($routeParams.date) {
      var date = $routeParams.date;
    } else {
      var date = dateString(new Date());
    }

		var ref = new Firebase(FBURL
      + '/plans/'
      + date
      + '/'
      + $routeParams['plan']
      + '/chat');
    console.log(ref);
		$scope.chat = $firebase(ref);

    $scope.addMessage = function(e) {
      console.log(e);
      if (e.keyCode != 13 && e.type != "click") return;
      $scope.chat.$add({sender: $scope.name, body: $scope.msg});
      $scope.msg = "";
    }

  });
