// !!!NOTE!!! For the testing to work, function, parameter and variable names are CASE SENSITIVE

// TODO: Create a GameCharacter class that has the following properties:
// - name (string)
// - health (int)
// - attackPower (int)
// assign these properties in the constructor method
class GameCharacter {
    constructor() {
        this.updateStatus(); // This is used for testing you code. Do not remove it.
    }

    //TODO: create a method called takeDamage(){} that takes an damageAmount as an argument
    // The method should subtract the damageAmount from the characters health property
    // If the health of the character is less than the amount of damage taken, use console.log() to log the console that the character has been defeated
    takeDamage(){

    }

    //TODO: create a method called attack(){} that takes a damageTarget as an argument
    // The method should call function takeDamage() on the damageTarget to reduce its health
    attack(){
        this.updateStatus(); // This is used for testing you code. Do not remove it.
    }

    //You can ignore this method for now. It is used for testing.
    updateStatus() {
        document.getElementById(this.name).textContent = `${this.name}: Health = ${this.health}`;
    }
}

// TODO: create new instance of gameCharacter class with the following properties:
// - name: "Hero"
// - health: 100
// - attackPower: 15

// TODO: create new instance of gameCharacter class with the following properties:
// - name: "Monster"
// - health: 80
// - attackPower: 15

// TODO: create a function called heroAttack() that calls the attack() method on the hero object and passes the monster object as an argument

// TODO: create a function called monsterAttack() that calls the attack() method on the hero object and passes the monster object as an argument
