/*
Name: Josh Martin
Date: Dec. 30,2016
cjoshmartin.com
description:  to get grades from IU canvas and calulates GPA
Status: can't not save to data.json file..
Frequency: hourly
*/
// var casperconfig =require('../setup/casperconfig.json'); can not be found
var casper = require('casper').create({
  verbose : true,
  logLevel: "debug",
  pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'
    }
});
var xpath = require("casper").selectXPath;

var config = require('../config.json');
var gobals = require('../functions/gobals.js')(casper);
var fs =require('fs');
var current={};
var school =config.school;

var gradetopoints =function (grade) {
  switch (grade.toUpperCase()) {
    case 'A+':
    case 'A':
    return 4.0;
      break;
    case 'A-':
    return 3.7;
    break;
    case 'B+':
      return 3.3;
      break;
    case 'B':
      return 3;
      break;
    case 'B-':
        return 2.7;
      break;
    case 'C+':
    return 2.3;
      break;
    case 'C':
    return '2.0';
    break;
    case 'C-':
      return 1.7;
      break;
    case 'D+':
      return 1.3;
      break;
    case 'D':
      return 1.0;
      break;
    case 'D-':
      return 0.7;
      break;
    default:
      return 0;
  }
};

casper.start(config.school.canvas,function () {
  gobals.login(config.cas);
  school.grades.classes.forEach(function (i) {
    capser.thenOpen(i.url+"/grades",function () {
      casper.wait(5000,function () {
        var someshit =gradetopoints(this.fetchText('#final_letter_grade_text'));

         console.log("output: " + JSON.stringify(current,null,' '));
         fs.write('../data/hourlypay.json',JSON.stringify(current,null,' '),'w');
      });
    });
  });
}); //end of start
