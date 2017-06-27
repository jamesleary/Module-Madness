var ranNumber = require('./randomNumber.js');
var convertNumber = require('./convertToDollars.js');

function randomConverter (min, max) {
  return convertNumber(ranNumber(min, max));
}

function accountBalance () {
   return "Account Balance:   \n";
}
module.exports = {
  randomConverter : randomConverter,
  accountBalance : accountBalance,

};
