var User = require('./userModel');
var _ = require('lodash');
var Mailer = require('../../util/mailer');


exports.params = function(req, res, next, id){
  User.findById(id)
    .exec()
    .then(function(user){
      if(!user){
        next(new Error('No User with that id'));
      }else{
        req.user = user;
        next();
      }
    })
};

exports.get = function(req, res, next){
  User.find({})
    .exec()
    .then(function(users){
      res.json(users.map(function(user){
        return user;
      }));
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next){
  var user = req.user;
  res.json(user);
};

exports.put = function(req, res, next){
  var user = req.user;
  var update = req.body;
  _.merge(user, update);
  user.save(function(err, saved){
    if(err){
      next(err);
    }else{
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next){
  // Mailer.sendMail(req.body);
  var newUser = new User(req.body);

  newUser.save(function(err, saved){
    if(err){
      return next(err);
    }else{
      res.json(saved);
    }
  });
};

exports.delete = function(req, res, next){
  req.user.remove(function(err, removed){
    if(err){
      next(err);
    }else{
      res.json(removed);
    }
  });
};
