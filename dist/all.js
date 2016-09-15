'use strict';

angular.module('waitApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('parkHours', {
    url: '/',
    templateUrl: 'hours/parkHours.html',
    controller: 'hoursCtrl'
  }).state('disneyland', {
    url: 'disneyland',
    templateUrl: 'hours/disneyland/disneyland.html',
    controller: 'disneyCtrl',
    parent: 'parkHours'
  }).state('caliAdventure', {
    url: 'california-adventure',
    templateUrl: 'hours/caliAdventure/caliAdventure.html',
    controller: 'caliCtrl',
    parent: 'parkHours'
  });
});

angular.module('waitApp').controller('hoursCtrl', function ($scope, hoursService) {
  $scope.head = 'Park Hours';
  $scope.disneyHours = hoursService.getDisneyHours();
  $scope.caliHours = hoursService.getCaliHours();
  $scope.magicMorningDisney = hoursService.getMagicMorningDisney();
  $scope.magicMorningCali = hoursService.getMagicMorningCali();
  $scope.addColorDisney = function (bool) {
    if (bool === true) {
      $scope.changeColorDisney = { color: 'white', background: '#404A59' };
    } else if (bool === false) {
      $scope.changeColorDisney = { color: 'black', background: 'white' };
    }
  };

  $scope.addColorCali = function (bool) {
    if (bool === true) {
      $scope.changeColorCali = { color: 'white', background: '#404A59' };
    } else if (bool === false) {
      $scope.changeColorCali = { color: 'black', background: 'white' };
    }
  };
});

angular.module('waitApp').service('hoursService', function () {

  var disneyHours = {
    openingTime: '9:00',
    closingTime: '12:00',
    closed: false,
    magicMorning: true
  };

  var caliHours = {
    openingTime: '9:00',
    closingTime: '10:00',
    closed: false,
    magicMorning: false
  };

  this.getDisneyHours = function () {
    return disneyHours;
  };

  this.getCaliHours = function () {
    return caliHours;
  };

  this.getMagicMorningDisney = function () {
    if (disneyHours.magicMorning) {
      return 'Magic Morning Hours: 8:00AM - 9:00AM';
    }
  };

  this.getMagicMorningCali = function () {
    if (caliHours.magicMorning) {
      return 'Magic Morning Hours: 8:00AM - 9:00AM';
    }
  };
});

angular.module('waitApp').controller('caliCtrl', function ($scope, caliService) {

  $scope.caliData = caliService.getCaliRides();
});

angular.module('waitApp').service('caliService', function () {
  var caliData = [{
    name: 'A Bug\'s Land',
    attractions: [{
      id: 0,
      name: 'Flik\'s Flyers',
      waitTime: 10, //time in minutes
      status: true //true = open, false = closed
    }, {
      id: 1,
      name: 'Francis\' Ladybug Boogie ',
      waitTime: 5,
      status: true
    }, {
      id: 2,
      name: 'Heimlich\'s Chew Chew Train',
      waitTime: 10,
      status: true
    }, {
      id: 3,
      name: 'Tuck and Roll\'s Drive \'Em Buggies',
      waitTime: 10,
      status: true
    }]
  }, {
    name: 'Cars Land',
    attractions: [{
      id: 4,
      name: 'Luigi\'s Rollickin\' Roadsters',
      waitTime: 10,
      status: true
    }, {
      id: 5,
      name: 'Mater\'s Junkyard Jamboree',
      waitTime: 5,
      status: true
    }, {
      id: 6,
      name: 'Radiator Springs Racers',
      waitTime: 45,
      status: true
    }, {
      id: 7,
      name: 'Radiator Springs Racers (Single Rider)',
      waitTime: 10,
      status: true
    }]
  }, {
    name: 'Golden State Park',
    attractions: [{
      id: 8,
      name: 'Grizzly River Run',
      waitTime: 15,
      status: true
    }, {
      id: 9,
      name: 'Soarin\' Around the World',
      waitTime: 35,
      status: true
    }]
  }, {
    name: 'Hollywood Pictures Backlot',
    attractions: [{
      id: 10,
      name: 'Monsters, Inc. Mike and Sully to the Rescue!',
      waitTime: 10,
      status: true
    }, {
      id: 11,
      name: 'The Twilight Zone Tower of Terror',
      waitTime: 40,
      status: true
    }]
  }, {
    name: 'Paradise Pier',
    attractions: [{
      id: 12,
      name: 'California Screamin\'',
      waitTime: 20,
      status: true
    }, {
      id: 13,
      name: 'Golden Zephyr',
      waitTime: 5,
      status: true
    }, {
      id: 14,
      name: 'Goofy\'s Sky School',
      waitTime: 10,
      status: true
    }, {
      id: 15,
      name: 'The Little Mermaid - Ariel\'s Undersea Adventure',
      waitTime: 10,
      status: true
    }, {
      id: 16,
      name: 'Mickey\'s Fun Wheel (Non-Swinging)',
      waitTime: 15,
      status: true
    }, {
      id: 17,
      name: 'Mickey\'s Fun Wheel (Swinging)',
      waitTime: 20,
      status: true
    }, {
      id: 18,
      name: 'Silly Symphony Swings (Single Swing)',
      waitTime: 10,
      status: true
    }, {
      id: 19,
      name: 'Silly Symphony Swings (Tandem Swing)',
      waitTime: 10,
      status: true
    }, {
      id: 20,
      name: 'Toy Story Midway Mania!',
      waitTime: 25,
      status: true
    }]
  }];

  this.getCaliRides = function () {
    return caliData;
  };
});

angular.module('waitApp').controller('disneyCtrl', function ($scope, disneyService) {

  $scope.disneyData = disneyService.getDisneyRides();
});

angular.module('waitApp').service('disneyService', function () {
  var disneyData = [{
    name: 'Adventureland',
    attractions: [{
      id: 0,
      name: 'Indiana Jones Adventure',
      waitTime: 25, //time in minutes
      status: true //true = open, false = closed
    }, {
      id: 1,
      name: 'Jungle Cruise',
      waitTime: 10,
      status: true
    }, {
      id: 2,
      name: 'Enchanted Tiki Room',
      waitTime: 5,
      status: true
    }]
  }, {
    name: 'Critter Country',
    attractions: [{
      id: 3,
      name: 'The Many Adventures of Winnie the Pooh',
      waitTime: 5,
      status: true
    }, {
      id: 4,
      name: 'Splash Mountain',
      waitTime: 35,
      status: true
    }]
  }, {
    name: 'Fantasyland',
    attractions: [{
      id: 5,
      name: 'Alice in Wonderland',
      waitTime: 20,
      status: true
    }, {
      id: 6,
      name: 'Casey Jr. Circus Train',
      waitTime: 20,
      status: true
    }, {
      id: 7,
      name: 'Dumbo the Flying Elephant',
      waitTime: 15,
      status: true
    }, {
      id: 8,
      name: 'It\'s a Small World',
      waitTime: 10,
      status: true
    }, {
      id: 9,
      name: 'King Arthur Carousel',
      waitTime: 5,
      status: true
    }, {
      id: 10,
      name: 'Mad Tea Party',
      waitTime: 5,
      status: true
    }, {
      id: 11,
      name: 'Matterhorn Bobsleds',
      waitTime: 15,
      status: true
    }, {
      id: 12,
      name: 'Mr.Toad\'s Wild Ride',
      waitTime: 20,
      status: true
    }, {
      id: 13,
      name: 'Peter Pan\'s Flight',
      waitTime: 40,
      status: true
    }, {
      id: 14,
      name: 'Pinocchio\'s Daring Journey',
      waitTime: 5,
      status: true
    }, {
      id: 15,
      name: 'Snow White\'s Scary Adventures',
      waitTime: 5,
      status: true
    }, {
      id: 16,
      name: 'Storybook Land Canal Boats',
      waitTime: 10,
      status: true
    }]
  }, {
    name: 'Frontierland',
    attractions: [{
      id: 17,
      name: 'Big Thunder Mountain Railroad',
      waitTime: 10,
      status: true
    }]
  }, {
    name: 'Mickey\'s Toontown',
    attractions: [{
      id: 18,
      name: 'Gadget\'s Go Coaster',
      waitTime: 15,
      status: true
    }, {
      id: 19,
      name: 'Roger Rabbit\'s Car Toon Spin',
      waitTime: 15,
      status: true
    }]
  }, {
    name: 'New Orleans Square',
    attractions: [{
      id: 20,
      name: 'Haunted Mansion',
      waitTime: 20,
      status: true
    }, {
      id: 21,
      name: 'Pirates of the Caribbean',
      waitTime: 15,
      status: true
    }]
  }, {
    name: 'Tomorrowland',
    attractions: [{
      id: 22,
      name: 'Astro Orbiter',
      waitTime: 15,
      status: true
    }, {
      id: 23,
      name: 'Autopia',
      waitTime: 15,
      status: true
    }, {
      id: 24,
      name: 'Buzz Lightyear Astro Blasters',
      waitTime: 10,
      status: true
    }, {
      id: 25,
      name: 'Finding Nemo Submarine Voyage',
      waitTime: 30,
      status: true
    }, {
      id: 26,
      name: 'Space Mountain',
      waitTime: 70,
      status: true
    }, {
      id: 27,
      name: 'Star Tours',
      waitTime: 30,
      status: true
    }]
  }];

  this.getDisneyRides = function () {
    return disneyData;
  };
});

angular.module('waitApp').controller('mainCtrl', function ($scope, mainService) {
  $scope.getWeather = mainService.getWeather().then(function (response) {
    $scope.weather = Math.round(response.data.main.temp);
  });

  $scope.theTime = new Date();
  $scope.whatTime = $scope.theTime.getHours();

  $scope.hideView = function (hoursView) {
    $scope.hoursView = !$scope.hoursView;
  };

  $scope.addColor = function (bool) {
    if (bool === true) {
      $scope.changeColor = { color: 'white', background: '#404A59' };
    } else if (bool === false) {
      $scope.changeColor = { color: 'black', background: 'white' };
    }
  };
});

angular.module('waitApp').service('mainService', function ($http) {
  this.getWeather = function () {
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?id=5323810&APPID=c735c06ca7d676e0e19ae4df79316c89&units=imperial'
    });
  };
});

angular.module('waitApp').directive('ridesDirective', function () {
  return {
    templateUrl: '/directives/rides.html',
    restrict: 'AE',
    scope: {
      parkData: '='
    },
    link: function link(scope, element, attr) {},
    controller: function controller($scope, disneyService, caliService) {

      $scope.hideRides = function (land) {
        land.openRide = !land.openRide;
      };

      $scope.addColor = function (bool) {
        if (bool === true) {
          this.changeColor = { color: 'red' };
        } else if (bool === false) {
          this.changeColor = { color: '#404A59' };
        }
      };
    }
  };
});

angular.module('waitApp').directive('weatherDirective', function () {
  return {
    restrict: 'AE',
    link: function link(scope, element, attr) {
      if (scope.whatTime >= 17) {
        scope.sunHidden = true;
        scope.moonHidden = false;
      } else {
        scope.sunhidden = false;
        scope.moonHidden = true;
      }
    }
  };
});