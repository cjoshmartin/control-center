var config = require('../config.json');
module.exports = function(casp){
  var module ={};
  module.login = function () {
        casp.wait(2000,function () {
        casp.echo('filling form...');
        casp.sendKeys('#username',config.cas.username);
        casp.sendKeys('#password',config.cas.password);
        // casp.capture('username.png');
        casp.click('input[name="_eventId_submit"]');

      });//end of wait function
  }// end of login
return module;
};
