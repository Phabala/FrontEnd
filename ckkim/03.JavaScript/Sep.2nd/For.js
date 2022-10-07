// 1~100 더하기
let sum = 0;
for (let i=1; i<=100; i++) {
    sum += i
}
console.log(`1에서 100까지 정수의 합은 ${sum}입니다.`)

// 10!

let product = 1;
for (let i=10; i>0; i--) {
    product *= i;
}
console.log(`1에서 10까지 정수의 곱은 ${product}입니다.`)

// 10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력하세요.

const prompt = require("prompt-sync")();
let val = prompt('10보다 큰 정수 입력: ');
val = Number(val);
let devisors = [];

for (let i=1; i<val; i++) {
    if (val%i === 0) {
        devisors.push(i)
    }
}
console.log(devisors);