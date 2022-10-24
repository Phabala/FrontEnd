const express = require("express");
const Messagerouter = express.Router();
const conn = require("../config/DBconfig");

// 라우터 만들고 난 후 꼭 해줘야 할 것
// 1. App.js 에 미들웨어 만들기
// 2. config 에 DBconfig.js 만들기

// Login 기능 구현하시오
// 1. message.ejs 에 form 수정
// 2. MessageLogin 라우터를 구현
// 3. 로그인 성공 후 Message 페이지로 이동

Messagerouter.get("/Message", (request, response) => {
    response.render("message", {
        user : request.session.user
    });
});

Messagerouter.post("/MessageJoin", (request, response) => {
    let email = request.body.email;
    let pw = request.body.pw;
    let tel = request.body.tel;
    let address = request.body.address;

    let sql = "insert into web_member values(?, ?, ?, ?, NOW())";

    conn.query(sql, [email, pw, tel, address], (err, row) => {
        if(!err) {
            console.log("입력 성공 : " + row);
            response.redirect("http://127.0.0.1:3000/Message");
        } else {
            console.log("입력 실패 : " + err);
        }
    }) 
});

Messagerouter.post("/MessageLogin", (request, response) => {
    let email = request.body.email;
    let pw = request.body.pw;
    let sql = "SELECT * from web_member WHERE email=?"

    conn.query(sql, [email], (err, row) => {
        if(!err) {
            if (pw == row[0].pw) {
                console.log(row[0])
                console.log(row.length)
                
                request.session.user = {
                    "email" : row[0].email,
                    "tel" : row[0].tel,
                    "address" : row[0].address
                };

                console.log("session 영역에 저장 성공 : ");
                console.log(request.session.user);
                    response.redirect("http://127.0.0.1:3000/Message");
            } else if (row.length == 0){
                response.write("<h1>로그인 실패</h1>");
            }
        } else {
            console.log("입력 실패 : " + err);            
        }
    })
});

Messagerouter.get("/MessageLogout", (request, response) => {
    delete request.session.user;
    response.redirect("http://127.0.0.1:3000/Message")
});

module.exports = Messagerouter;