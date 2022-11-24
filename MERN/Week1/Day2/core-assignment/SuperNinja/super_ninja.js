class Ninjas{
    constructor(name, health,speed=3,strength=3){
        this.name=name,
        this.health=health,
        this.speed=speed,
        this.strength=strength
    }
    sayName(){
        console.log(this.name);
    }
    
    showStats(){
    console.log(`Name: ${this.name} ,Health:${this.health},Speed:${this.speed},Strength:${this.strength}` );
    }
    drinkSake(){
        this.health += 10;
}
}

const ninja1 = new Ninjas("Hyabusa",0);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninjas{
    constructor(name,wisdom){
        super( name,200,10,10,wisdom);
        this.wisdom=10
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.drinkSake();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

