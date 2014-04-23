'use strict';

angular.module('bookClubApp')
  .controller('SettingsCtrl', function ($scope, $routeParams, $firebase, FBURL) {

    $scope.nameField = localStorage.name;

    $scope.updateName = function() {
      localStorage.name = $scope.nameField;
    }

  });
