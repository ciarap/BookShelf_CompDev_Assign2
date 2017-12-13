 var mongoose = require('mongoose')
 var Schema = mongoose.Schema;
 var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 100],
    message: 'Author Name and Book Title should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];


var dateValidator = [
  validate({
    validator: 'isLength',
    arguments: [4],
    message: 'Date should be {ARGS[0]} characters'
  })
];


  var BookSchema = new Schema({
           votes:Number,
           authorId:{type: String, required: true},
           title:{type: String, required: true, validate: nameValidator},
           author:{type: String, required: true, validate: nameValidator},
           images:[{type:String, required: true}],
           category:{type: String, required: true},
           date:{type: String, required: true, validate:dateValidator},
           blurb:{type: String, required: true}
  });

  module.exports = mongoose.model('books', BookSchema);