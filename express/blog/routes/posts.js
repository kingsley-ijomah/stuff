var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.route('/posts')
  .post(function(req, res) {
    Post.create(req, res);
    res.send('done!');
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