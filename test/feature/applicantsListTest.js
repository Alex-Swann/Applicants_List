var expect = require('chai').expect,
    assert = require('assert'),
    Browser = require('zombie'),
    app =  require('../../app/server'),
    browser;

describe('Applicants List Feature Test', function(){
  this.timeout(15000);

  before(function(done){
    this.browser = new Browser({ site: 'http://localhost:' + process.env.PORT });
    this.browser.visit('/', done);
  });

  context('Main Page', function(){

    it('should list first applicant', function(){
      expect(this.browser.html('#applicant1')).to.contain('Helen Edwards');
    });

    it('should list additional applicants', function(){
      expect(this.browser.html('#applicant2')).to.contain('Jacob Marley');
    });

    it('should only list applicant names', function(){
      expect(this.browser.html()).to.not.contain('34 Cattle Street');
    });

  });

  context('Further Applicant Information', function(){

    it('more information is displayed when a name is clicked', function(done){
      browser = this.browser;

      browser.clickLink('a#applicant1').then(function(){
        expect(browser.html('#individual')).to.contain('Helen Edwards');
        expect(browser.html('#individual')).to.contain('34 Cattle Street');
      }).then(done, done);
    });

    it('you can go back to main page after clicking a name', function(done){
      browser = this.browser;
      browser.clickLink('Back').then(function(){
          assert.ok(browser.success);
          expect(browser.html('#applicant1')).to.contain('Helen Edwards');
          expect(browser.html()).to.not.contain('34 Cattle Street');
      }).then(done, done);
    });

  });

});
