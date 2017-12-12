 var mongoose = require('mongoose')
 var Schema = mongoose.Schema;


var ImageSchema = new Schema({
           url:{type: String, required: true}
  });


  var BookSchema = new Schema({
           votes:Number,
           authorId:{type: String, required: true},
           title:{type: String, required: true},
           author:{type: String, required: true},
           images:[ImageSchema],
           category:{type: String, required: true},
           date:{type: String, required: true},
           blurb:{type: String, required: true}
  });

  module.exports = mongoose.model('books', BookSchema);