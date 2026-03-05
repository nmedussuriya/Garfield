
const characters = ["garfield", "odie", "nova", "pooky", "jon"];


const selectBox = document.getElementById("characterSelect");


characters.forEach(function(character) {
    let option = document.createElement("option");
    option.value = character;
    option.text = character;
    selectBox.appendChild(option);
});

selectBox.addEventListener("change", function() {

    let selectedCharacter = selectBox.value;

    document.getElementById("characterImage").src =
        "images/" + selectedCharacter + ".jpg";

});