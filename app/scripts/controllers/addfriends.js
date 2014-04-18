'use strict';

angular.module('bookClubApp')
  .controller('AddFriendsCtrl', function ($scope, filterFilter, $routeParams, $location, $firebase, FBURL) {

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + month + date;
    }

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
      {name: 'Nate', selected: false}]

    // borrowed from http://jsbin.com/ImAqUC/1

    $scope.selectedUsers = function selectedUsers() {
      return filterFilter($scope.users, {selected: true});
    };

    $scope.$watch('users|filter:{selected:true}', function (nv) {
      $scope.selection = nv.map(function (fruit) {
        return user.name;
      });
    }, true);

    console.log($scope.users);

    $scope.addFriends = function(e) {
      var date = dateString(new Date($scope.date));

      var ref = new Firebase(FBURL
        + '/plans/'
        + date);
      $scope.planRef = $firebase(ref);

      var peopleRef = new Firebase(FBURL
        + '/plans/'
        + date
        + '/'
        + $routeParams['plan']
        + '/people');
      $scope.people = $firebase(peopleRef)


      console.log($scope.users);
      //$scope.planRef.$add({time: time, description: $scope.desc, people: [$scope.name]}).then(function(ref) {
      //  $scope.$apply( $location.path( '/' + date + '/' + ref.name() + '/addfriends') );        
      //})
    
    }

  });
