angular.module('waitApp').service('hoursService', function(){

var disneyHours = {
  openingTime:'9:00',
  closingTime:'12:00',
  closed: false,
  magicMorning: true
};

var caliHours = {
  openingTime:'9:00',
  closingTime:'10:00',
  closed: false,
  magicMorning: false
};

this.getDisneyHours = function(){
  return disneyHours;
}

this.getCaliHours = function()
{
  return caliHours;
}

this.getMagicMorningDisney = function() {
  if(disneyHours.magicMorning) {
    return 'Magic Morning Hours: 8:00AM - 9:00AM';
  }
}

this.getMagicMorningCali = function() {
  if(caliHours.magicMorning) {
    return 'Magic Morning Hours: 8:00AM - 9:00AM';
  }
}

});
