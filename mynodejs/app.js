const express = require("express"); // 설치된 express 사용 선언
const app = express(); // express 실행 app 변수 대입

const router = require("./router/router.js");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false})); // post 방식일때 body영역을 분석해주는 middleware로 bodyparser 등록
// 순서는 bodyparser 이후에 router
app.use(router); // 미들웨어로 라우터 등록
app.listen(3000); // 현재 서버파일의 port 번호 설정