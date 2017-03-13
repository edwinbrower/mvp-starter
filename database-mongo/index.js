var mongoose = require('mongoose');
var searchGiphy = require('../server/lib/searchGiphy');  //// correct path 
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