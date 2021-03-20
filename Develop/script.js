//TO DO
// When a user clicks on the generate password button
// Ask user with a prompt the length of password. Minimum 8 characters and a max of 128. Input must be entered.

// User input variables: 
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Selection criteria Arrays: 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

// Start function to generate password
function generatePassword() {
    // Asks for user input and verify
    length = 0;
    while (!length || length < 8 || length > 128) {
        length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
        if (length < 8 || length > 128) {
            alert("You must choose between 8 and 128");
        }
    }
    // Verify user input for criteria
    confirmNumber = false;
    confirmCharacter = false;
    confirmUppercase = false;
    confirmLowercase = false;
    while (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        confirmNumber = confirm("Do you wish to include numbers?");
        confirmCharacter = confirm("Do you wish to include special characters?");
        confirmUppercase = confirm("Do you wish to include uppercase letters?");
        confirmLowercase = confirm("Do you wish to include lowercase letters?");
        if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
            alert("You must choose atleast one criteria!");
        }
    }

    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, Lowercase, Uppercase);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, Uppercase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, Lowercase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(Lowercase, Uppercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(Lowercase, Uppercase);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(Lowercase);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(Uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = Lowercase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = Lowercase.concat(Uppercase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(Uppercase);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = Lowercase;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(Uppercase);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < length; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);
