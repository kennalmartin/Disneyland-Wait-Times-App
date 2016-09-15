angular.module('waitApp').service('mainService', function($http){
  this.getWeather = function(){
    return $http({
      method:'GET',
      url:'http://api.openweathermap.org/data/2.5/weather?id=5323810&APPID=c735c06ca7d676e0e19ae4df79316c89&units=imperial'
    });
  }
});
