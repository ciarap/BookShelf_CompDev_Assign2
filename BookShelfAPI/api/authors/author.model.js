var mongoose = require('mongoose')
 var Schema = mongoose.Schema;

  var AuthorSchema = new Schema({
            name :{type: String, required: true},  
           url :{type: String, required: true}{type: String, required: true}{type: String, required: true}, 
           imageUrl :{type: String, required: true}{type: String, required: true}, 
           info :{type: String, required: true}
  });

  module.exports = mongoose.model('authors', AuthorSchema);