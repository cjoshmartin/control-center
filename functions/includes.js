// NOTE: Don't work, will have to figure this out later...
var caspers = require('casper').create({
  verbose : true,
  logLevel: "debug",
  pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'
    }
});
var xpaths = require("casper").selectXPath;

var configs = require('../config.json');
var gobalss = require('../functions/gobals.js')(casper);
var fss =require('fs');

module.exports ={
  casper: caspers,
  xpath:xpaths,
  config:configs,
  gobals:gobalss,
  fs:fss
}
