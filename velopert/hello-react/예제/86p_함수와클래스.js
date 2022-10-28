function Dog(name) {
    this.name = name;
}

Dog.prototype.say = function() {
    console.log(this.name + ': 멍멍');
}
var dog = new Dog('검둥이');
dog.say(); // 검둥이: 멍멍

class Dog2 {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name + ': 멍멍');
    }
}

const dog2 = new Dog2('흰둥이');
dog2.say();