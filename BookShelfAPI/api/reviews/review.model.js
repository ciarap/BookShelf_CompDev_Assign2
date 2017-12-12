var mongoose = require('mongoose')
 var Schema = mongoose.Schema;

  var ReviewSchema = new Schema({
           upvote:Number,
           opinion: {type: String, required: true},
           bookId: {type: String, required: true},
           bookTitle:{type:String,required:true},
           username:{type: String, required: true},
  });

  module.exports = mongoose.model('reviews', ReviewSchema);