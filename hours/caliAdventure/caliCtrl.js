angular.module('waitApp').controller('caliCtrl', function($scope, caliService){

$scope.caliData = caliService.getCaliRides();



});
