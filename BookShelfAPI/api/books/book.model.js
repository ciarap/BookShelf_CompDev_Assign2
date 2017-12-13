 var mongoose = require('mongoose')
 var Schema = mongoose.Schema;
 var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 20],
    message: 'Author Name and Book Title should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Title/ Name should contain alpha-numeric characters only'
  })
];

var blurbValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 200],
    message: 'Blurb should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

var dateValidator = [
  validate({
    validator: 'isLength',
    arguments: [4],
    message: 'Date should be {ARGS[0]} characters'
  }),
  validate({
    validator: 'isNumeric',
    passIfEmpty: true,
    message: 'Date should contain numeric characters only'
  })
];


  var BookSchema = new Schema({
           votes:Number,
           authorId:{type: String, required: true},
           title:{type: String, required: true, validate: nameValidator},
           author:{type: String, required: true, validate: nameValidator},
           images:[{type:String, required: true}],
           category:{type: String, required: true},
           date:{type: String, required: true, validate: dateValidator},
           blurb:{type: String, required: true}
  });

  module.exports = mongoose.model('books', BookSchema);