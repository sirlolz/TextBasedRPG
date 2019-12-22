// character creation and use code
class Character {

    // characters need a name
    constructor(name){
        this.name = name;
        this.strength = 10;
        this.agility = 10;
        this.endurance = 10;
        this.stats = {
            name:this.name,
            strength:this.strength,
            agility:this.agility,
            endurance:this.endurance
        };
    }

    stat = () => {
        return this.stats;
    }
}