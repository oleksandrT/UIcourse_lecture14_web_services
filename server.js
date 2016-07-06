var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set ejs as rendering engine
// app.set('view engine', 'ejs');

// parse html forms
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// set folder for static files
app.use('/public', express.static(__dirname + '/public'));

// render the ejs page
app.get('/', function (req, res) {
    res.sendfile('index.html');
});

// when Add to Top button is clicked
app.post('/', function (req, res) {
    //console.log("Hello " + req.body.name );

    var returnJsonObj = {echoMessage: req.body.message};
    console.log(returnJsonObj);

    //res.redirect('/');

    // console.log("Data: " + req.body );
    //
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(returnJsonObj));
});

app.listen(8000);
console.log('App is listening on PORT 8000');
