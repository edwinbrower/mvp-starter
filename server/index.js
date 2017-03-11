var express = require('express');
var bodyParser = require('body-parser');
var gifs = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/gifs', function (req, res) {
  gifs.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

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