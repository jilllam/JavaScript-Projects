function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"Cream",
        Breed:"Devon Rex",
        Age:2,
        Sound:"Meow!"
    };
    delete Animal.Color; // this removes the color KVP from the dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}

