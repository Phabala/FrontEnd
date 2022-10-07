const prompt = require("prompt-sync")();

let Y = prompt('태어난 년도 4자리');
console.log(Y);
let M = prompt('태어난 월 1~12 입력');
console.log(M);
let D = prompt('태어난 일 입력');
console.log(D);

Y = Number(Y);
M = Number(M);
D = Number(D);

const today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let day = today.getDay();

if (M > month) {
    console.log(year - Y-1);
}
else if (M < month) {
    console.log(year - Y);
}
else if (M === month && D <= day) {
    console.log(year - Y);
}
else {
    console.log(year - Y-1);
}