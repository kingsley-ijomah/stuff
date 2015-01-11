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
  tags: {type: []},
  article: String,
  created_at: Date,
  updated_at: Date
});

/**
 * Pre-save hook
 */

PostSchema.pre('save', function(next) {
	var now = new Date();
	if (!this.created_at) {
		this.created_at = now;
	}
	this.updated_at = now;
  next();
});

/**
* Instance methods
*/

PostSchema.methods = {}

/**
* Static methods
*/

PostSchema.statics = {}

mongoose.model('Post', PostSchema);