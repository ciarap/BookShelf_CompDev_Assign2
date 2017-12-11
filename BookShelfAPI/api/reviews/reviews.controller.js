var _ = require('lodash')
    var datastore = require('../datastore');

    // Get all reviews
    exports.index = function(req, res) {
        return res.status(200).json(datastore.reviews);
    } ;

    // Get a single review
   exports.show = function(req, res) {
         if (datastore.reviews[req.params.id]) {
            return res.status(200).json(datastore.reviews[req.params.id]);
          } else {
            return res.sendStatus(404);
          }

    };

    // create a review
   exports.create = function(req, res) {
        var nextId = 0;
        var last = _.last(datastore.reviews);
        if (last != undefined) {
           nextId = last.id + 1;
        } else {
          nextId = 1;
        }
        var review = {
           id: nextId,
           upvote:0,
           opinion: req.body.opinion ,
           bookId: req.body.bookId,
           username:req.body.username
        };
        datastore.reviews.push(review);
        return res.status(201).json(review);
    };

    // Delete a review.
    exports.destroy = function(req, res) {
        var elements = _.remove(datastore.reviews , 
               function(review) {
                  return review.id == req.params.id;
            });  
         if (elements.length == 1) {
            return res.sendStatus(200);
          } else {
             return res.sendStatus(404);
          }
    };