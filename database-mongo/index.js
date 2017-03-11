var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var gifSchema = mongoose.Schema({
  index: Number,
  id: String,
  url: String,
  favorite: Number
});

var Gif = mongoose.model('Gif', gifSchema);

var selectAll = function(callback) {
  Gif.find({}, function(err, gifs) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
};

var selectRandom = function(callback) {
  Gif.find({}, function(err, gifs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
}

module.exports.selectAll = selectAll;
module.exports.selectRandom = selectRandom;