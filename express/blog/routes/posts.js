var express = require('express');
var router = express.Router();

router.route('/posts')
  .post(function(req, res) {
    console.log(req.body);
    res.send('hello');
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