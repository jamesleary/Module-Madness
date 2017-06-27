var http = require('http');
var ranNumber = require('./modules/randomNumber.js');
var server = http.createServer(function(request, response){
  console.log(ranNumber(100,1000000));

response.write('Request recieved. Thank you for making a request');
response.end();

});
server.listen(3000);
