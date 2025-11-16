function addition() {// naming the addition function
    var add = 1+2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add; // result in HTML
}

function subtraction() { // naming the subtraction function
    var sub = 9-7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub; // result in HTML
}

function multiplication() { // naming the multiplication function
    var mult = 12*5;
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + mult; //result in HTML
}

function division() { // naming the division function
    var divide = 39/3;
    document.getElementById("Div").innerHTML = "39 / 3 = " + divide; // result in HTML
}

function random() { // naming the random function
    document.getElementById("Ran").innerHTML = Math.floor(Math.random()*10); //result in HTMl
}

function modulus_operator() { //naming the modulus operator function
    var modulus = 38 % 4;
    document.getElementById("Mod").innerHTML =
    "When you divide 38 by 4 you have a remainder of: " + modulus; // result in HTML
}

function Increment() { // naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; // saves the text of the HTML element to a variable
    value++; // add one to the value
    document.getElementById("IncrementText").innerHTML = value; // result in HTML
}

function Decrement () { //Defining a function and naming it
    var value = document.getElementById("DecrementText").innerHTML; //saves the text of the HTML element to a variable
    value--; //subtract one from the value
    document.getElementById("DecrementText").innerHTML = value; // result in HTML
}