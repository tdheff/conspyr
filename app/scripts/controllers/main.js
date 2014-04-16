'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {

		var ref = new Firebase(FBURL + '/plans');
		$scope.plans = $firebase(ref);

  });
