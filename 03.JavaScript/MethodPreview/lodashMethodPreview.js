// 모듈 추출
const _ = require('lodash');

// 변수 선언

const array = [{
    name:'고구마',
    price: 1000
}, {
    name:'감자',
    price:500
}, {
    name:'바나나',
    price:1500
}]

// 1번 형태
const outputA = _.sortBy(array, (item) => item.price)
console.log(outputA)

// 2번 형태
const outputB = _(array).sortBy((item) => item.name);
console.log(outputB)