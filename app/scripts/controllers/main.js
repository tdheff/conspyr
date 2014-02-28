'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {
    $scope.books = new $firebase(new Firebase(FBURL + '/books'));

    $scope.addBook = function() {
    	$scope.books.$add({
    		title: $scope.newbook_title,
    		author: $scope.newbook_author,
    		cover: $scope.newbook_cover,
    	})

    	$scope.newbook_title = '';
    	$scope.newbook_author = '';
    	$scope.newbook_cover = '';
    };

  });
