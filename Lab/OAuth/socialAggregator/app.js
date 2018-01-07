var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret:'something',resave: true,
saveUninitialized: true}));

passport.serializeUser(function(user,done){
  done(null,user);
})

passport.deserializeUser(function(){
  done(null,user);
});

passport.use(new GoogleStrategy({
  clientID:'775383455085-s6j9b4mnuar3dob44d6voi2g1v40v2da.apps.googleusercontent.com',
  clientSecret:'jsdbL2YCgyqL7pfxP1hhowYS',
  callbackURL:'http://localhost:2000/auth/google/callback'},
  function(req,accessToken,refreshToken,profile,done){
    done(null,profile)
  }
));

app.use('/', index);
app.use('/users', users);
app.use('/auth',auth);

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
