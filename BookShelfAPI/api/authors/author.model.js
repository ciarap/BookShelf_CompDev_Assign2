var mongoose = require('mongoose')
 var Schema = mongoose.Schema;


var AuthorReviewSchema= new Schema({
	body: {type: String, required: true},
	user: {type: String, required: true}
});

  var AuthorSchema = new Schema({
           name :{type: String, required: true},  
           url :{type: String, required: true}, 
           imageUrl :{type: String, required: true}, 
           info :{type: String, required: true},
           reviews: [AuthorReviewSchema]
  });

  module.exports = mongoose.model('authors', AuthorSchema);