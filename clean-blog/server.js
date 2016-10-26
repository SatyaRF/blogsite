var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});



// // app.get('/article-two', function(req, res){
// //    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
// // });

// // app.get('/article-three', function(req, res){
// //    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
// // });

app.get('/css/clean-blog.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'clean-blog.min.css'));
});

app.get('/vendor/bootstrap/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/bootstrap/css/', 'bootstrap.min.css'));
});

app.get('/vendor/font-awesome/css/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/font-awesome/css/', 'font-awesome.min.css'));
});

app.get('/img/home-bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'home-bg.jpg'));
});

app.get('/vendor/jquery/jquery.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/jquery/', 'jquery.min.js'));
});

app.get('/js/contact_me.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'contact_me.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
