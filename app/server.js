;(function(exports){
  'use strict';

  var express = require('express'),
      app = express(),
      nunjucks = require('nunjucks'),
      sass = require('node-sass-middleware');

  var applicants = require('./routes/applicants');
  var port = process.env.PORT;

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
    console.log("\x1b[36mServer Running\x1b[0m\nhttp://localhost:" + port + "\n");
  });

  module.exports = app;

})(this);
