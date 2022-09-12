const prompt = require("prompt-sync")();

let score = prompt('점수 입력(0~100): ');
score = Number(score);


switch (parseInt(score/10)) {
    case 10:
    case 9:
        console.log(score + ' A')
        break
    case 8:
        console.log(score + ' B')
        break
    case 7:
        console.log(score + ' C')
        break
    case 6:
        console.log(score + ' D')
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log(score + ' F')
}