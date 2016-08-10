;(function(exports) {
  'use strict';

  var low = require('lowdb'),
      db = low(__dirname + process.env.DB + '.json' ).get('applicants');

  function Applicant(){
  }

  Applicant.prototype = {
    getAll: function(){
      return db.value();
    },
    findByID: function(req){
      return db.filter(function(db){
        return db.id == req.params.id;
      }).value()[0];
    }
  };

  module.exports = Applicant;

})(this);
