angular.module('waitApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

$stateProvider
.state('parkHours', {
  url:'/',
  templateUrl:'hours/parkHours.html',
  controller:'hoursCtrl'
})

.state('disneyland', {
  url:'disneyland',
  templateUrl:'hours/disneyland/disneyland.html',
  controller:'disneyCtrl',
  parent:'parkHours'
})

.state('caliAdventure', {
  url:'california-adventure',
  templateUrl:'hours/caliAdventure/caliAdventure.html',
  controller:'caliCtrl',
  parent:'parkHours'
});

  });
