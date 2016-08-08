;(function() {
    'use strict';
})();

var lod = require('lodash'),
    low = require('lowdb'),
    db,
    data,
    user;

if(process.env.NODE_ENV === 'dev'){
  db = low(__dirname + '/../data/db' + '.json' );
} else if(process.env.NODE_ENV === 'test') {
  db = low(__dirname + '/../../test/testJSON/testJSON' + '.json' );
} else {
  console.log('Error reading json file!');
}

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
