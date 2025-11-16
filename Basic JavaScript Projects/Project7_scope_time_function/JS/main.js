// ------------------------------
// Global and Local Variable Example
// ------------------------------

// Global variable 
var globalNumber = 30;

function showNumbers() {
    // Local variable 
    var localNumber = 20;

    // Output both values into HTML
    document.getElementById("numberOutput").innerHTML =
        "Global number: " + globalNumber + "<br>" +
        "Local number: " + localNumber;
}


// ------------------------------
// If Statement Example
// ------------------------------

function checkAge() {
    // Get number entered in the input box
    var age = document.getElementById("ageInput").value;

    // If the user is under 18
    if (age < 18) {
        document.getElementById("ageResult").innerHTML =
            "You are too young!";
    } else {
        document.getElementById("ageResult").innerHTML =
            "You are an adult!";
    }
}


// ------------------------------
// Intentional Error + Debugging
// ------------------------------

function causeError() {
    var x = 5;

    // Intentional error: misspelled variable name 
    console.log("Value of x:", x);
    console.log("Trying to print y... this will cause an error!");
    
    // This will generate an error on purpose
    console.log(y);

    // The error will appear in Chrome console (F12)
}


// ------------------------------
// Time Function
// ------------------------------

function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    // Morning
    if (Time > 0 && Time < 12) {
        Reply = "It is morning time!";
    }
    // Afternoon
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon!";
    }
    // Evening
    else {
        Reply = "It is evening time!";
    }

    document.getElementById("Time_of_Day").innerHTML = Reply;
}
