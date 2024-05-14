//TODO: You are given a partially completed program that creates an object called myCharacter.
// Your task is to complete the program by adding properties to the object with values of your choice:

document.addEventListener("DOMContentLoaded", () => {
    const outputElement = document.getElementById("output");

    let myCharacter = {}; // This variable is declared outside the functions so that it can be accessed by all functions

    const createCharacter = () => {
        myCharacter = {
            //TODO: Add the following properties to the object with values of your choice
            // - name: string
            // - level: number
            // - attackPower: number
            // - skills: array of strings called "Archery" and "Magic"
            // - pet: object with properties: name (string) and lvl (number), color (string)
            }

        //TODO 1: Test your code in the browser by clicking the "Create Object" button

        //TODO 2: Assign a new value to the level property of myCharacter

        //TODO 3: Add a new skill called "Melee" to the skills array of myCharacter

        //TODO 4: Delete the color property from the pet object of myCharacter

        //TODO 5: Test your code in the browser by clicking the "Create Object" button
        outputElement.textContent = `Object Created: ${JSON.stringify(myCharacter)}`; //This is used for testing
        };

    const addMethod = () => {
        //TODO: This function should create a new method function to myCharacter called
        // getLevel() that returns the level of myCharacter as a string

        outputElement.textContent = `Method Added: ${myCharacter.getLevel()}`; //This is used for testing
    };


    document.getElementById("create-object").addEventListener("click", createCharacter);
    document.getElementById("add-method").addEventListener("click", addMethod);
});
