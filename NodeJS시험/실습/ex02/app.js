const express = require("express"); // 설치된 express 사용 선언
const app = express(); // express 실행 app 변수 대입
const bodyparser = require("body-parser");
const router = express.Router();

let ejs = require("ejs");
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.post('/ex02login', function(request, response){
    const routerId = 'hello';
    const routerPw = '1234';
    let id = request.body.id;
    let pw = request.body.pw;
    if (routerId == id && routerPw == pw) {
        request.session.user = {
            id : 'smart',
        }
        response.render()
    }
})

// app.get('/ex01', function(request, response){
//     var name = request.query.name;
//     var season = request.query.season;
//     response.render("ex01", {
//         name:name,
//         season:season
//     })
// })
app.listen(3000);