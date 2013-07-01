
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 //  response.send('Hello World2!');
        var buff = null;
	fs.readFile('index.html', function (err, data) {
             if (err) throw err;
             buff = new Buffer(data);
            
     });
      response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
