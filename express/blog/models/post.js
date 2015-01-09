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
 * Pre-save hook
 */

PostSchema.pre('save', function(next) {

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