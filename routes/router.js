// OK routes here

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/test', function(req, res) {
  res.send('');
});

app.get('/results', function(req, res) {
  res.send('');
});

app.get('/api', function(req, res) {
  res.send('Hello World!');
});

app.get('/api', function(req, res) {
  res.send('Hello World!');
});

app.get('/api', function(req, res) {
  res.send('Hello World!');
});

app.get('/api', function(req, res) {
  res.send('Hello World!');
});

