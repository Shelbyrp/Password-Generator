// User input variables 
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Selection criteria Arrays
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Based on user input, generate choices as an array for random selection
var choices;

// Function to generate password
function generatePassword() {
    // Asks for user input and verify
    length = 0;
        //-------------------------------------------------------------------------------
    // Enter loop until valid number selected
    while (length < 8 || length > 128) {
        length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128")) ;
        // Exit loop if user selects cancel or zero
        if (!length === true || length === 0) {
            return ("You exited the application");
        }
        // Alert user if selection less than eight or greater than one hundred and twenty eight
        else if (length < 8 || length > 128) {
            alert("You must choose between 8 and 128");
        }
    }
    //-------------------------------------------------------------------------------
    //Set confirm variables to false because following 'if statements' require true results
    confirmNumber = false;
    confirmCharacter = false;
    confirmUppercase = false;
    confirmLowercase = false;
    //-------------------------------------------------------------------------------
     // Verify user input for criteria
    while (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        confirmNumber = confirm("Do you wish to include numbers?");
        confirmCharacter = confirm("Do you wish to include special characters?");
        confirmUppercase = confirm("Do you wish to include uppercase letters?");
        confirmLowercase = confirm("Do you wish to include lowercase letters?");
         // Alert user if no selection is true
        if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
            alert("You must choose atleast one criteria!");
        }
    }
    //-------------------------------------------------------------------------------
    // Selection criteria matrix (number, character, uppercase, lowercase)
    // First 'if statement' that uses user input prompts to determine choices
    //-------------------------------------------------------------------------------
    // If for 4 positive options (true, true, true, true)
    if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, Lowercase, Uppercase);
    }
    //-------------------------------------------------------------------------------
    // Else if for 3 positive options (false, true, true, true)
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(Lowercase, Uppercase);
    }
    // Else if for 3 positive options (true, false, true, true)
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(Lowercase, Uppercase);
    }    
    // Else if for 3 positive options (true, true, false, true)
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, Lowercase);
    }
    // Else if for 3 positive options (true, true, true, false)
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, Uppercase);
    }
    //-------------------------------------------------------------------------------
    // Else if for 2 positive options (true, true, false, false)
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    } 
    // Else if for 2 positive options (true, false, true, false)
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(Uppercase);
    }        
    // Else if for 2 positive options (true, false, false, true) 
    else if (confirmLowercase && confirmNumber) {
        choices = Lowercase.concat(number);
    }
    // Else if for 2 positive options (false, false, true, true)
    else if (confirmLowercase && confirmUppercase) {
        choices = Lowercase.concat(Uppercase);
    }    
    // Else if for 2 positive options (false, true, true, false) 
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(Uppercase);   
    } 
    // Else if for 2 positive options (false, true, false, true)  
    else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(Lowercase);
    }     
    //-------------------------------------------------------------------------------    
    // Else if for 1 positive option (true, false, false, false)
    else if (confirmNumber) {
        choices = number;
    }
    // Else if for 1 positive option (false, true, false, false)
    else if (confirmCharacter) {
        choices = character;
    }
    //Else if for 1 positive option (false, false, true, false)
    else if (confirmUppercase) {
        choices = space.concat(Uppercase);
    }
    // Else if for 1 positive option (false, false, false, true)
    else if (confirmLowercase) {
        choices = Lowercase;
    }
    ;
    //-------------------------------------------------------------------------------
    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < length; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
//-------------------------------------------------------------------------------
// Enters the password value into the textbox
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
