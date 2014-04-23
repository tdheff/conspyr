'use strict';

angular.module('bookClubApp')
  .controller('NewCtrl', function ($scope, $routeParams, $location, $firebase, FBURL) {

    $scope.back_loc = '/';

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + '-'  + month + '-' + date;
    }

    function momDateString(date) {
      return date.format("YYYY-M-D")
    }


    // TAKEN FROM http://www.timlabonne.com/2013/07/parsing-a-time-string-with-javascript/
    // COULDN'T FIND A LIBRARY THAT DID THIS
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
      var date = momDateString(moment($scope.date,'MM/DD/YYYY'));

      var ref = new Firebase(FBURL
        + '/plans/'
        + date);

      $scope.planRef = $firebase(ref);
      var time = parseTime($scope.time).getHours();
      time = ("0" + time).slice(-2);

      var people = {};
      people[localStorage.name] = true;
      $scope.planRef.$add({time: time, description: $scope.desc, people: people})
      .then(function(ref) {
        $location.path( '/' + date + '/' + ref.name() + '/addfriends');
      })

    }

  });
