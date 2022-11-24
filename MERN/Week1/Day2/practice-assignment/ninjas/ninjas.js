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
        console.log(this.name,this.health,this.speed, this.strength );
    }
    drinkSake(){
        this.health += 10;
}
}

const ninja1 = new Ninjas("Hyabusa",0);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
