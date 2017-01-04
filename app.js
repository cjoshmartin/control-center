// HTTP Portion
var http = require('http');
var ngrok = require('ngrok');

// Path module
var path = require('path');

// Using the filesystem module
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var colors = require('colors/safe');

var server = http.createServer(handleRequest);
server.listen(8080);

function handleRequest(req, res) {
  // What did we request?
  var pathname = req.url;

  // If blank let's ask for index.html
  if (pathname == '/') {
    pathname = '/index.html';
  }

  // Ok what's our file extension
  var ext = path.extname(pathname);

  // Map extension to file type
  var typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };
  // What is it?  Default to plain text

  var contentType = typeExt[ext] || 'text/plain';

  // User file system module
  fs.readFile(__dirname + pathname,
    // Callback function for reading
    function (err, data) {
      // if there is an error
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      // Otherwise, send the data, the contents of the file
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}
// Connection URL
// var url = 'mongodb://localhost:27017';
//
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log(colors.underline("\nConnected successfully to server"));
//
//   db.close();
// });

ngrok.connect({
    proto: 'http', // http|tcp|tls
    addr: 8080, // port or network address
    auth: 'josh:martin', // http basic authentication for tunnel
    authtoken: 'fPwThdHPDVNGVT3wauhj_2osUyxQu3g79t5fEgC7Ti', // your authtoken from ngrok.com
    region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us
}, function (err, url) {
    var current ={};
    current.ngrok =url;
    var pathess =path.join(__dirname,'./link.json');
    console.log("output: " + JSON.stringify(current,null,' '));
    // fs.write(pathess,JSON.stringify(current,null,' '),'w'); IDK
    console.log("Go to : "+colors.red(url));
    console.log("ngrok interface:"+ colors.red(" http://127.0.0.1:4040"));
});
