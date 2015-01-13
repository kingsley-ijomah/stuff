/*!
 * nodejs-express-mongoose-blog-demo
 * Copyright(c) 2015 Kingsley Ijomah <kingsley.ijomah@gmail.com>
 * MIT Licensed
 */

/**
* Module dependencies
*/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ConnectMincer = require('connect-mincer');
var engine = require('ejs-mate');
var fs = require('fs');
var mongoose = require('mongoose');
var helpers = require('view-helpers')

var app = express();

// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect('mongodb://localhost/blog', options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Load all .js files in models dir
fs.readdirSync(__dirname + '/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});


// setting up mincer (sprocket style) asset manager
var connectMincer = new ConnectMincer({
  root: __dirname,
  production: process.env.NODE_ENV === 'production',
  mountPoint: '/assets',
  manifestFile: __dirname + '/public/assets/manifest.json',
  paths: [
    'assets/css',
    'assets/js',
    'vendor/js'
  ]
});

// plug mincer into middleware
app.use(connectMincer.assets());

if (process.env.NODE_ENV !== 'production')
  app.use('/assets', connectMincer.createServer());

// make sure you declare this middleware after `connect-flash` and `express.session` 
// middlewares and before `express.router`
// for API checkout https://github.com/madhums/node-view-helpers
app.use(helpers('blog'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// attach posts router into app
app.use(require('./routes/posts'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//use .html extensions instead of .handlebars/hbs
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

// make use of the ejs template
app.set('view engine', 'ejs');

// use ejs-locals for all ejs templates 'ejs-mate'
// makes it possible for us to use layout '/views/boilerplate.js'
// also makes it possible for us to use partial in views
app.engine('ejs', engine);

app.get('/', function(req, res) {
  var Post = mongoose.model('Post');
  Post.find(function(err, posts) {
    res.locals.posts = posts;
    res.redirect('posts/index');
  });
});

// map static pages
app.get('/about', function(req, res) {
  res.render('static/about');
});

app.get('/login', function(req, res) {
  res.render('static/login');
});

app.get('/contact', function(req, res) {
  res.render('static/contact');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
