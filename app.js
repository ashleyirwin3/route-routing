console.log("ndewdlk")

// create angular module

var app = angular.module('highwayApp', ['ngRoute'])
// add ngRoute info app

app.config( function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {
      controller: '66Ctrl',
      templateUrl: 'partials/66.html'
    })
    .when('/blue', {
      controller: 'BlueCtrl',
      templateUrl: 'partials/blue.html'
    })
    .otherwise({redirectTo:'/'})
})

app.controller('66Ctrl', function($scope) {
  $scope.highwayName = "Route 66"
  $scope.highwayDescription = "This is a highway"
  console.log('66')
})

app.controller('BlueCtrl', function($scope) {
  $scope.highwayName = "Blue Ridge Parkway"
  $scope.highwayDescription= "This is another highway"
  console.log('blue')
})
