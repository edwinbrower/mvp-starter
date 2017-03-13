var db = require('../index.js');
var mongoose = require('mongoose');
var autoIncrement = require("mongodb-autoincrement");
// mongoose.plugin(autoIncrement.mongoosePlugin);

//creates the gif table structure
var gifSchema = mongoose.Schema({
  // _id: Number,
  index: Number,  // i might need _id.  ill want to console log later to see if it appears and what it looks like
  id: String,
  slug: String,
  url: String,
  favorites: Number
});

// gifSchema.plugin(autoIncrement.mongoosePlugin);

//creates the actual collection - table
var Gif = mongoose.model('Gif', gifSchema);
// autoIncrement.setDefaults({
//     collection: Gif,     // collection name for counters, default: counters 
//     field: index               // auto increment field name, default: _id 
//     // step: integerNumber             // auto increment step 
// });

Gif.selectAll = function(callback) {
  Gif.find({}, function(err, gifs) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
};

Gif.insertAll = function (arrayOfGifShape, callback) {
  Gif.insertMany(arrayOfGifShape, function(err, gifs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
};

// Gif.selectRandom = function(callback) {
//   var randomIndex = Math.floor(Math.random() * 100);
//   Gif.find({ index: randomIndex }, function(err, gifs) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, gifs);
//     }
//   });
// }; 
var randomNum = Math.floor(Math.random() * Gif.count())
Gif.selectRandom = function(callback) {
  Gif.find().limit(-1).skip(randomNum).next();
};
/*
var randomNum = Math.floor(Math.random() * Gif.count())
var result = Gif.find().limit(-1).skip(randomNum).next()
*/
var test = new Gif({
  index: 101, 
  id: '123', 
  slug: 'doggie', 
  url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  favorites: 0  
});

test.save(function(err, gif) {
  if (err) {
    console.log(err);
  } else {
    console.log(gif);
  }
});  

// db.createCollection("counters");


// getGifs('cute puppies').data.map(function(gif){
//   return new Gif({
//     index: index, /// want this to auto increment // can this be done with _id?
//     id: this.id,
//     slug: this.slug,
//     url: this.images.fixed_width.url, // this????
//     favorites: 0
//   });
// })

// Gif.create({
//   index: 0, 
//   id: '123', 
//   slug: 'doggie', 
//   url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
//   favorites: 0
// });

// Gif.save(function(err, gif) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(gif);
//   }
// })

module.exports = Gif;




