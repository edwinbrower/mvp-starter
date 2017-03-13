// var $ = require('jquery');
// import $ from 'jquery';
// var http = require('http');
var mongoose = require('mongoose');
var searchGiphy = require('../server/lib/searchGiphy');  //// correct path 
// var request = require('request');
// var Gif = require('./models/gif.js');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error', console.error.bind(console, 'connection error:'));
});

db.once('open', function() {
  // can i add it here??

  // request('http://api.giphy.com/v1/gifs/search?q=cute+puppies&limit=100&api_key=dc6zaTOxFJmzC', function(err, response, body) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // console.log((JSON.parse(body)).data);
  //     (JSON.parse(body)).data.forEach(function(gif) {
  //       var newGif = new Gif ({
  //         index: 0, /// want this to auto increment // can this be done with _id?
  //         id: gif.id,
  //         slug: gif.slug,
  //         url: gif.images.fixed_width.url, // this????
  //         favorites: 0
  //       });
  //       newGif.save(function(err, gif) {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           // console.log(gif);
  //         }
  //       }); 
  //     });
  //   }
  // });  
  console.log('mongoose connected successfully');
}); 

module.exports = db;

/*
var randomNum = Math.floor(Math.random() * Gif.count())
var result = Gif.find().limit(-1).skip(randomNum).next()
*/

// var gifSchema = mongoose.Schema({
//   index: Number,  // i might need _id.  ill want to console log later to see if it appears and what it looks like
//   id: String,
//   slug: String,
//   url: String,
//   favorites: Number
// });

// var Gif = mongoose.model('Gif', gifSchema);

// var selectAll = function(callback) {
//   Gif.find({}, function(err, gifs) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, gifs);
//     }
//   });
// };

// var insertAll = function (callback) {
//   Gif.insertMany(arrayOfGifShape, function(err, gifs) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, gifs);
//     }
//   });
// }

// var selectRandom = function(callback) {
//   var randomIndex = Math.floor(Math.random() * 100);
//   Gif.find({ index: randomIndex }, function(err, gifs) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, gifs);
//     }
//   });
// }

//db.yourCollection.find().limit(-1).skip(yourRandomNumber).next()

// gifSchema.pre('', function(next) {

// });

// var searchGiphy = ({key, query}, callback) => {
//   $.get('http://api.giphy.com/v1/gifs/search', {
//     q: query,
//     limit: 100,
//     api_key: key,
//   })
//   .done(({data}) => {
//     if (callback) {
//       callback(data);
//     }
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.error(err)
//     );
//   });
// };

// componentDidMount() { 
//   this.getGifs('cute puppies');
// }
// var getGifs = (query) => {
//   var options = {
//     key: 'dc6zaTOxFJmzC',
//     query: query
//   };
//   searchGiphy(options, (gifs) => {
//     console.log('gifs in db: ', gifs)
//   });
// };

// console.log();

// ideally should be refactored. but MVP
// var getGifs = app.get('/results', function(req, res) {
//   url: 'http://api.giphy.com/v1/gifs/search?q=cute+puppies&limit=100&api_key=dc6zaTOxFJmzC';
// });
// getGifs('cute puppies').data.map(function(gif){
//   return new Gif({
//     index: index, /// want this to auto increment // can this be done with _id?
//     id: this.id,
//     slug: this.slug,
//     url: this.images.fixed_width.url, // this????
//     favorites: 0
//   });
// })



// look into giving an array of right shape (like the above) the turn into my db.
// will need to map to accomplish this.
// for connection i will read file once then store it



// module.exports.selectAll = selectAll;
// module.exports.selectRandom = selectRandom;
// module.exports.insertAll = insertAll;