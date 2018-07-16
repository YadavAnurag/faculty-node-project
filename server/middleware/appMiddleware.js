//global middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var override = require('method-override');
var path = require('path');
var cookieParser = require('cookie-parser');
var express = require('express');

module.exports = function(app){
  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());

};
