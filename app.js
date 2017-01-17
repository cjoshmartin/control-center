// HTTP Portion
var express = require('express');
var server = express();
var ngrok = require('ngrok');

// Database
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var mongoUrl = 'mongodb://localhost:27017';

// Path module
var path = require('path');
// Using the filesystem module
var fs = require('fs');

// make things pretty
var colors = require('colors/safe');

//
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log(colors.underline("\nConnected successfully to server"));
//
//   db.close();
// });
/***************************
 * API ???
 ***************************/
 /* api for calling scripts to run */
 server.get('/api/update', function (req, res) {
     console.log('updating')
     //<-- call termainal to update goes here -->
     //<-- refresh index -->
 })


/***************************
 * Server
 ***************************/

server.use(express.static(__dirname + '/')) //serves the directory
server.listen(3000, function () { // port to listen to
    console.log('Server is running.')
})
//proxies out to WWW
ngrok.connect({
    proto: 'http', // http|tcp|tls
    addr: 3000, // port or network address
    auth: 'josh:martin', // http basic authentication for tunnel
    authtoken: 'fPwThdHPDVNGVT3wauhj_2osUyxQu3g79t5fEgC7Ti', // your authtoken from ngrok.com
    region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us
}, function (err, url) {
    // MongoClient.connect(mongoUrl, function (err, db) {
    //     var urls = db.collection('urls')
    //     urls.insert({url:url})
    // })
    //save url to json file
    var urls={};
    urls.url =url;
    fs.writeFile('url.json', JSON.stringify(urls))

    // display the links in commandline
    console.log("Go to : "+colors.red(url));
    console.log("ngrok interface:"+ colors.red(" http://127.0.0.1:4040"));
});
server.get('api/:url',function () {
  // <-- pull from database -->
});
