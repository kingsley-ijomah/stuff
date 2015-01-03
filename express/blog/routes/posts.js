var express = require('express');
var router = express.Router();

router.route('/posts')
   // create a post (accessed at POST http://localhost:3000/posts)
  .post(function(req, res) {

  })

  // get all the posts (accessed at GET http://localhost:3000/posts)
  .get(function(req, res) {
  	res.send('get request on posts');
  });

router.route('/posts/:post_id')
  // get the post with that id (accessed at GET http://localhost:3000/posts/:post_id)
  .get(function(req, res) {
  	res.json({post_id: 'test post with post id'});
  })

  // update the post with this id (accessed at PUT http://localhost:3000/posts/:post_id)
  .put(function(req, res) {

   })

  // delete the post with this id (accessed at DELETE http://localhost:3000/posts/:post_id)
  .delete(function(req, res) {

  });

  module.exports = router;