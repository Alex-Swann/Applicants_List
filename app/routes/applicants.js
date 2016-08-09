;(function(exports) {
    'use strict';

var router = require('express').Router(),
    Applicant = require('../models/applicant'),
    request = new Applicant(),
    data,
    user;

router.get('/', function(req, res) {
  data = request.getAll();
  res.render('applicants/index', {
    applicantsData: data
  });
});

router.get('/:id', function(req, res) {
  user = request.findByID( request.getAll(), req );
  res.render('applicants/individual', {
    applicantData: user
  });
});

module.exports = router;

})(this);
