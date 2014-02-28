'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {
    $scope.books = new $firebase(new Firebase(FBURL + '/books'));

    $scope.addBook = function() {
    	$scope.books.$add({
    		title: $scope.newbook_title.trim(),
    		author: $scope.newbook_author.trim(),
    		cover: $scope.newbook_cover.trim(),
    	})

    	$scope.newbook_title = '';
    	$scope.newbook_author = '';
    	$scope.newbook_cover = '';
    };

  });
