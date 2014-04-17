'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {

		var ref = new Firebase(FBURL + '/plans2');
		$scope.plans = (function (obj) {
      var ret = {};//new Array(24)

      obj.$on('change', function (key) {
        var time = obj[key]["time"];
        obj[key]["link"] = '/#/' + key + '/chat'
        console.log(time);
        if (ret[time]) {
          ret[time]["plans"].push(obj[key]);
        } else {
          ret[time] = {time: String(time) + ":00", plans: [obj[key]]}
        }  
      })

      console.log(ret);
      return ret;
      
    })($firebase(ref));

  });
