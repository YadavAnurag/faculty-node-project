var _ = require('lodash');

var config = {
  dev: "development",
  test: "testing",
  prod: "production",
  port: process.env.PORT || 4000,
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;
// require could error out if config.env does not exists
try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);
