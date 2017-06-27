var http = require('http');
var ranNumber = require('./modules/randomNumber.js');
var convertNumber = require('./modules/convertToDollars.js');
//var modulethree = require('.modules/modulethree.js');

var server = http.createServer(function(request, response){
  console.log(ranNumber(100,1000000));
  console.log('$'+ convertNumber(1000000000));
response.write('Request recieved. Thank you for making a request');
response.end();

});
server.listen(3000);
