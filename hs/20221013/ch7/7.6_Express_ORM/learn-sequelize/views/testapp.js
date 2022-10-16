const { User } = require("../models");

// UPDATE nodejs.users SET comment = '바꿀 내용' WHERE id = 2;
User.update({
    comment: '바꿀 내용',
}, {
    where: {id:2}
});

// 결과값이 자바스크립트 객체임
const user = await User.findOne({});
console.log(user.nick); // 사용자 닉네임

// include로 JOIN과 비슷한 기능 수행 가능(관계 있는 것 엮을 수 있음)
const user2 = await User.findOne({
    // 원노트 안에 있음
})