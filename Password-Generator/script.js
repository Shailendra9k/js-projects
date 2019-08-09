//In this proejct we'll create random password generator
//After putting specified number we can get a unique password with letter, symbol and numbers

var keyList =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"';
var temp = "";

function generatePassword(passwordLength) {
  temp = ""; //at starting

  // Using loop

  for (i = 0; i < passwordLength; i++) {
    temp += keyList.charAt(Math.floor(Math.random() * keyList.length));
  }
  return temp;
}

function populateForm(enterLength) {
  document.passGen.output.value = generatePassword(enterLength);
}
