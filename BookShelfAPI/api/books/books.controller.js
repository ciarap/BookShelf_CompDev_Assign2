var _ = require('lodash')
    //var datastore = require('../datastore');
    var book = require('./book.model');


function handleError(res, err) {
  console.log(err);
    return res.status(500).json(err);
}

    // Get all books
    exports.index = function(req, res) {
       book.find(function (err, books) {
        if(err) { return handleError(res, err); }
        console.log('index ok' + books[0]);
        return res.status(200).json(books);
      });
    } ;


    exports.showTop = function(req, res) {
      var query = book.find({}).sort({votes: 'desc'}).limit(5).where('votes').gt(0)
      query.exec(function (err, books) {
        if(err) { return handleError(res, err); }
        console.log('index ok' + books[0]);
        return res.status(200).json(books);
      });
    } ;

    exports.show = function(req, res) {
      book.findById(req.params._id, function (err, book) {
          if(err) { return handleError(res, err); }
          return res.status(200).json(book);
      });
  } ;

    // Creates a new book.
    exports.create = function(req, res) {
        req.body.votes = 0 ;
      console.log("Create");
        book.create(req.body, function(err, book) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(book);
      });
    };

 exports.destroy = function(req, res) {
    book.findById(req.params._id, function (err, book) {
        if(err) { return handleError(res, err); }        
        book.remove(function (err) {
            if(err) { return handleError(res, err); }
            return res.sendStatus(200,'Deleted');
        });
    })
};


    // Update the votes for a posts.
  exports.update_votes = function(req, res) {
     book.findById(req.params._id, function (err, book) {
          if(err) { res.sendStatus(404); }
          book.votes = req.body.votes
          book.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.sendStatus(200);
          });
      });
  };
 