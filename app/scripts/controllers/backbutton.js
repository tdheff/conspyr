'use strict';

angular.module('bookClubApp')
.controller('BackCtrl', function ($scope, $route) {
  $scope.backloc = function() {
    if ($route.current
      && $route.current.scope
      && $route.current.scope.back_loc)
    {
      return '/#/' + $route.current.scope.back_loc;
    }

    return null;
  };
});
