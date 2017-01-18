console.log("ndewdlk")

// create angular module

var app = angular.module('highwayApp', ['ngRoute'])
// add ngRoute info app

app.config( function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {
      controller: '66Ctrl',
      templateURL: 'partials/66.html'
    })
    .when('/blue', {
      controller: 'BlueCtrl',
      templateURL: 'partials/blue.html'
    })
    .otherwise({redirectTo:'/'})
})

app.controller('66Ctrl', function($scope) {
  $scope.highway = "route 66"
  console.log('66')
})

app.controller('BlueCtrl', function($scope) {
  $scope.highway = "Blue Ridge"
  console.log('blue')
})
