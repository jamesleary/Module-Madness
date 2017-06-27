var http = require('http');
var ranNumber = require('./modules/randomNumber.js');
var convertNumber = require('./modules/convertToDollars.js');
var modulethree = require('./modules/moduleThree.js');

var server = http.createServer(function(request, response){
  response.write(ranNumber(100,1000000));
  response.write('$'+ convertNumber(1000000000));
  response.write(modulethree.accountBalance());
  response.write('$' + modulethree.randomConverter(100, 1000000));

response.write('Request recieved. Thank you for making a request');
response.end();

});
server.listen(3000);
