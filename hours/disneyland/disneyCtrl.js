angular.module('waitApp').controller('disneyCtrl', function($scope, disneyService){

$scope.disneyData = disneyService.getDisneyRides();

});
