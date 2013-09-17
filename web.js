var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('message.txt', function(err, data){
    if (err) throw err;
    var buf = new Buffer(data);
    response.send(buf.toString());
  }); 

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
