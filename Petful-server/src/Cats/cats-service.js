const{Queue} = require('../Queue');
const{displayQ} = require('../Queue');
let cats = new Queue();

let catStore =[
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted:false,
  },
  {
    imageURL:'https://todaysveterinarynurse.com/wp-content/uploads/sites/3/2019/06/Adopt-a-Shelter-Cat.jpg', 
    imageDescription: 'Brown Cat with short hair',
    name: 'Tudie',
    sex: 'Female',
    age: 5,
    breed: 'European short hair',
    story: 'Thrown on the street',
    adopted:false,
  },
  {
    imageURL:'https://cdn1-www.cattime.com/assets/uploads/2014/06/adopt-cat-month.jpg', 
    imageDescription: 'Grey cat with short hair',
    name: 'Indigo',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted:false,
  },
  {
    imageURL:'https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/12488/12488747/54646493_385x385.jpg', 
    imageDescription: 'Domestic Long Hair (long coat)',
    name: 'Princess',
    sex: 'Female',
    age: 2,
    breed: 'LongHair',
    story: 'Came from another Shelter',
    adopted:false,
  },
  {
    imageURL:'https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/12662/12662017/54674009_385x385.jpg', 
    imageDescription: 'White and Black with Short hair',
    name: 'Dutchess',
    sex: 'Female',
    age: 10,
    breed: 'Domestic Short hair',
    story: 'Owner passed away',
    adopted:false,
  },
  {
    imageURL:'https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/9384/9384897/54643263_385x385.jpg', 
    imageDescription: 'white',
    name: 'Jasper',
    sex: 'Female',
    age: 6,
    breed: 'ShortCoat',
    story: 'Came from another Shelter',
    adopted:false,
  },
  {
    imageURL:'https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/12677/12677632/54683395_385x385.jpg', 
    imageDescription: 'Orange',
    name: 'Goose',
    sex: 'Male',
    age: 3,
    breed: 'ShortHair',
    story: 'Came from another Shelter',
    adopted:false,
  },
  {
    imageURL:'https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/14313/14313728/66218382_463x463.jpg', 
    imageDescription: 'Black and White',
    name: 'Dana',
    sex: 'Male',
    age: 1,
    breed: 'Domestic Short hair',
    story: 'Thrown on the street',
    adopted:false,
  },
  {
    imageURL:'https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/13610/13610240/60973366_500x500.jpg', 
    imageDescription: 'Orange',
    name: 'Cesaro',
    sex: 'Male',
    age: 2,
    breed: 'ShortHair',
    story: 'Came from another Shelter',
    adopted:false,
  },
  {
    imageURL:'https://azfriends.org/wp-content/uploads/2018/02/Adopt-a-Cat.jpg', 
    imageDescription: 'Grey and White',
    name: 'Scrappy',
    sex: 'Male',
    age: 2,
    breed: 'ShortHair',
    story: 'Thrown on the street',
    adopted:false,
  }
];

catStore.forEach(eachCat =>{
  cats.enqueue(eachCat);
});
// console.log(displayQ(cats));

const CatsService = {
  getCats() {
    const displayCats = displayQ(cats);
    // console.log(displayQ(cats));
    return displayCats;
  },

  adoptCat() {
    const aC = cats.dequeue();
    aC.adopted =true;
    cats.enqueue(aC);
    return displayQ(cats);
  },

};

module.exports = CatsService;