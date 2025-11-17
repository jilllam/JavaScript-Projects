//A function using a while loop
function count_to_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//A function using a for loop
var clubs = [
    "Football",
    "Basketball",
    "Swimming",
    "Chess",
    "Drama",
    "Music",
    "Tennis",
];

function for_Loop() {
    var content = "";
    for (var y = 0; y < clubs.length; y++) {
        content += clubs[y] +"<br>";
    }
    document.getElementById("List_of_clubs").innerHTML = content;
}

//A function with an array
function color_array() {
    var Colors = ["Green","Red","Blue","Yellow","Orange","Purple"];
    var randomIndex = Math.floor(Math.random() * Colors.length);
    document.getElementById("FavoriteColors").innerHTML = 
        "My favorite color is " + Colors[2] + ".";
}

//Creating an object with the let keyword
function cat() {
    let cat = {
        breed: "Devon Rex",
        age: 2,
        color: "cream",
    };
    document.getElementById("Cat").innerHTML = 
        "I have a " + cat.age + " year old " + cat.color + " " + cat.breed + " Cat.";
}