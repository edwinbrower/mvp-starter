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
  index: Number,  // we might need _id.  ill want to console log later to see if it appears and what it looks like
  id: String,
  slug: String,
  url: String,
  favorites: Number
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

var insertAll = function (callback) {
  Gif.insertMany(arrayOfGifShape, function(err, gifs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
}

var selectRandom = function(callback) {
  var randomIndex = Math.floor(Math.random() * 100);
  Gif.find({ index: randomIndex }, function(err, gifs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, gifs);
    }
  });
}

//db.yourCollection.find().limit(-1).skip(yourRandomNumber).next()

gifSchema.pre('', function(next) {

});

___ApiResult___.data.map(function(gif){
  return new Gif({
    index: index, /// want this to auto increment // can this be done with _id?
    id: this.id,
    slug: this.slug,
    url: this.images.fixed_width.url, // this????
    favorites: 0
  });
})

// look into giving an array of right shape (like the above) the turn into my db.
// will need to map to accomplish this.
// for connection i will read file once then store it



module.exports.selectAll = selectAll;
module.exports.selectRandom = selectRandom;
module.exports.insertAll = insertAll;