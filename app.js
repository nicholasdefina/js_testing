class Pet {
    constructor (age, name) {
        this.age = age,
        this.name = name
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Dog extends Pet {
    bark() {
        return 'Woof woof';
    }
}


class Cat extends Pet {
    constructor(livesLeft=9) {
        super(name, age) // pulls from inherited class but allows for extension of additional info
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meow meow';
    }

    eat() { // overwrites Pet default. polymorphism, baby
        return `${this.name} is too picky to eat this garbage.`
    }
}