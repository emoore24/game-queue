var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var roomCtrl = require('./controllers/room');

var app = express();

// view engine setup
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.render('index.html');
});

app.get('/room/:roomId', roomCtrl.getRoom);


app.listen(3000, function() {
   console.log('Example app listening on port 3000!');
});
