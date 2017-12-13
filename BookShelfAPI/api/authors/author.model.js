var mongoose = require('mongoose')
 var Schema = mongoose.Schema;
  var validate = require('mongoose-validator');


var AuthorReviewSchema= new Schema({
	body: {type: String, required: true},
	user: {type: String, required: true}
});


var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 20],
    message: 'Author Name should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

var infoValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 50000],
    message: 'Info should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];


  var AuthorSchema = new Schema({
           name :{type: String, required: true, validate: nameValidator},  
           url :{type: String, required: true}, 
           imageUrl :{type: String, required: true}, 
           info :{type: String, required: true, validate: infoValidator},
           reviews: [AuthorReviewSchema]
  });



  module.exports = mongoose.model('authors', AuthorSchema);