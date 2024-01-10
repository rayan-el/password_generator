// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordAsk = prompt('How many characters does your password have?');
var passwordLength = 8;

// Function to prompt user for password options
function getPasswordOptions() {
 while (passwordAsk < passwordLength)
 { alert('Password too short, it needs to be 8 characters long!');
 passwordAsk = prompt('How many characters does your password have?');
}
while (passwordAsk > passwordLength )
 { alert('Password too long, it needs 8 characters long!');
 passwordAsk = prompt('How many characters does your password have?');
 }
 
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom() {
let password = " ";
password += specialCharacters[Math.floor(Math.random() * specialCharacters.passwordLength)];
password += numericCharacters[Math.floor(Math.random() * numericCharacters.passwordLength)];
password += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.passwordLength)];
password += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.passwordLength)];

}


// Function to generate password with user input
function generatePassword() {
getRandom();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword()); 