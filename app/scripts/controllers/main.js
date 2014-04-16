'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {

    $scope.plans = [
        {
            time: "3pm",
            plans: [
                {
                    description: "Gym",
                    people: ["Tommy"]
                }, {
                    description: "Lunch at Adams",
                    people: ["Sarah"]
                }, {
                    description: "Chill sesh in Quncy",
                    people: ["Alex"]
                }, {
                    description: "Basketball",
                    people: ["Kim"]
                }
            ]
        }, {
            time: "4pm",
            plans: [
                {
                    description: "Gym",
                    people: ["Tommy"]
                }, {
                    description: "Lunch at Cabot",
                    people: ["Jared"]
                }, {
                    description: "Basketball",
                    people: ["Tommy"]
                }, {
                    description: "Gym",
                    people: ["Tommy", "Jared"]
                }
            ]
        }, {
            time: "5pm",
            plans: [
                {
                    description: "Lunch at Adams",
                    people: ["Sarah"]
                }, {
                    description: "Chill sesh in Quncy",
                    people: ["Alex"]
                }, {
                    description: "Basketball",
                    people: ["Kim"]
                }, {
                    description: "Lunch at Cabot",
                    people: ["Jared"]
                }
            ]
        }, {
            time: "later",
            plans: [
                {
                    description: "Basketball",
                    people: ["Tommy"]
                }
            ]
        }
    ];

  });
