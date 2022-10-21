const express = require("express"); // 설치된 express 사용 선언
const app = express(); // express 실행 app 변수 대입

const router = require("./router/router.js");
const DBrouter = require("./router/DBrouter");
const EJSrouter = require("./router/EJSrouter");
const Sessionrouter = require("./router/SessionRouter");

const bodyparser = require("body-parser");
let ejs = require("ejs");

const session = require("express-session"); // 세션기능
const mysql_session = require("express-mysql-session"); // 세션이 저장되는 영역(mysql)

// set : nodejs 에서 이미 있는 설정을 변경하겠다.
// use : 

app.set("view engine", "ejs");

let conn = {
    host : "127.0.0.1",
    user : "gisuser",
    password : "gispass", 
    port : "3306",
    database : "mynodejs_db"
}

let conn_session = new mysql_session(conn);

app.use(session({
    secret : "smart",
    resave : false, // 저장
    saveUninitialized : true, // 초기화
    store : conn_session
}));

app.use(express.static("./public"));

app.use(bodyparser.urlencoded({extended:false})); // post 방식일때 body영역을 분석해주는 middleware로 bodyparser 등록
// 순서는 bodyparser 이후에 router
app.use(router); // 미들웨어로 라우터 등록
app.use(DBrouter);
app.use(EJSrouter);
app.use(Sessionrouter);
app.listen(3000); // 현재 서버파일의 port 번호 설정