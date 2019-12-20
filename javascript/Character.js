// character creation and use code
class Character {

    // characters need a name
    constructor(name){
        this.name = name;
        this.strength = 10;
        this.agility = 10;
        this.endurance = 10;
    }

    stats(){
        console.log(this);
    }
}