// git pull 한걸 보자. 빼먹은게 많다.
// 배열의 요소 순서를 뒤집기(reverse) - 배열이 변함
let cars = ['Benz', 'Kia', 'Hyundai', 'Lamborghini']
console.log(cars.reverse());
console.log(cars);
function reverseString(str) {
    let arr = str.split('')
    let reversedArr = arr.reverse()
    let reversedString = reversedArr.join('')
    return reversedString
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('BackEnd'))
console.log(reverseString2('FrontEnd'))

// 배열 과제
const objArray = [
    {name:'James', score:80, math:80, sci:70},
    {name:'Maria', score:90, math:90, sci:70},
    {name:'Adam', score:70, math:80, sci:60},
    {name:'Eve', score:65, math:70, sci:80}
]

// 1. 성적순으로 정렬, 2. math와 sci의 평균 구하기 3. math점수가 80점 이상인 사람