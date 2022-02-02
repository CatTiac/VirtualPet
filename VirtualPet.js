class Pet {
    constructor(name, hunger, thirst, happiness, energy, hygiene, eyes){
        this._name = name;
        this._hunger = hunger;
        this._thirst = thirst;
        this._happiness = happiness;
        this._energy = energy;
        this._hygiene = hygiene;
        this._eyes = eyes;
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get happiness() {
        return this._happiness;
    }
    get energy() {
        return this._energy;
    }
    get hygiene() {
        return this._hygiene;
    }
    get eyes() {
        return this._eyes;
    }
    eat() {
        this._hunger--;
        this._thirst++;
        this._energy++;
        this._happiness++;
        if (this._hunger==100) {
            console.log(`${this._name} ran away to find food...`);
        } else {
            console.log(`Yum yum, ${this._name} is fuller!`);
            console.log(`${this._name}'s hunger level is ${this._hunger}`);
        }
    }
    drink() {
        this._thirst--;
        this._energy++;
        this._happiness++;
        if (this._thirst==100) {
            console.log(`${this._name} dried up...`);
        } else {
            console.log(`${this._name} drinks the water and feels less thirsty. ${this._name} does a happy dance!`);
            console.log(`${this._name}'s thirst level is ${this._thirst}`);
        }
    }
    wash() {
        this._hygiene++;
        this._happiness++;
        if (this._hygiene>=100) {
            console.log(`${this._name} is clean enough!`);
        } else {
            console.log(`${this._name} is sparkling with cleanliness`);
            console.log(`${this._name}'s hygiene level is ${this._hygiene}`);
        }
    }
    play() {
        this._hunger++;
        this._thirst++;
        this._energy--;
        this._happiness++;
        if (this._happiness>=100) {
            console.log(`${this._name} has reached the height of happiness!`);
        } else {
            console.log(`${this._name} looks at you hopefully... play time?`);
            console.log(`${this._name}'s happiness level is ${this._happiness}`);
            console.log(`${this._name} wonders if you want to play again?`);
        }
    }
    sleep() {
        this._hunger++;
        this._thirst++;
        this._energy++;
        this._happiness++;
        this._eyes--;
        if (this._energy<=20) {
            console.log(`${this._name} is sleepy`);
        } else {
            console.log(`${this._name}'s energy level is ${this._energy}`);
            console.log(`${this._name} looks at you expectantly`);
        }
    }
    usePotion() {
        this._eyes++;
        this._hunger++;
        this._thirst++;
        if (this._eyes >= 10) {
            console.log(`Do you ever get the feeling you're being watched? ${this._name} looks at you lovingly with it's ${this._eyes} eyes`);
        } else {
            console.log(`Your pet now has ${this._eyes} eyes... All the better for seeing you with...`);
        }
    }
}

class Dragon extends Pet {
    constructor(name, hunger, thirst, happiness, energy, hygiene, eyes, color, canFly, canSwim, favFoods) {
        super (name, hunger, thirst, happiness, energy, hygiene, eyes);
        this._color = color;
        this._canFly = canFly;
        this._canSwim = canSwim;
        this._favFoods = favFoods;
    }
    get color() {
        return this._color;
    }
    get canFly() {
        return this._canFly;
    }
    get canSwim() {
        return this._canSwim;
    }
    get favFoods() {
        return this._favFoods;
    }
}

const big = new Dragon(
    "Big",
    50,
    50,
    50,
    50,
    50,
    2,
    "Green",
    true,
    false,
    ["pizza", "cake", "people"]
);

class Kelpie extends Pet {
    constructor(name, hunger, thirst, happiness, energy, hygiene, eyes, color, canFly, canSwim, favFoods) {
        super (name, hunger, thirst, happiness, energy, hygiene, eyes);
        this._color = color;
        this._canFly = canFly;
        this._canSwim = canSwim;
        this._favFoods = favFoods;
    }
    get color() {
        return this._color;
    }
    get canFly() {
        return this._canFly;
    }
    get canSwim() {
        return this._canSwim;
    }
    get favFoods() {
        return this._favFoods;
    }
}

const slimey = new Kelpie (
    "Slimey",
    50,
    50,
    50,
    50,
    50,
    2,
    "Purple",
    false,
    true,
    ["fish", "fishcake", "fish fingers"]
);

class Fairy extends Pet {
    constructor(name, hunger, thirst, happiness, energy, hygiene, eyes, color, canFly, canSwim, favFoods) {
        super (name, hunger, thirst, happiness, energy, hygiene, eyes);
        this._color = color;
        this._canFly = canFly;
        this._canSwim = canSwim;
        this._favFoods = favFoods;
    }
    get color() {
        return this._color;
    }
    get canFly() {
        return this._canFly;
    }
    get canSwim() {
        return this._canSwim;
    }
    get favFoods() {
        return this._favFoods;
    }
}

const tink = new Fairy (
    "Tink",
    50,
    50,
    50,
    50,
    50,
    4,
    "Blue",
    true,
    false,
    ["honey", "cookies", "berries"]
);

// console.log(big);
// big.eat();

// console.log(slimey);
// slimey.eat();

// console.log(tink);
tink.eat();
tink.drink();
tink.play();
tink.wash();
// tink.sleep();
tink.usePotion();