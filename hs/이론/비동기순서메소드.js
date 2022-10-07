// if 로 오른쪽으로 너무 많이 들어가는 경우: callback hell
// 따라서 프로미스로 극복 (.then)
const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => { // sync가 없으면 기본적으로 비동기
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');