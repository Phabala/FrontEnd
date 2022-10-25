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
    // 현재 로그인한 사람에게 온 메세지를 검색
    let sql = "SELECT * from web_message WHERE rec=?";
    if(request.session.user) {
        conn.query(sql, [request.session.user.email], (err, row) => {
            console.log(row);
            response.render("message", {
                user : request.session.user,
                row_name : row
            });
        });
    } else {
        response.render("message", {
            user : request.session.user
        });
    }

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
                response.redirect("http://127.0.0.1:3000/Message"); // redirect가 아닌 render로 하면 메세지를 확인할 수 있는 코드가 실행이 안된다

            } else if (row.length == 0){
                response.write("<h1>로그인 실패</h1>");
            }
        } else {
            console.log("입력 실패 : " + err);            
        }
    })
});

Messagerouter.get("/MessageUpdate", (request, response) => {
    // update.ejs 파일을 렌더링
    response.render("update", { 
        user : request.session.user
    });
});

Messagerouter.post("/MessageUpdateExe", (request, response) => {
    // 사용자가 입력한 pw, tel, address로 email의 정보를 수정하시오
    // session 은 mysql 안에 저장되있다.
    let email = request.session.user.email; // 세션은 update.ejs 에서 session값 전달을 안해줘도 라우터에 자동으로 넘어오나?
    let pw = request.body.pw;
    let tel = request.body.tel;
    let address = request.body.address;

    let sql = "UPDATE web_member SET pw=?, tel=?, address=? WHERE email=?";

    conn.query(sql, [pw, tel, address, email], (err, row) => {
        if(!err) {
            console.log("수정성공 :");
            console.log(row);

            request.session.user = {
                "email": email,
                "tel" : tel,
                "address": address
            }

            response.redirect("http://127.0.0.1:3000/Message");
        } else {
            console.log("입력 실패 : " + err);
        }
    }) 
});

Messagerouter.get("/MessageLogout", (request, response) => {
    delete request.session.user;
    response.redirect("http://127.0.0.1:3000/Message")
});

Messagerouter.get("/MessageMemberSelect", (request, response) => {
    let sql = "SELECT * FROM web_member";
    conn.query(sql, (err, row) => {
        if(!err) {
            console.log("검색 성공 : ");
            console.log(row);
            response.render("selectMember", {
                    "row" : row
                });
        } else {
            console.log("검색 실패 : " + err);
        }
    })
});

Messagerouter.get('/MessageDelete', (req,res) => {
    // ?key=value --> request.query.key 로 받는다
    let email = req.query.email;    // req.session.user.email 로 하면 현재 세션 아이디가 삭제됨
    let sql = "DELETE FROM web_member WHERE email = ?";
    conn.query(sql, [email], (err, row) => {  // 어떤 sql문을 db에 날릴 건지 / 실패 혹은 성공했을 때 어떤걸 보여줄건지
        if(!err){ // err에 아무런 값이 없다면? (성공일 때)
            console.log("삭제성공 : " + row);
            res.redirect("http://127.0.0.1:3000/MessageMemberSelect");
            // 입력성공 후 사용자는 메인페이지로 보내줌
        } else {
            console.log("삭제실패 : " + err);
        }
    })
});

Messagerouter.post("/MessageSend", (request, response) => {
    let send = request.body.send;
    let rec = request.body.rec;
    let content = request.body.content;

    let sql = "insert into web_message(send, rec, content, send_date) values(?, ?, ?, NOW())";

    conn.query(sql, [send, rec, content], (err, row) => {
        if(!err) {
            console.log("입력 성공 : " + row);
            response.redirect("http://127.0.0.1:3000/Message");
        } else {
            console.log("입력 실패 : " + err);
        }
    }) 
});

module.exports = Messagerouter;