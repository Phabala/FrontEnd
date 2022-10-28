const express = require("express"); // 설치된 express 사용 선언
const app = express(); // express 실행 app 변수 대입
const bodyparser = require("body-parser");
const router = express.Router();

let ejs = require("ejs");
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:false}));
app.use(router); // 이게 라우터(app.get)랑 어떻게 연결되는거지?


app.get('/ex01', function(request, response){ // /ex01 물음표 뒤에 값이 있던 없던 ex01과 request.query만 있으면 된다.
    var name = request.query.name;
    var season = request.query.season;
    response.render("ex01", {
        name:name,
        season:season
    })
})
app.listen(3000);