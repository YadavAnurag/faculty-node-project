var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');

require('mongoose')
  .connect(config.db.url, {useNewUrlParser:true});

require('./middleware/appMiddleware')(app);

//api setup
app.use('/api', api);

// global error handling
app.use(function(err, req, res, next){
  logger.error(err.stack);
  res.status(500).send("Oops...");
});

// export the app for testing
module.exports = app;
