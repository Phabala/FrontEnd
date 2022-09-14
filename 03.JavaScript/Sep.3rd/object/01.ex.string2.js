// Palindrome
// 세자리 정수 두개를 곱한 결과가 Palindrome 일 때
// 가장 큰 수와 그 때 두개의 정수는?

// 1) reverse String 함수
function reverseString(str) {
    let result = '';
    for (let i = str.length-1; i >=0 ; i--)
        result += str[i];
    return result;
}
console.log(reverseString('가나다라 기러기, 스위스, 토마토'));

// 2) 주어진 문자열이 Palindrome인지 확인하는 함수
function isPalindrome(str) {
    return str  == reverseString(str);
}

console.log(isPalindrome('우영우'))

// 3) 배열에서 가장 큰 수와 그것의 인덱스 구하기
const array = [3, 98, 27, 51, 46];
let maxVal = 0; // maxVal = Number.MIN_SAFE_INTEGER
let maxIdx = 0; // maxIdx = -1

for (let i=1; i<array.length; i++) {
    if (array[i] > maxVal) {
        maxVal = array[i];
        maxIdx = i;
    }
}

let arr = []
let x = []
let y = []
let palindromes = []

for (let i=100; i<1000; i++) {
    for (let j=100; j<1000; j++) {
        arr.push(i*j)
    }
}

for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]) == reverseString(String(arr[i]))) {
        palindromes.push(arr[i])
        x.push(i)
        y.push(y)
    }
}

console.log(String(arr[100]), reverseString(String(arr[100])))
console.log(palindromes)

for (let i=0; i<palindromes.length; i++) {
    if (palindromes[i] > maxVal) {
        maxVal = palindromes[i];
        maxIdx = i;
    }
}

console.log(maxVal, maxIdx)
console.log(x[maxIdx], y[maxIdx])