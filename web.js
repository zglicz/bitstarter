var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs')

app.get('/', function(request, response) {

  var index_contents = fs.readFileSync('index.html');
  var wartosci = new Buffer(index_contents);
  response.send(wartosci.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
