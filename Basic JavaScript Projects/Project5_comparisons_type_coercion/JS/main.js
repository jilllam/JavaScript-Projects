// variable with a Boolean data type
var x = true;

//printing the data type of the variable x
document.writeln(typeof x);
document.writeln("<br>");

//an expression combining a string and a number
document.writeln("10" + 10);
document.writeln("<br>");

//utilizing the == operator
document.writeln(5 == 5);
document.writeln("<br>");

//utilizing the == operator
var x1 = 1;
var y1 = 1;
document.writeln(x1 === y1);
document.writeln("<br>");

//utilizing the > and && operators
document.writeln(10 > 5 && 11 > 6);
document.writeln("<br>");

//utilizing the < and || operators
document.writeln(10 < 5 || 11 < 6);
document.writeln("<br>");

//utilizing the ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = ! (1 > 2);
}