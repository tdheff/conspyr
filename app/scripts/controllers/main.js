'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $routeParams, $firebase, FBURL) {

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
      console.log($routeParams.date);
      var date = moment($routeParams.date,"YYYY-M-D");
      $scope.nextDate = momDateString(date.add('days',1));
      $scope.prevDate = momDateString(date.subtract('days',2));
      date.add('days',1);

      if ( moment().isSame(date,'day') ) {
        $scope.date = "Today";
      } else if ( moment().add('days',1).isSame(date,'day') ) {
        $scope.date = "Tomorrow"
      } else if ( moment().subtract('days',1).isSame(date,'day') ) {
        $scope.date = "Yesterday"
      }else {
        $scope.date = date.format("M/D/YY");
      }
    } else {
      var date = moment();
      $scope.nextDate = momDateString(moment().add('days',1));
      $scope.prevDate = momDateString(moment().subtract('days',1));
      $scope.date = "Today";
    }

    var dateStr = momDateString(date)
		var ref = new Firebase(FBURL + '/plans/' + dateStr);

    //$scope.empty = $firebase(ref).$getIndex();//.length == 0;
    //console.log($scope.empty);

    /*$scope.empty = (function (obj) {
      var ret = true;

      obj.$on('change', function (key) {
        ret = obj.$getIndex().length == 0;
        return ret;
      });
      return ret;
    })($firebase(ref)); */
    $scope.empty = true;

		$scope.plans = (function (obj) {
      var ret = {};//new Array(24)

      obj.$on('change', function (key) {
        var time = obj[key]["time"];
        obj[key]["link"] = '/#/' + dateStr + '/' + key + '/chat'
        if (ret[time]) {
          ret[time]["plans"].push(obj[key]);
        } else {
          ret[time] = {time: String(time) + ":00", plans: [obj[key]]}
        }
        $scope.empty = false;
      })

      return ret;

    })($firebase(ref));

  });
