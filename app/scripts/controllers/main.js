'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $routeParams, $firebase, $location, FBURL) {

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + '-'  + month + '-' + date;
    }

    function momDateString(date) {
      return date.format("YYYY-M-D")
    }

    function formatHour(hour) {
      return moment().hour(hour).format('ha');
    }

    if (!localStorage.name) {
      $location.path('/settings');
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

    var dateStr = momDateString(date);
    var plansRef = $firebase(new Firebase(FBURL+'/plans/'+dateStr));

    // bucketize plans by hour
		$scope.plans = {};
    plansRef.$on('change', function (key) {
      var time = plansRef[key].time;
      plansRef[key].link = '/#/' + dateStr + '/' + key + '/chat';
      plansRef[key].full_evtid = {date: dateStr, id: key};
      if ($scope.plans[time]) {
        $scope.plans[time].plans[key] = plansRef[key];
      } else {
        var pl = {};
        pl[key] = plansRef[key];
        $scope.plans[time] = {
          time: formatHour(time),
          plans: pl//{key: plansRef[key]}
        };
      }
    });

    var me = $firebase(new Firebase(FBURL+'/users/'+localStorage.name));
    $scope.isFresh = function(plan) {
      if (plan.updated == undefined) return false;
      var last_view = me[plan.full_evtid.date] && me[plan.full_evtid.date][plan.full_evtid.id];
      if (last_view == undefined) return false;
      return last_view < plan.updated;
    }

    $scope.isBrandNew = function(plan) {
      if (plan.updated == undefined) return true;
      var last_view = me[plan.full_evtid.date] && me[plan.full_evtid.date][plan.full_evtid.id];
      if (last_view == undefined) return true;
      return false;
    }

  });
