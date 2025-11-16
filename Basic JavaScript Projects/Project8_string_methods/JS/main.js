//Utilizing the .concat() method
function full_sentence(){
    var part_1 = "My cat ";
    var part_2 = "loves to play ";
    var part_3 = "with yarn!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//utilizing the .slice() method
function slice_Method() {
    var sentence = "Curious cats nap often";
    var section = sentence.slice(9, 13); // "cats"
    document.getElementById("Slice").innerHTML = section;
}
//utilizing the .toString() method
function string_Method() {
    var mynumber = 7;
    document.getElementById("ToString").innerHTML = mynumber.toString();
}
//Utilizing the .toPrecision() method
function precision_method() {
    var myNumber = 123.456789;
    document.getElementById("SpecificLength").innerHTML =
        myNumber.toPrecision(4);
}