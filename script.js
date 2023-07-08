//assignment Code
var generateBTN = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCharacters = "!£$%^&*()_+-=:;@></?\|*-+";
  
  var pswLegnth = window.prompt("How long do you want the password to be?");
  if(isNaN(pswLegnth)) {
    window.alert("Pick a number - any number.");
    return;
  }

  if (pswLegnth < 8 || pswLegnth > 128) {
    window.alert("Okay, really it needs to be between 8 and 128");
    return;
    }
  
  // Find out what types of characters should be included
  var pswLowerCase = window.confirm("Click OK to use lowercase characters");
  var pswUpperCase = window.confirm("Click OK to use including uppercase characters");
  var pswNumeric = window.confirm("Click OK to use including numeric characters");
  var pswSpecial = window.confirm("Click OK to use including special characters");

  if (!pswLowerCase && !pswUpperCase && !pswNumeric && !pswSpecial) {
    window.alert("you need to include SOMETHING in your password mate lol");
    return;
  }

  var pswCharacters = "";
  if (pswLowerCase) {
    pswCharacters += lowerCase;
  } 

  if (pswUpperCase) {
    pswCharacters += upperCase;
  } 

  if (pswNumeric) {
    pswCharacters += numbers;
  } 

  if (pswSpecial) {
    pswCharacters += specialCharacters;
  } 

  var psw = "";

  for (var i = 0; i < pswLegnth; i++) {
    psw += pswCharacters.charAt(Math.floor(Math.random() * pswCharacters.length));
  }

  return (psw);



  return ("Hello World")    
}

// Add event listener to generate button
generateBTN.addEventListener('click', writePassword);
