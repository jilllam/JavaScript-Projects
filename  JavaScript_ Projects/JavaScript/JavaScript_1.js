function Color_Function() {
    var Color_Output;
    var color = document.getElementById("Color_Input").value; 
    
    color = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
    
    var Color_String = " is a great color!";
    
    switch(color) {
        case "Red":
            Color_Output = "Red" + Color_String; 
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Black":
            Color_Output = "Black" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }

    document.getElementById("Output").innerHTML = Color_Output;
}

//getElementsByClassName() method 
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
