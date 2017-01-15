/*
Name: Josh Martin
Date: JAN. 1,2017
cjoshmartin.com
description:  gets genral infromation about income and expanse from mint using  Nightmare js! (NOTE : the Nightmare command needs to be run instead of the casper command)
doesn't work.
Frequency: hourly
*/

// var Nightmare = require('nightmare');
// var nightmare = Nightmare({
//   show: true,
//   dock: false
// });


var casper = require('casper').create({
  verbose : true,
  logLevel: "debug",
  pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'
    }
});
casper.options.viewportSize = { width: 2560, height: 1600 };

var xpath = require("casper").selectXPath;

var config = require('../config.json');
var gobals = require('../functions/gobals.js')(casper);
var fs =require('fs');
var current={};

// nightmare
//   .goto('https://mint.intuit.com/login.event?referrer=seo&soc=&utm=')
//   .wait("#ius-userid")
//   .type('input[id=ius-userid]','joshmartin5001@gmail.com')
//   .type('input[id=ius-password]','SpiKey78')
//   .click("#ius-sign-in-submit-btn")
//   .wait(9000)
//   // .inject('js', 'jquery.js')
//   .wait(9000)
//   .wait(9000)
//
//   // .html("./","save.html")
//   // .wait(9000)
//   .evaluate(function () {
//         // console.log(document.querySelector('h3.unselectable').text);
//         if($('#moduleAccounts-credit > div.account-header-wrapper.has-adv > h3.unselectable').text())
//             return  $('#moduleAccounts-credit > div.account-header-wrapper.has-adv > h3.unselectable').text(); //Get Heading
//         else
//             return "Not in page context";
//       })
//
// .run(function (err, nightmare) {
//   if (err) return console.log(err);
//   console.log(nightmare);
//   console.log('Done!');
// }).end();
  casper.start('https://mint.intuit.com/login.event?referrer=seo&soc=&utm=',function () {
      this.wait(5000,function () {
      this.echo('filling form...');
      this.sendKeys('input[id=ius-userid]','joshmartin5001@gmail.com');
      this.sendKeys('input[id=ius-password]','SpiKey78');
      this.click('#ius-sign-in-submit-btn');
        this.wait(5000,function () {
          this.echo("Taking a screenshot now");
          this.capture("currentstate.png");
        });
    });//end of wait function

  });

  gobals.run();
