var _ = require('lodash')
var datastore = require('../datastore');

    // Get all authors
    exports.index = function(req, res) {
        return res.status(200).json(datastore.authors);
    } ;

    // Get a single author
   exports.show = function(req, res) {
        var index = _.findIndex(datastore.authors , 
               function(author) {
                  return author.id == req.params.id;
            });      
         if (index != -1) {
            return res.status(200).json(datastore.authors[index]);
          }
          else {
             return res.sendStatus(404);
           }

    };

    // Creates a new author.
    exports.create = function(req, res) {
       let authorId=  req.body.name.replace(/\s+/g, '-');   // replace spaces in title name with - for id value
       authorId=authorId.toLowerCase();  // set to lower case id
        var author = {
           name :req.body.name,  
           id :authorId, 
           url :req.body.url, 
           imageUrl :req.body.imageUrl, 
           info :req.body.info
        };

        var index = _.findIndex(datastore.authors , 
               function(author) {
                  return author.id ==authorId;
            });      
         if (index != -1) {
              return res.sendStatus(409,'Id already exists');
          }
          else {
           datastore.authors.push(author);
           return res.status(201).json(author);
           }
    };