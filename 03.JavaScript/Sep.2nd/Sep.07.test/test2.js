const prompt = require("prompt-sync")();

let Y = prompt('연도 입력: ');
Y = Number(Y);

if (Y % 400 === 0) {
    console.log("윤년")
} else if (Y % 100 === 0) {
    console.log("평년")
} else if (Y % 4 === 0) {
    console.log("윤년")
} else {
    console.log("평년")
}