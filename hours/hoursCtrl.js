angular.module('waitApp').controller('hoursCtrl', function($scope, hoursService){
  $scope.head = 'Park Hours';
  $scope.disneyHours = hoursService.getDisneyHours();
  $scope.caliHours = hoursService.getCaliHours();
  $scope.magicMorningDisney = hoursService.getMagicMorningDisney();
  $scope.magicMorningCali = hoursService.getMagicMorningCali();
  $scope.addColorDisney = function(bool){
    if(bool === true) {
          $scope.changeColorDisney = {color: 'white', background:'#404A59'};
      }
      else if (bool === false) {
          $scope.changeColorDisney = {color: 'black', background:'white'};
      }
  }

$scope.addColorCali = function(bool){
  if(bool === true) {
        $scope.changeColorCali = {color: 'white', background:'#404A59'};
    }
    else if (bool === false) {
        $scope.changeColorCali = {color: 'black', background:'white'};
    }
}
});
