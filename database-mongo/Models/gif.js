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

Gif.selectAll = function(callback) {
  Gif.find({}, function(err, gifs) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
};

Gif.insertAll = function (callback) {
  Gif.insertMany(arrayOfGifShape, function(err, gifs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
}

Gif.selectRandom = function(callback) {
  var randomIndex = Math.floor(Math.random() * 100);
  Gif.find({ index: randomIndex }, function(err, gifs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
}

module.exports = Gif;




