'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $routeParams, $firebase, FBURL) {

    function dateString(date) {
      var year = String(date.getFullYear());
      var month = String(date.getMonth());
      var date = String(date.getDate());
      return year + month + date;
    }

    if ($routeParams.date) {
      var date = $routeParams.date;
    } else {
      var date = dateString(new Date());
    }
		var ref = new Firebase(FBURL + '/plans/' + date);

		$scope.plans = (function (obj) {
      var ret = {};//new Array(24)

      obj.$on('change', function (key) {
        var time = obj[key]["time"];
        obj[key]["link"] = '/#/' + key + '/chat'
        if (ret[time]) {
          ret[time]["plans"].push(obj[key]);
        } else {
          ret[time] = {time: String(time) + ":00", plans: [obj[key]]}
        }  
      })

      return ret;
      
    })($firebase(ref));

  });
