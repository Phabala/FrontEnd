// JSON.stringify(객체, 변환함수, 공백개수) --> 자바스크립트 객체를 문자로 만듭니다.
// JSON.parse(문자열) --> 문자열을 자바스크립트 객체로 파싱합니다.

// 변수 선언
const javascriptObject = [{
    name: '윤인성',
    region: '서울'
}, {
    name: '윤명월',
    region: '도쿄'
}]

// JSON.stringify()

const outputA = JSON.stringify(javascriptObject);
const outputB = JSON.stringify(javascriptObject, null, 4); // 뒤에 숫자는 tab 공백 크기라고 생각하면 된다.
console.log(typeof(outputA));
console.log(typeof(outputB));
console.log(outputA);
console.log(outputB);
console.log('--------------')

// JSON.parse()
const outputC = JSON.parse(outputB)
console.log(typeof(outputC));
console.log(outputC);