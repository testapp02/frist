var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
// <<<<<<< HEAD
// var course  = require('./routes/course');
// var banner  = require('./routes/banner');
var shOrder = require('./routes/pjb/order/shOrder.js');
var jyOrder = require('./routes/pjb/order/jyOrder.js');
var fhOrder = require('./routes/pjb/order/fhOrder.js');
var zdOrder = require('./routes/order/zdOrder.js');

// =======
var course  = require('./routes/course/course');
var banner  = require('./routes/banner/banner');
// var order = require('./routes/order/order');
// >>>>>>> 5da1bb038889fc935df5c9a6c2171ba3fee33fbc

//....about
var about = require('./routes/gjc/about');
var comments = require('./routes/gjc/comments');

var app = express();
app.listen(8888,function(){
	console.log("8888...");
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/course',course);
app.use('/api/banner',banner);
app.use('/api/pjb/shOrder',shOrder);
app.use('/api/pjb/jyOrder',jyOrder);
app.use('/api/pjb/fhOrder',fhOrder);

app.use('/api/gjc/zdOrder',zdOrder);
app.use('/api/gjc/about',about);
app.use('/api/gjc/comments',comments);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
