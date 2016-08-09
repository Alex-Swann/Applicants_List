;(function(exports) {
  'use strict';

  var lod = require('lodash'),
      low = require('lowdb'),
      db = low(__dirname + process.env.DB + '.json' );

  function Applicant(){
  }

  Applicant.prototype = {
    getAll: function(){
      return db.get('applicants').value();
    },
    findByID: function(data, req){
      return lod.find(data, {id: req.params.id });
    }
  };

  module.exports = Applicant;

})(this);
