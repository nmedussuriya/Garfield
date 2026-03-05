const bencharacters = ["ben", "guwen"];

const selectBox = document.getElementById("characterSelect");

// Add options dynamically
bencharacters.forEach(function(bencharacter) {
    let option = document.createElement("option");
    option.value = bencharacter;  // fixed
    option.text = bencharacter;   // fixed
    selectBox.appendChild(option);
});

// Change image on selection
selectBox.addEventListener("change", function() {
    let selectedCharacter = selectBox.value;  // fixed

    if(selectedCharacter !== ""){
        document.getElementById("characterImage").src =
            "images/" + selectedCharacter + ".jpg";
    }
});