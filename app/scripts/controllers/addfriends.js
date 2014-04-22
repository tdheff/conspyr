'use strict';

angular.module('bookClubApp')
  .controller('AddFriendsCtrl', function ($scope, filterFilter, $routeParams, $location, $firebase, FBURL) {

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + '-'  + month + '-' + date;
    }

    function momDateString(date) {
      return date.format("YYYY-M-D")
    }

    if ($routeParams.date) {
      var date = $routeParams.date;
    } else {
      var date = momDateString(moment());
    }

    $scope.plan = $firebase(new Firebase(FBURL
      +'/plans/'
      +date
      +'/'
      +$routeParams['plan']));

    $scope.users = [
      {name: 'Tommy', selected: false},
      {name: 'Jared', selected: false},
      {name: 'Sarah', selected: false},
      {name: 'Alex', selected: false},
      {name: 'Zach', selected: false},
      {name: 'Cody', selected: false},
      {name: 'Anne', selected: false},
      {name: 'Katie', selected: false},
      {name: 'Blair', selected: false},
      {name: 'Chuck', selected: false},
      {name: 'Serena', selected: false},
      {name: 'Dan', selected: false},
      {name: 'Nate', selected: false}
    ];

  $scope.people = $scope.plan.$child('people');
  $scope.people.$on('loaded', function(){
    $scope.$watchCollection('people', function(){
      $scope.people.$save('');
    });
  });

  })

  .filter('trueKeys', function(){
    return function(dict) {
      var keys = [];
      angular.forEach(dict, function(value, key){
        if (value == true) {
          keys.push(key);
        }
      });
      return keys;
    };
  });
