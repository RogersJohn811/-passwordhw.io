const pass = {
    upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
    lowerCaseChar: "abcdefghijklmnopqrstuvwxyz", 
    numbersChar: "0123456789", 
    specialChar: "!@#$%^&*()_+-={}|[]\:<>?/" 
}

var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

var passLengthInput, hasUppers, hasLowers, hasNumbers, hasSpecialChars;
var password = "";
var newPassString = "";

function writePassword() {
  
    var password = generatePassword();

    passwordText.value = password;
}
function generatePassword() {

    resetPasswordBox();

    collectInput();

    for (i = 0; i < passLengthInput; i++) {

        password += newPassString.charAt(Math.floor(Math.random() * newPassString.length));
    }

    return password;
}

function collectInput() {

    passLengthInput = prompt("Desired password length (8-128): ");

    while ((passLengthInput < 8) || (passLengthInput > 128) || (isNaN(passLengthInput))) {
    
        passLengthInput = prompt("Desired password length must be between 8-128 characters long!: ")
    }

    passLengthInput = parseInt(passLengthInput);
    console.log(`User selected a password length of ${passLengthInput}`);

    hasUppers = confirm("Would you like to use uppercase characters?");

    if (hasUppers) {
        newPassString += pass.upperCaseChar;
        console.log("Uppercase selected.");
    } else {
        console.log("Uppercase not selected.");
    }

    hasLowers = confirm("Would you like to use lowercase characters?");

    if (hasLowers) {
        newPassString += pass.lowerCaseChar;
        console.log("Lowercase selected.");
    } else {
        console.log("Lowercase not selected.");
    }


    hasNumbers = confirm("Would you like numbers?");

    if (hasNumbers) {
        newPassString += pass.numbersChar;
        console.log("Numbers selected.");
    } else {
        console.log("Numbers not selected.");
    }


    hasSpecialChars = confirm("Would you like special characters?");

    if (hasSpecialChars) {

        newPassString += pass.specialChar;
        console.log("Special chars selected.");
    } else {
        console.log("Special chars not selected.");


        evaluateInput();
    }
}

    function evaluateInput() {

        if ((!hasUppers) &&
            (!hasLowers) &&
            (!hasNumbers) &&
            (!hasSpecialChars)
        ) {

            alert("You must select at one type of input!");
   
            collectInput();
        }


    }

    function resetPasswordBox() {
        password = "";
        newPassString = "";
    }

    generateBtn.addEventListener("click", writePassword);
