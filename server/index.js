var express = require('express');
var db = require('../database-mongo/index');
// var bodyParser = require('body-parser');
var gifs = require('../database-mongo/Models/gif');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


// app.get('/gifs', function (req, res) {
//   gifs.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// var getGifs = app.get('/results', function(req, res) {
//   url: 'http://api.giphy.com/v1/gifs/search?q=cute+puppies&limit=100&api_key=dc6zaTOxFJmzC';
// });
 
// console.log(getGifs);


// getGifs('cute puppies').data.map(function(gif){
//   return new Gif({
//     index: index, /// want this to auto increment // can this be done with _id?
//     id: this.id,
//     slug: this.slug,
//     url: this.images.fixed_width.url, // this????
//     favorites: 0
//   });
// })
app.listen(3000, function() {
  console.log('listening on port 3000!');
});



  // componentDidMount() { 
  //   this.getGifs('cute puppies');
  // }
  
  // getGifs(query) {
  //   var options = {
  //     key: 'dc6zaTOxFJmzC',
  //     query: query
  //   };
  //   searchGiphy(options, (gifs) => {
  //     this.setState({
  //       gifs: gifs
  //     });
  //   });
  // }


  // module.exports = app;