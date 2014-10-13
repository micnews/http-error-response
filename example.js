var http = require('http');
var respond = require('./');

http.createServer(function(req, res){
  var err = new Error('oopsie');
  respond(req, res, err);
}).listen(8000, function(){
  console.log('http://localhost:8000/');
});

