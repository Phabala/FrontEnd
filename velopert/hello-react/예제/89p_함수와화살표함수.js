setTimeout(function() {
    console.log('hello world');
}, 1000);

setTimeout(() => {
    console.log('hello world');
}, 1000);

function BlackDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: function() {
            console.log(this.name + ': 멍멍!');
        }
    }
}
const blackDog = new BlackDog();
blackDog.bark(); // 검둥이: 멍멍!

function WhiteDog() {
    this.name = '흰둥이';
    return {
        name : '검둥이',
        bark: () => {
            console.log(this.name + ': 멍멍!');
        }
    }
}
const whiteDog = new WhiteDog();
whiteDog.bark(); // 흰둥이: 멍멍!

function twice(value) {
    return value * 2;
}
const triple = (value) => value * 3;
console.log(twice(2), triple(3));