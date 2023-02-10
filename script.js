// Assignment Code
var generateBtn = document.querySelector("#generate");
var allowableCharacters = ''
var alpha = 'abcdefghijklmnopqrstuvwxyz'
var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num = '1234567890'
var specChar = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`


//getting user preferences
function userPreferences() {
    var passLength = getPassLength()
    var allowableCharacters = '';
    if (specialChar()) {
        allowableCharacters += specChar;
    }
    if (capital()) {
        allowableCharacters += caps;
    }
    if (lowercase()){
        allowableCharacters += alpha;
    }
    console.log(getRandomCharacter(allowableCharacters));
    return passLength;
}
//ask for password length
function getPassLength() {
    var length = prompt('How many characters would you like in your password?');
        if (length < 8 || length > 128){
            var notFit = prompt('Error: your password must have a minimum of 8 and maximum of 128 characters!');
            return notFit;
        }
    return length;
}

//ask for character types (special, upper/lower, numeric)
function specialChar() {
    var special = confirm('Would you like special characters?');
    return special;
}

function capital() {
    var caps = confirm('Would you like capital letters?');
    return caps;
}

function lowercase() {
    var low = confirm('Would you like lowercase letters?');
    return low;
}

function numeric() {
    var num = prompt('Would you like numbers?');
    return num;
}

//generate random character
function getRandomCharacter(characterSet){
    var randomIndex = Math.floor(Math.random() * characterSet.length)
    return characterSet[randomIndex];
}

//generate password
function generatePassword(length,) {
    var output = "";
    for(i=0; i<length; i++){
        output += getRandomCharacter(allowableCharacters);
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log('test');
  return password;

}

//display password on screen

// Add event listener to generate button
generateBtn.addEventListener("click", userPreferences);
