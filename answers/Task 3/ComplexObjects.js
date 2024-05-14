document.addEventListener("DOMContentLoaded", () => {
    const outputElement = document.getElementById("output");

    let myCharacter = {};

    const createCharacter = () => {
        myCharacter = {
            name: "Alice",
            level: 30,
            attackPower: 15,
            skills: ["Archery", "Magic"],
            pet: {
                name: "Fluffy",
                lvl: 12
            }
        };

        myCharacter.level = 31;
        myCharacter.skills.push("Melee");

        delete myCharacter.pet.lvl;

        outputElement.textContent = `Object Created: ${JSON.stringify(myCharacter)}`;
    };
    
    const addMethod = () => {
        myCharacter.sayHello = function () {
            return `Hello, my name is ${this.name}.`;
        };

        outputElement.textContent = `Method Added: ${myCharacter.sayHello()}`;
    };
    
    document.getElementById("create-object").addEventListener("click", createCharacter);
    document.getElementById("add-method").addEventListener("click", addMethod);
});
