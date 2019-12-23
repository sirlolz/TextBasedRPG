// character creation and use code
class Character {

    // characters need a name
    constructor(name){
        this.name = name;
        this.strength = 10;
        this.agility = 10;
        this.endurance = 10;
    }

    //collection of all stats
    stats = () => {
        return {
            name:this.name,
            strength:this.strength,
            agility:this.agility,
            endurance:this.endurance
        };
    }

    //takes a stat as a string then adds the value to it
    statChange = (stat, value) => {
        if(stat === 'name'){
            return this.name = value;
        }else{
            return this[`${stat}`] += value;
        }
    }
    
}