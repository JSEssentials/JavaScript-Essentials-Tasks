document.addEventListener("DOMContentLoaded", function() {

    //TODO: Your task is to create a variable called playerData and assign it an array of objects. Each object should have the following properties:
    // These objects will represent JSON objects that contain information about players in a game.
    // - name: a string representing the player's name
    // - level: a number representing the player's level
    // - skills: an array of strings representing the player's skills
    // You can use the following data for example:
    //     name: Archer, level: 25, skills: Archery, Agility, Invisibility
    //     name: Tank, level: 30, skills: Defence, Melee, Shield,
    //     name: "Healer", level: 35, skills: "Healing", Magic, "Shield
    //

    //TODO create an variable called profilesContainer and assign it to the HTML div element from the
    // index.html document with element ID "players"

    //This function will map your created object and create html elements for each element.
    playerData.forEach(player => {
        let skillsList = player.skills.map(skills => `<li>${skills}</li>`).join('');
        profilesContainer.innerHTML += `
            <div>
                <h2>${player.name}</h2>
                <p>Level: ${player.level}</p>
                <ul>${skillsList}</ul>
            </div>
        `;
    });
});

