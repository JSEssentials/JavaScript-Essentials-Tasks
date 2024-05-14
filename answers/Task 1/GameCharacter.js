class GameCharacter {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.updateStatus();
    }

    attack(target) {
        target.takeDamage(this.attackPower);
    }

    takeDamage(amount) {
        this.health -= amount;
        this.updateStatus();
        if (this.health <= 0) {
            return
        }
    }

    updateStatus() {
        document.getElementById(this.name).textContent = `${this.name}: Health = ${this.health}`;
    }
}

const hero = new GameCharacter("Hero", 23, 15);
const monster = new GameCharacter("Monster", 80, 10);

function heroAttack() {
    hero.attack(monster);
}

function monsterAttack() {
    monster.attack(hero);
}
