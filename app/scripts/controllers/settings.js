'use strict';

angular.module('bookClubApp')
  .controller('SettingsCtrl', function ($scope, $routeParams, $firebase, FBURL) {

    $scope.nameField = localStorage.name;

    $scope.updateName = function() {
      localStorage.name = $scope.nameField;
      var user = $firebase(new Firebase(FBURL+'/users/'+$scope.nameField));
      user.$set({name: $scope.nameField});
    }

  });
