;(function() {
    'use strict';
})();

var lod = require('lodash'),
    low = require('lowdb'),
    data,
    user;


var db = low(__dirname + process.env.DB + '.json' );

var router = require('express').Router();

router.get('/', function(req, res) {
  data = db.get('applicants').value();
  res.render('applicants/index', {
    applicantsData: data
  });
});

router.get('/:id', function(req, res) {
  data = db.get('applicants').value();
  user = lod.find(data, {id: req.params.id });
  res.render('applicants/individual', {
    applicantData: user
  });
});

module.exports = router;
