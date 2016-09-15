angular.module('waitApp').directive('ridesDirective', function(){
  return {
    templateUrl:'/directives/rides.html',
    restrict:'AE',
    scope: {
      parkData: '='
     },
    link:function(scope, element, attr){

    },
    controller: function($scope, disneyService, caliService){

    $scope.hideRides = function(land){
      land.openRide = !land.openRide;
    }
    
    $scope.addColor = function(bool){
      if(bool === true) {
          this.changeColor = {color: 'red'};
        }
      else if (bool === false) {
          this.changeColor = {color: '#404A59'};
        }
      }


    }
  }
});
