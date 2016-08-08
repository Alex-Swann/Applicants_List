;(function(){
  'use strict';
})();

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    nunjucks = require('nunjucks'),
    sass = require('node-sass-middleware');

var applicants = require('./routes/applicants');
var port = process.env.PORT;

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

app.use('/applicants', applicants);

app.get('*',function (req, res) {
  res.redirect('/applicants');
});


app.listen(port, function(){
  if(port == 4000){
    console.log("\x1b[36mServer Running\x1b[0m\nhttp://localhost:" + port + "\n");
  } else {
    console.log("\x1b[36mTest Server Running\x1b[0m\nhttp://localhost:" + port + "\n");
  }
});

module.exports = app;
