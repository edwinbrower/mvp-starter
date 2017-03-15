var db = require('../index.js');
var mongoose = require('mongoose');
var request = require('request');
// var searchGiphy = require('.../server/lib/searchGiphy'); //// correct path 
// var autoIncrement = require("mongodb-autoincrement");
// mongoose.plugin(autoIncrement.mongoosePlugin);

//creates the gif table structure
var gifSchema = mongoose.Schema({
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

// Gif.insertAll = function (arrayOfGifShape, callback) {
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
// var randomNum = Math.floor(Math.random() * 100);
Gif.selectRandom = function() {
  Gif.find().limit(-1).skip(Math.floor(Math.random() * 100)).next();
};

/*
var randomNum = Math.floor(Math.random() * Gif.count())
var result = Gif.find().limit(-1).skip(randomNum).next()
*/

// gifSchema.pre('', function(next) {

// });




request('http://api.giphy.com/v1/gifs/search?q=cute+puppies&limit=100&api_key=dc6zaTOxFJmzC', function(err, response, body) {
  if (err) {
    console.log(err);
  } else {
    Gif.remove({}, function(err, gif) {
      if (err) {
        console.log(err);
      } else {
        console.log('data deleted and refreshed');
      }
    });

    (JSON.parse(body)).data.forEach(function(gif) {
      var newGif = new Gif ({
        index: 0, /// want this to auto increment // can this be done with _id?
        id: gif.id,
        slug: gif.slug,
        url: gif.images.fixed_width.url, // this????
        favorites: 0
      });
      newGif.save(function(err, gif) {
        if (err) {
          console.log(err);
        } else {
          // console.log(gif);
          // data really gets added here but that would send 100 messages!
        }
      }); 
    });
  }
});

// db.createCollection("counters");

module.exports = Gif;




