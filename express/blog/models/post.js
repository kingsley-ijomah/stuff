var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var Schema = mongoose.Schema({
    title: String,
    tags: String,
    article: String,
});

var Post = mongoose.model('Post', Schema);

exports.create = function (req, res){
  new Post({
    title: req.body.title,
    tags: req.body.tags,
    article: req.body.article 
  }).save(function(err, result) {
    if (err) return console.error(err);
    //result.something...
  });
};
