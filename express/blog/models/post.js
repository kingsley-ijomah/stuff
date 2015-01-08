/**
* Module dependencies
*/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
* Post schema
*/

var PostSchema = new Schema({
    title: String,
    tags: String,
    article: String
});

/**
* Methods
*/

PostSchema.methods = {

  /**
  * Create a new post record
  * 
  * @param {Object} req
  * @param {Object} res
  */

  create: function (){
    this.save(function(err, result) {
      if (err) return console.error(err);
      //result.something...
    });
  }
}

mongoose.model('Post', PostSchema);