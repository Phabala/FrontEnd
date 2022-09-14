let numberFromLiteral = 273; // 리터럴 생성
let numberFromConstructor = new Number(273); // 생성자 생성 (이 용어가 맞나?)

let num = 12345.6789;
console.log(num.toExponential()) // 1.23456789e+4 (지수표시(과학적 표기법))
console.log(num.toFixed(2)) // 12345.68 (고정소수점 표시)
console.log(num.toPrecision()) // 12345.6789 (길이에 따라 지수 혹은 고정소수점 표시)