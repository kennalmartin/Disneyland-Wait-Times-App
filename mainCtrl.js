angular.module('waitApp').controller('mainCtrl', function($scope, mainService){
  $scope.getWeather = mainService.getWeather().then(function(response){
    $scope.weather = Math.round(response.data.main.temp);
  });

  $scope.theTime = new Date();
  $scope.whatTime = $scope.theTime.getHours();

$scope.hideView = function(hoursView){
  $scope.hoursView = !$scope.hoursView;
}

$scope.addColor = function(bool){
  if(bool === true) {
        $scope.changeColor = {color: 'white', background:'#404A59'};
    }
    else if (bool === false) {
        $scope.changeColor = {color: 'black', background:'white'};
    }
}





});
