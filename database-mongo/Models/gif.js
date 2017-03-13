var db = require('../index.js');
var mongoose = require('mongoose');

//creates the gif table structure
var gifSchema = mongoose.Schema({
  index: Number,  // i might need _id.  ill want to console log later to see if it appears and what it looks like
  id: String,
  slug: String,
  url: String,
  favorites: Number
});

//creates the actual collection - table
var Gif = mongoose.model('Gif', gifSchema);

// Gif.selectAll = function(callback) {
//   Gif.find({}, function(err, gifs) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, gifs);
//     }
//   });
// };

// Gif.insertAll = function (callback) {
//   Gif.insertMany(arrayOfGifShape, function(err, gifs) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, gifs);
//     }
//   });
// };

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

var test = new Gif({
  index: 0, 
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




