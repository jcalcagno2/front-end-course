class Animal {

    constructor(name, height, weight) {
        console.log("Created", name, height, weight);
        this.name = name;
        this.height = height;
        this.weight = weight;

}

    nameLength(name) {
        return this.name.length;
    }

}

class Dog extends Animal {
    
    constructor(name, height, weight, barkVolume, leshColor) {
        super(name, height, weight);
        
        this.barkVolume = barkVolume;
        this.leshColor = leshColor;

    }

    bark() {
        if(this.barkVolume > 50) {
            console.log(this.name, "Barks Loudly");

        } else {
            console.log(this.name, "Batks timidly");
        }
    }
}

class Fish extends Animal {
    constructor(name, height, weight, swimSpeed) {
        super(name, height, weight);
        this.swimSpeed = swimSpeed;
        
    }
    swim() {
        
    }
}


var king = new Dog("King", 45, 92, 72, "red");

king.bark();