var _ = require('lodash')
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

     // Add a  review to an author
  exports.add_authorReview = function(req, res) {
     author.findById(req.params.id, function (err, author) {
         if(err) { res.sendStatus(404); }
         var review = {
             body: req.body.body,
             user: req.body.user 
          };
          author.reviews.push(review);
          console.log("Author Name"+author.name);
          author.save(function (err, author) {
              if(err) { return handleError(res, err); }
                 return res.status(200).json(author);
            });
      });
  };

// deletes a review from author 
exports.del_authorReview = function(req,res){
  console.log(req.params.id)
  author.findById(req.params.id, function (err,author){
    console.log(author.name)
    author.reviews.id(req.params.authorReviewId).remove()
    author.save(function(err){
      if(err){
        console.log(a)
      }
      else{
        console.log('author review removed')
         return res.status(200).json(author);
      }
    })
  })
}