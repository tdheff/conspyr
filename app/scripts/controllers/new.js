'use strict';

angular.module('bookClubApp')
  .controller('NewCtrl', function ($scope, $routeParams, $location, $firebase, FBURL) {

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + month + date;
    }

    function parseTime(timeStr, dt) {
      if (!dt) {
        dt = new Date();
      }

      var time = timeStr.match(/(\d+)(?::(\d\d))?\s*(p?)/i);
      if (!time) {
        return NaN;
      }
      var hours = parseInt(time[1], 10);
      if (hours == 12 && !time[3]) {
        hours = 0;
      }
      else {
        hours += (hours < 12 && time[3]) ? 12 : 0;
      }

      dt.setHours(hours);
      dt.setMinutes(parseInt(time[2], 10) || 0);
      dt.setSeconds(0, 0);
      return dt;
    }

    $scope.makePlan = function(e) {
      var date = dateString(new Date($scope.date));

      var ref = new Firebase(FBURL
        + '/plans/'
        + date);

      $scope.planRef = $firebase(ref);
      var time = parseTime($scope.time).getHours();

      $scope.planRef.$add({time: time, description: $scope.desc, people: [$scope.name]}).then(function(ref) {
        $scope.$apply( $location.path( '/' + date + '/' + ref.name() + '/addfriends') );        
      })
    
    }

  });
