const{Queue} = require('../Queue');
const{displayQ} = require('../Queue');
let adopters = new Queue();

const adopterData =[
  {name:'Mary',},
  {name:'John',},
  {name:'David',},
  {name:'Caroll',},
  {name:'Jacalyn'},
  {name:'Wyona',},
  {name:'Eileen',},
  {name:'Elba',},
  {name:'Jack',},
];

adopterData.forEach(eachAdopter =>{
  adopters.enqueue(eachAdopter);
});

const AdoptersService = {
  getAdopters() {
    const displayAdopters = displayQ(adopters);
    return displayAdopters;
  },

  inlineForAdoption(){
    return adopters.peek();
  },

  addName(name){
    
    adopterData.push(name);
    
    adopters.enqueue(name)
    return displayQ(adopters);
  },
  adopt() {
    adopters.dequeue();
    
    return displayQ(adopters);
  },

};

module.exports = AdoptersService;