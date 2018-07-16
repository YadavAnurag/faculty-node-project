var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');
var path = require('path');
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');


// require('mongoose')
//   .connect(config.db.url, {useNewUrlParser:true});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

require('./middleware/appMiddleware')(app);

// frontend setup
app.use('/', indexRouter);
app.use('/user', usersRouter);
//api setup
app.use('/api', api);

// global error handling
app.use(function(err, req, res, next){
  logger.error(err.stack);
  res.status(500).send("Oops...");
});

// export the app for testing
module.exports = app;
