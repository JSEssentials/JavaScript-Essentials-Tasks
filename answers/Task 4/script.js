document.addEventListener("DOMContentLoaded", function() {
    const playerData = [
        { name: "Archer", level: 25, skills: ["Archery", "Agility", "Invisibility"] },
        { name: "Tank", level: 30, skills: ["Defence", "Melee", "Shield"] },
        { name: "Healer", level: 35, skills: ["Healing", "Magic", "Shield"] }
    ];

    const profilesContainer = document.getElementById("players");

    playerData.forEach(player => {
        let skillsList = player.skills.map(skills => `<li>${skills}</li>`).join('');
        profilesContainer.innerHTML += `
            <div>
                <h2>${player.name}</h2>
                <p>Age: ${player.level}</p>
                <ul>${skillsList}</ul>
            </div>
        `;
    });
});
