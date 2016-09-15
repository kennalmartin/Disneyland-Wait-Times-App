angular.module('waitApp').service('disneyService', function(){
    const disneyData =
      [
        {
          name:'Adventureland',
          attractions:
            [
                {
                  id: 0,
                  name:'Indiana Jones Adventure',
                  waitTime:25, //time in minutes
                  status: true //true = open, false = closed
                },
                {
                  id: 1,
                  name:'Jungle Cruise',
                  waitTime: 10,
                  status: true
                },
                {
                  id:2,
                  name:'Enchanted Tiki Room',
                  waitTime:5,
                  status:true
                }
              ]
            },
            {
          name:'Critter Country',
          attractions:
            [
              {
                id: 3,
                name:'The Many Adventures of Winnie the Pooh',
                waitTime: 5,
                status: true
              },
              {
                id: 4,
                name:'Splash Mountain',
                waitTime: 35,
                status: true
              }
            ]
          },
          {
          name:'Fantasyland',
          attractions:
            [
              {
                id:5,
                name:'Alice in Wonderland',
                waitTime: 20,
                status: true
              },
              {
                id:6,
                name:'Casey Jr. Circus Train',
                waitTime: 20,
                status: true
              },
              {
                id:7,
                name:'Dumbo the Flying Elephant',
                waitTime: 15,
                status:true
              },
              {
                id:8,
                name: 'It\'s a Small World',
                waitTime: 10,
                status: true
              },
              {
                id:9,
                name:'King Arthur Carousel',
                waitTime: 5,
                status: true
              },
              {
                id:10,
                name:'Mad Tea Party',
                waitTime:5,
                status: true
              },
              {
                id:11,
                name:'Matterhorn Bobsleds',
                waitTime:15,
                status:true
              },
              {
                id:12,
                name:'Mr.Toad\'s Wild Ride',
                waitTime:20,
                status:true
              },
              {
                id:13,
                name:'Peter Pan\'s Flight',
                waitTime:40,
                status:true
              },
              {
                id:14,
                name:'Pinocchio\'s Daring Journey',
                waitTime:5,
                status:true
              },
              {
                id:15,
                name:'Snow White\'s Scary Adventures',
                waitTime:5,
                status:true
              },
              {
                id:16,
                name:'Storybook Land Canal Boats',
                waitTime:10,
                status:true
              }
            ]
          },
          {
          name:'Frontierland',
          attractions:[
              {
                id:17,
                name:'Big Thunder Mountain Railroad',
                waitTime:10,
                status:true
              }
            ]
          },
          {
          name:'Mickey\'s Toontown',
          attractions:[
              {
                id:18,
                name:'Gadget\'s Go Coaster',
                waitTime:15,
                status:true
              },
              {
                id:19,
                name:'Roger Rabbit\'s Car Toon Spin',
                waitTime:15,
                status:true
              }
            ]
          },
          {
          name:'New Orleans Square',
          attractions:[
              {
                id:20,
                name:'Haunted Mansion',
                waitTime:20,
                status:true
              },
              {
                id:21,
                name:'Pirates of the Caribbean',
                waitTime:15,
                status:true
              }
            ]
          },
          {
          name:'Tomorrowland',
          attractions:[
              {
                id:22,
                name:'Astro Orbiter',
                waitTime:15,
                status:true
              },
              {
                id:23,
                name:'Autopia',
                waitTime:15,
                status:true
              },
              {
                id:24,
                name:'Buzz Lightyear Astro Blasters',
                waitTime:10,
                status:true
              },
              {
                id:25,
                name:'Finding Nemo Submarine Voyage',
                waitTime:30,
                status:true
              },
              {
                id:26,
                name:'Space Mountain',
                waitTime:70,
                status:true
              },
              {
                id:27,
                name:'Star Tours',
                waitTime:30,
                status:true
              }
            ]
          }];



  this.getDisneyRides = function(){
    return disneyData;
  };


});
