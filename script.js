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
  
  var pswLegnth = window.prompt("How many characters would you like your password to have?");
  if(isNaN(pswLegnth)) {
    window.alert("please enter a number.");
    return;
  }

  if (pswLegnth < 8 || pswLegnth > 128) {
    window.alert("Please enter a number between 8 and 128");
    return;
    }
  
  // Find out what types of characters should be included
  var pswLowerCase = window.confirm("Click OK to confirm including lowercase characters");
  var pswUpperCase = window.confirm("Click OK to confirm including uppercase characters");
  var pswNumeric = window.confirm("Click OK to confirm including numeric characters");
  var pswSpecial = window.confirm("Click OK to confirm including special characters");

  if (!pswLowerCase && !pswUpperCase && !pswNumeric && !pswSpecial) {
    window.alert("you need to include something in your password mate");
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
