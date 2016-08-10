var expect = require('chai').expect,
    Applicant = require('../../app/models/applicant.js'),
    request = new Applicant(),
    data;

describe('Applicant Model', function(){

    before(function(){
      data = request.getAll();
    });

    it('should be able to return all applicants from database', function(){
      expect(data.length).to.eql(3);
    });

    it('returned query should contain all of applicant\'s info', function(){
      expect(data[0].name).to.eql('Helen Edwards');
      expect(data[1].candNum).to.eql('394');
    });

    it('should be able to return one applicant by their ID', function(){
      var entry = request.findByID( {params: {id: '3'}} );
      expect(entry.name).to.eql('Johnny Cash');
    });

});
