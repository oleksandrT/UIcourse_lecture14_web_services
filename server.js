var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set ejs as rendering engine
// app.set('view engine', 'ejs');

// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

// render the ejs page
app.get('/', function (req, res) {
  res.sendfile('index.html');
});

// when Add to Top button is clicked
app.post('/', function (req, res) {
  console.log("Hello " + req.body.name );
  res.redirect('/');
});

app.listen(8000);
console.log('App is listening on PORT 8000');
