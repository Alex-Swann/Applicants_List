var expect = require('chai').expect;
var assert = require('assert');
var Browser = require('zombie');
var app =  require('../../app/server');

describe('Searching Applicants', function(){

  var browser;

  before(function(done){
    this.server = app.listen(4002);
    this.browser = new Browser({ site: 'http://localhost:4002' });
    this.browser.visit('/', done);
  });

  it('can search for a candidate based on their name', function(done){
    browser = this.browser;
    browser
      .fill('search', 'Helen Edwards')
      .pressButton('Search', function(err){
        assert.ok(browser.success);
        expect(browser.html()).to.have('#applicant1');
        expect(browser.html()).to.not.have('#applicant2');
      }).then(done, done);
  });

});
