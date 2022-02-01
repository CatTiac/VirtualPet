class Pet {
    constructor(name){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._happiness = 100;
        this._energy = 100;
        this._hygiene = 100;
    }
    get name() {
        return this._name;
    }
    get name() {
        return this._hunger;
    }
    get name() {
        return this._thirst;
    }
    get name() {
        return this._happiness;
    }
    get name() {
        return this._energy;
    }
    get name() {
        return this._hygiene;
    }
    eat() {
        this._hunger--;
        this._thirst++;
        this._energy++;
        this._happiness++;
    }
    drink() {
        this._thirst--;
        this._energy++;
        this._happiness++;
    }
    wash() {
        this._hygiene++;
        this._happiness++;
    }
    play() {
        this._hunger++;
        this._thirst++;
        this._energy--;
        this._happiness++;
    }
}

class Dragon extends Pet {
    constructor(name, color, canFly, canSwim, favFood) {
        super (name);
        this._color = color;
        this._canFly = canFly;
        this._canSwim = canSwim;
        this._favFood = favFood;
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
    get favFood() {
        return this._favFood;
    }
}

const big = new Dragon(
    "Big",
    "Green",
    true,
    false,
    ["pizza", "cake", "people"]
);

class Kelpie extends Pet {
    constructor(name, color, canFly, canSwim, favFood) {
        super (name);
        this._color = color;
        this._canFly = canFly;
        this._canSwim = canSwim;
        this._favFood = favFood;
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
    get favFood() {
        return this._favFood;
    }
}

const slimey = new Kelpie (
    "Slimey",
    "Purple",
    false,
    true,
    ["fish", "fishcake", "fish fingers"]
);

class Fairy extends Pet {
    constructor(name, color, canFly, canSwim, favFood) {
        super (name);
        this._color = color;
        this._canFly = canFly;
        this._canSwim = canSwim;
        this._favFood = favFood;
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
    get favFood() {
        return this._favFood;
    }
}

const tink = new Fairy (
    "Tink",
    "Blue",
    true,
    false,
    ["honey", "cookies", "berries"]
);