// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {

let  passwordLength = prompt("Please enter amount of charachters") ;

// after each confirmation we need to add one class

let numbersConfirm = confirm("Do you want to add numeric to your password?");
let symbolsConfirm = confirm("Do you want to add special charachkters to your password?");
let uppercaseConfirm = confirm("Do you want to add Upper case letters to your password?");
let lowercaseConfirm = confirm("Do you want to add lower case letters to your password?");

const numberChars = "0123456789";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const symbolChars = "!@#$%^&*()_+";


if (passwordLength <= 128 && passwordLength >= 8) {
// firs we need declare variabl that will keep all symbols ceated from clases  
let allChars;
let randomString = '';
//after we need to create functions that will add classes depend on user confirm/cancel
let addNum = addingNumeric(); 
    function addingNumeric() {  
        if (numbersConfirm) {
            return allChars = numberChars;  
        } 
        else {     
            return allChars = randomString;
        }
   }

let addSym = addingSymbols();

    function addingSymbols() {
        if (symbolsConfirm) {
            return allChars = addNum + symbolChars;
        } 
        else if (addNum == randomString) {
            return allChars = randomString
        }
        else {
        return allChars = addNum;
        }
    }

let addUppCas = addingUpperCase()

    function addingUpperCase() {
        if(uppercaseConfirm) {
            return allChars = addSym + upperChars;
        } 
        else if (addSym == randomString) {
            return allChars = randomString
        }
        else {
            return allChars = addSym;
        }
    }

let addLowCas = addingLowerCase()

    function addingLowerCase() {
        if(lowercaseConfirm) {
            return allChars = addUppCas + lowerChars;
        } else if (addUppCas == randomString) {
            return allChars = randomString
        }
        else {
            return allChars = addUppCas;
        }
    }

for (let i = 0; i < passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * allChars.length);
  randomString += allChars[randomNumber];
}
return randomString;}
else {
    alert("Password need to be at between 8 and 128 charachters");
    return randomString;
} 
}  

function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
