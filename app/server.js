;(function(){
  'use strict';
})();

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    nunjucks = require('nunjucks'),
    sass = require('node-sass-middleware');

var port = parseInt(process.env.NODE_PORT) || 4000;

var applicants = require('./routes/applicants');

app.use(bodyParser.json());
app.set('view engine', 'njk');

nunjucks.configure(__dirname + '/views', {
  watch: true,
  express: app
});

app.use(sass({
  src: __dirname + '/sass',
  dest:__dirname + '/public',
  outputStyle: 'compressed'
}));

app.use(express.static('./app/public'));

app.use('/', applicants);

app.listen(port, function(){
  console.log("\x1b[36mServer Running\x1b[0m\nhttp://localhost:" + port + "\n");
});
