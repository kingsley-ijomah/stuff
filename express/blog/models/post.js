var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var PostSchema = mongoose.Schema({
    title: String,
    tags: String,
    article: String,
});

var Post = mongoose.model('Post', PostSchema);

var record = new Post({ 
  title: 'This is the second post example',
  tags: 'html',
  article: 'This is the article content area' 
});

record.save(function(err, result) {
  if (err) return console.error(err);
  // result.speak();
});