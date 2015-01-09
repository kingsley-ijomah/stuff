
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
  .post(function(req, res) {
    var post = new Post(req.body)
    post.save(function(err) {
      if (err) {
        return res.render('posts/new');
      }
      return res.render('posts/index');
    });
  })

  .get(function(req, res) {
  	res.render('posts/index');
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
    res.render('posts/view');
  })

  .put(function(req, res) {

   })

  .delete(function(req, res) {

  });

  module.exports = router;