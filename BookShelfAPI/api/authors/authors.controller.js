var _ = require('lodash')
//var datastore = require('../datastore');
    var author = require('./author.model');


function handleError(res, err) {
    return res.status(500).json(err);
}

// Get author by name
    exports.getAuthorByName = function(req, res) {
      console.log("Name to get:"+req.params.authorName);
      var query = author.where('name').eq(req.params.authorName)
       query.find(function (err, authors) {
        if(err ) {  return handleError(res, err); }

        return res.status(200).json(authors);
      });
    } ;


   exports.show = function(req, res) {
      author.findById(req.params._id, function (err, author) {
          if(err) { return handleError(res, err); }
          return res.status(200).json(author);
      });
  } ;

 // Get all authors
    exports.index = function(req, res) {
       author.find(function (err, authors) {
        if(err) { return handleError(res, err); }
        console.log('index ok' + authors[0]);
        return res.status(200).json(authors);
      });
    } ;


    // Creates a new author.
    exports.create = function(req, res) {
        author.create(req.body, function(err, authors) {
        if(err) { return handleError(res, err); }
        console.log("Creating Author");
        return res.status(201).json(authors);
      });
    };
