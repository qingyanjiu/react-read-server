var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var session = require('express-session');
var flash = require('connect-flash');
// var MongoStore = require('connect-mongo')(session);
var settings = require('./settings');

var routes = require('./routes/index');
var books = require('./routes/Books');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session());

app.use(express.static(path.join(__dirname, 'public')));


// app.use(session({
//       secret: settings.cookieSecret, 
//       key:'sid',
//       store: new MongoStore({
//         url: settings.url,
//       }),
//       resave: true,
//       saveUninitialized: true,
// }));

app.use(flash());

//app.helpers() 
// app.locals({
  // config: config,
  // title: 'title'
// });
//app.dynamicHelpers
app.use(function(req, res, next){

  // res.locals.title = config['title']
  res.locals.csrf = req.session ? req.session._csrf : '';
  res.locals.req = req;
  res.locals.session = req.session;
  // res.locals.success=req.flash("success").lenghth?req.flash("success"):null;
  // res.locals.error=req.flash("error").lenghth?req.flash("error"):null;
  // res.locals.result=req.flash("result").lenghth?req.flash("result"):null;


  var _send = res.send;
  var sent = false;
  res.send = function(data){
      if(sent) return;
      _send.bind(res)(data);
      sent = true;
  };

  next();
});


app.use('/', routes);
app.use('/books', books);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
