'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {

	var clean_str = function(str) {
		if (str == null) {
			return '';
		}

		return str.trim();
	}

    $scope.books = new $firebase(new Firebase(FBURL + '/books'));

    $scope.addBook = function() {
    	var title = clean_str($scope.newbook_title);
    	var author = clean_str($scope.newbook_author);
    	var cover = clean_str($scope.newbook_cover);

    	if (title == '') {
    		// don't add books with no title
    		return;
    	}

    	$scope.books.$add({
    		title: title,
    		author: author,
    		cover: cover
    	})

    	$scope.newbook_title = '';
    	$scope.newbook_author = '';
    	$scope.newbook_cover = '';
    };

  });
