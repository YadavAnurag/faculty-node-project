var about = require('./aboutModel');
var _ = require('lodash');

exports.params = function(req, res, next, id){
  about.findById(id)
    .exec()
    .then(function(about){
      if(!about){
        next(new Error('No About with provided id'));
      }else{
        req.about = about;
        next();
      }
    });
};

exports.get = function(req, res, next){
  about.find({})
    .exec()
    .then(function(abouts){
      res.json(abouts.map(function(about){return about;}));
    }, function(err){
      next(err);
    })
};


exports.getOne = function(req, res, next){
  var about = req.about;
  res.json(about);
};

exports.put = function(req, res, next){
  var about = req.about;
  var updateAbout = req.body;
  _.merge(about, updateAbout);
  about.save(function(err, saved){
    if(err){
      next(err);
    }else{
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next){
  var newAbout = new about(req.body);
  newAbout.save(function(err, saved){
    if(err){
      return next(err);
    }else{
      res.json(newAbout);
    }
  });
};

exports.delete = function(req, res, next){
  req.about.remove(function(err, removed){
    if(err){
      next(err);
    }else{
      res.json(removed);
    }
  });
};

