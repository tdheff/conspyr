'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL) {

		var ref = new Firebase(FBURL + '/chats/' + $routeParams["id"]);
		$scope.chat = $firebase(ref);

  });
