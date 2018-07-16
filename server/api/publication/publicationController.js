var publication = require('./publicationModel');
var _ = require('lodash');

exports.params = function(req, res, next, id){
  publication.findById(id)
    .exec()
    .then(function(publication){
      if(!publication){
        next(new Error('No publication with the provided id'));
      }else{
        req.publication = publication;
        next();
      }
    });
};

exports.get = function(req, res, next){
  publication.find({})
    .exec()
    .then(function(publications){
      res.json(publications.map(function(publication){
        return publication;
      }));
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next){
  var publication = req.publication;
  res.json(publication);
};

exports.put = function(req, res, next){
  var publication = req.publication;
  var updatePublication = req.body;
  _.merge(publication, updatePublication);
  publication.save(function(err, saved){
    if(err){
      next(err);
    }else{
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next){
  var newPublication = new publication(req.body);
  newPublication.save(function(err, saved){
    if(err){
      next(err);
    }else{
      res.json(saved);
    }
  });
};

exports.delete = function(req, res, next){
  req.publication.remove(function(err, removed){
    if(err){
      next(err);
    }else{
      res.json(removed);
    }
  });
};
