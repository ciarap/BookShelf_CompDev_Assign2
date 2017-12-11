var _ = require('lodash')
    var datastore = require('../datastore');

    // Get all books
    exports.index = function(req, res) {
        return res.status(200).json(datastore.books);
    } ;

    // Get a single book
    exports.show = function(req, res) {
        var index = _.findIndex(datastore.books , 
               function(book) {
                  return book.id == req.params.id;
            });      
         if (index != -1) {
            return res.status(200).json(datastore.books[index]);
          }
          else {
             return res.sendStatus(404);
           }

    };

    // Creates a new book.
    exports.create = function(req, res) {
          let id=  req.body.title.replace(/\s+/g, '-');   // replace spaces in title name with - for id value
            id=id.toLowerCase();  // set to lower case id
            let authorId=  req.body.author.replace(/\s+/g, '-');   // replace spaces in title name with - for id value
            authorId=authorId.toLowerCase();  // set to lower case id
        var book = {
           id:id,
           votes:0,
           authorId:authorId,
           title:req.body.title,
           author:req.body.author,
           images:req.body.images,
           category:req.body.category,
           date:req.body.date,
           blurb:req.body.blurb
        };
        var index = _.findIndex(datastore.books , 
               function(book) {
                  return book.id == id;
            });      
         if (index != -1) {
              return res.sendStatus(409,'Id already exists');
          }
          else {
           datastore.books.push(book);
           return res.status(201).json(book);
           }
    };

    // Delete a book.
    exports.destroy = function(req, res) {
        var elements = _.remove(datastore.books , 
               function(book) {
                  return book.id == req.params.id;
            });  
         if (elements.length == 1) {
            return res.sendStatus(200);
          } else {
             return res.sendStatus(404);
          }
    };