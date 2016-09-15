angular.module('waitApp').directive('weatherDirective', function(){
  return {
    restrict:'AE',
    link:function(scope, element, attr){
      if(scope.whatTime >= 17){
        scope.sunHidden = true;
        scope.moonHidden = false;
      }
      else {
        scope.sunhidden = false;
        scope.moonHidden = true;
      }
    }
  }
});
