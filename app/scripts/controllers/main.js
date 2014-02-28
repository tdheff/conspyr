'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {
    $scope.books = new $firebase(new Firebase(FBURL + '/books'));
  });
