;(function() {
    'use strict';
})();

var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('applicants', {
  });
});

module.exports = router;
