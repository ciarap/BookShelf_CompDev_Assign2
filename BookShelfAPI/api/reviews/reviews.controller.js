var _ = require('lodash')
    //var datastore = require('../datastore');
       var review = require('./review.model');

 // Get all reviews
    exports.index = function(req, res) {
       review.find(function (err, reviews) {
        if(err) { return handleError(res, err); }
        console.log('index ok' + reviews[0]);
        return res.status(200).json(reviews);
      });
    } ;

 // Creates a new review.
    exports.create = function(req, res) {
         
        review.create(req.body, function(err, review) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(review);
      });
    };
 exports.show = function(req, res) {
      review.findById(req.params._id, function (err, review) {
          if(err) { return handleError(res, err); }
          return res.status(200).json(review);
      });
  } ;


    // Update the upvote for a reviews
  exports.update_upvote = function(req, res) {
     review.findById(req.params._id, function (err, review) {
          if(err) { res.sendStatus(404); }
          review.upvote = req.body.upvote
          review.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.sendStatus(200);
          });
      });
  };

exports.destroy = function(req, res) {
    review.findById(req.params._id, function (err, review) {
        if(err) { return handleError(res, err); }        
        review.remove(function (err) {
            if(err) { return handleError(res, err); }
            return res.sendStatus(200,'Deleted');
        });
    })
};
