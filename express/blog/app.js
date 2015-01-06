var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');
var ConnectMincer = require('connect-mincer');

var app = express();

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

// attach posts router into app
app.use(require('./routes/posts'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//use .html extensions instead of .handlebars/hbs
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

// make use of the ejs template
app.set('view engine', 'ejs');

// express-ejs-layouts module make it possible to use
// default layout, would work without the line below
// as layout is the default used
app.set('layout', 'layout');

// plug in expressLayouts into middleware making it possible
// to use layout.ejs in /views
app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('posts/index');
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
