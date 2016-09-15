angular.module('waitApp').service('caliService', function(){
const caliData =
  [
    {
      name:'A Bug\'s Land',
      attractions:
        [
            {
              id: 0,
              name:'Flik\'s Flyers',
              waitTime:10, //time in minutes
              status: true //true = open, false = closed
            },
            {
              id: 1,
              name:'Francis\' Ladybug Boogie ',
              waitTime: 5,
              status: true
            },
            {
              id:2,
              name:'Heimlich\'s Chew Chew Train',
              waitTime:10,
              status:true
            },
            {
              id:3,
              name:'Tuck and Roll\'s Drive \'Em Buggies',
              waitTime:10,
              status:true
            }
          ]
        },
        {
      name:'Cars Land',
      attractions:
        [
          {
            id: 4,
            name:'Luigi\'s Rollickin\' Roadsters',
            waitTime: 10,
            status: true
          },
          {
            id: 5,
            name:'Mater\'s Junkyard Jamboree',
            waitTime: 5,
            status: true
          },
          {
            id:6,
            name:'Radiator Springs Racers',
            waitTime:45,
            status:true
          },
          {
            id:7,
            name:'Radiator Springs Racers (Single Rider)',
            waitTime:10,
            status:true
          }
        ]
      },
      {
      name:'Golden State Park',
      attractions:
        [
          {
            id:8,
            name:'Grizzly River Run',
            waitTime: 15,
            status: true
          },
          {
            id:9,
            name:'Soarin\' Around the World',
            waitTime: 35,
            status: true
          }
        ]
      },
      {
      name:'Hollywood Pictures Backlot',
      attractions:[
          {
            id:10,
            name:'Monsters, Inc. Mike and Sully to the Rescue!',
            waitTime:10,
            status:true
          },
          {
            id:11,
            name:'The Twilight Zone Tower of Terror',
            waitTime:40,
            status:true
          }
        ]
      },
      {
      name:'Paradise Pier',
      attractions:[
          {
            id:12,
            name:'California Screamin\'',
            waitTime:20,
            status:true
          },
          {
            id:13,
            name:'Golden Zephyr',
            waitTime:5,
            status:true
          },
          {
            id:14,
            name:'Goofy\'s Sky School',
            waitTime:10,
            status:true
          },
          {
            id:15,
            name:'The Little Mermaid - Ariel\'s Undersea Adventure',
            waitTime:10,
            status:true
          },
          {
            id:16,
            name:'Mickey\'s Fun Wheel (Non-Swinging)',
            waitTime:15,
            status:true
          },
          {
            id:17,
            name:'Mickey\'s Fun Wheel (Swinging)',
            waitTime:20,
            status:true
          },
          {
            id:18,
            name:'Silly Symphony Swings (Single Swing)',
            waitTime:10,
            status:true
          },
          {
            id:19,
            name:'Silly Symphony Swings (Tandem Swing)',
            waitTime:10,
            status:true
          },
          {
            id:20,
            name:'Toy Story Midway Mania!',
            waitTime:25,
            status:true
          }
        ]
      }
  ];



this.getCaliRides = function(){
return caliData;
};



});
