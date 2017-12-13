var mongoose = require('mongoose')
var validate = require('mongoose-validator');

 var Schema = mongoose.Schema;


var userValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 20],
    message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Username should contain alpha-numeric characters only'
  })
];

var opinionValidator = [
  validate({
    validator: 'isLength',
    arguments: [1, 200],
    message: 'Opinion should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

  var ReviewSchema = new Schema({
           upvote:Number,
           opinion: {type: String, required: true, validate: opinionValidator},
           bookId: {type: String, required: true},
           bookTitle:{type:String,required:true},
           username:{type: String, required: true, validate: userValidator},
  });




module.exports = mongoose.model('reviews', ReviewSchema);