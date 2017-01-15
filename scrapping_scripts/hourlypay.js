/*
Name: Josh Martin
Date: Dec. 28,2016
cjoshmartin.com
description:  gets hours worked and times by the payrate for IU's Kuli Time
Status: can't not save to data.json file..
Frequency: daily except weekends
*/
// var casperconfig =require('../setup/casperconfig.json'); can not be found
var casper = require('casper').create({
  verbose : false,
  logLevel: "debug",
  pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'
    }
});
var xpath = require("casper").selectXPath;
var fs =require('fs');
var config = require('../config.json');
var gobals = require('../functions/gobals.js')(casper);

var current={
  "work":{},
};

var hourly =config.money.hourly;

casper.start(hourly.url,function () {
      gobals.login(config.cas);
    this.wait(3000,function () {
      // this.echo("taking a screenshot");
      // this.capture('currentstate.png');
      current.work.hours=parseFloat((this.fetchText(xpath("//div[@id='timesheet-table-basic']/table/tbody/tr[4]/td[18]"))));
      // this.echo("hours worked is: "+current.hours);
      // this.echo("money earned: $"+ current.hours*hourly.rate);
      // if (current.work.hours ==NULL)
      // {
      //   current.work.hours= 0;
      //   current.work.hours=0;
      //
      // }
      // else{
        current.work.amount= current.work.hours*hourly.rate;
      // }
        // var temp =JSON.parse(JSON.stringify(data));
        // current.push(temp);
        console.log("output: " + JSON.stringify(current,null,' '));
         fs.write('../data/hourlypay.json',JSON.stringify(current,null,' '),'w');
    });// end of second wait

});//end of start
casper.on("page.error", function(msg, trace) {
  this.echo("Error:    " + msg, "ERROR");
  this.echo("file:     " + trace[0].file, "WARNING");
  this.echo("line:     " + trace[0].line, "WARNING");
  this.echo("function: " + trace[0]["function"], "WARNING");
  errors.push(msg);
});
casper.on('complete.error', function(err) {
    this.die("Complete callback has failed: " + err);
});
casper.on('step.error', function(err) {
    this.die("Step has failed: " + err);
});

casper.run();
