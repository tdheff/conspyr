'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL) {

		var ref = new Firebase(FBURL
      + '/plans2/'
      + $routeParams['plan']
      + '/chat');
		$scope.chat = $firebase(ref);

    $scope.addMessage = function(e) {
      console.log(e);
      if (e.keyCode != 13 && e.type != "click") return;
      $scope.chat.$add({sender: $scope.name, body: $scope.msg});
      $scope.msg = "";
    }

  });
