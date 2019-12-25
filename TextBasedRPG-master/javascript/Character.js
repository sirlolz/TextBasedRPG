// character creation and use code
class Character {

    // characters need a name
    // base stats are all 1
    // hp/energy are *10 health/ agility respective
    constructor(name){
        this.name = name;
        this.strength = 1;
        this.agility = 1;
        this.endurance = 1;
        this.health = this.endurance * 10;
        this.energy = this.agility * 10;
    }

    //returns stats as a string
    stats = () => {
        return {
            name:this.name,
            strength:this.strength,
            agility:this.agility,
            endurance:this.endurance,
            health:this.health,
            energy:this.energy
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

    // used for levelup and level setting for npc/cheating lol hahahaha 
    // if your reading htis and cheat shame on you
    levelUp(level = 1){
        const stats = allStats();
        for(let i = 0; i < stats.length; i++){
            if(stats[i] === 'health' || stats[i] === 'energy'){
                this.statChange(stats[i], (level * 10));
            }else{
                this.statChange(stats[i], level);
            }
        }
        return player.stats();
    }
}

function allStats(){
    return ["name", "strength", 'agility','endurance','health','energy'];
}

function cleanStatDisplay(player){
    allStats().forEach(element => {
         let p = document.createElement('p');
         p.innerText = `${element}:` + player[`${element}`];
         game.appendChild(p);
    });
    return true;
}