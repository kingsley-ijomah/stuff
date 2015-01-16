
/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

/**
* Define routes
*/

router.route('/posts')
  // handle post data to be saved
  .post(function(req, res) {
    var post = new Post(req.body)
    post.save(function(err) {
      if (err) {
        res.locals.errors = err.errors;
        return res.render('posts/new');
      }
      return res.redirect('/posts');
    });
  })

  // handle reading all posts
  .get(function(req, res) {
    Post.find(function(err, posts) {
      res.locals.posts = posts
      res.render('posts/index');
    });
  });

router.route('/posts/new')
  .get(function(req, res) {
    res.render('posts/new');
  });

router.route('/posts/archive')
  .get(function(req, res) {
    res.render('posts/archive');
  });

router.route('/posts/:post_id')
  .get(function(req, res) {
    Post.findOne({_id: req.params.post_id}, function(err, post) {
      if (err) return handleError(err);
      res.locals.post = post
      res.render('posts/view');
    })
  })

  .put(function(req, res) {

   })

  .delete(function(req, res) {

  });

  module.exports = router;