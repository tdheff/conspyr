'use strict';

angular.module('bookClubApp')
  .controller('ChatCtrl', function ($scope, $routeParams, $firebase, FBURL) {

		var ref = new Firebase(FBURL
      + '/plans2/'
      + $routeParams['plan']
      + '/chat');
		$scope.chat = $firebase(ref);

  });
