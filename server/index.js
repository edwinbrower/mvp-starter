var express = require('express');
var db = require('../database-mongo/index');
// var bodyParser = require('body-parser');
var Gif = require('../database-mongo/Models/gif');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

var randomNum = Math.floor(Math.random() * Gif.count())
app.get('/randomGif', function(req, res) {
  Gif.find().limit(-1).skip(randomNum).next();
});

app.get('/gifs', function (req, res) {
  Gif.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.post('/gif/like', function(req, res) {
  console.log('like', req);
  // Gif.find();
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// might not need this?
module.exports = app;