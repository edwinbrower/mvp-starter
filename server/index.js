var express = require('express');
var db = require('../database-mongo/index');
// var bodyParser = require('body-parser');
var gifs = require('../database-mongo/Models/gif');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

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

  // module.exports = app;