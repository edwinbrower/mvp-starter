var express = require('express');
var db = require('../database-mongo/index');
// var bodyParser = require('body-parser');
var Gif = require('../database-mongo/Models/gif');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

var randomNum = Math.floor(Math.random() * 100)
app.get('/randomGifs', function(req, res) {
  // Gif.find().limit(-1).skip(randomNum).next();
  Gif.findOne().skip(randomNum).exec(function(err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });

  // Gif.selectRandom();
});

app.get('/randomGif', function(req, res) {
  // Gif.find().limit(-1).skip(randomNum).next();
  // Gif.findOne().skip(randomNum).exec(function(err, results) {
  Gif.find().limit(-1).skip(Math.floor(Math.random() * 100)).exec(function(err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });

  // Gif.selectRandom();
});

// this sends 100!
app.get('/gifs', function (req, res) {
  Gif.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// app.post('/gif/like', function(req, res) {
//   // Gif.find({id = req.id})
//   console.log('like', req.id);
//   // findAndModify
//   // Gif.update({id: req.id}, {favorites: ++req.favorites});
//   // Gif.find({});
// });


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// might not need this?
module.exports = app;