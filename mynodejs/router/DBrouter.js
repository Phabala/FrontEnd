const express = require("express");
const DBrouter = express.Router();
const conn = require("../config/DBConfig.js") // 진짜로 오른쪽부터 입력하시는게 신기하네

DBrouter.post("/JoinDB", (request, response) => {
    let id = request.body.id;
    let pw = request.body.pw;
    let nick = request.body.nick;

    let sql = "insert into member values(?, ?, ?);";

    conn.query(sql, [id, pw, nick], (err, row) => { // 명령된 변수에 명령어를 보내는 메소드: query
    // 두가지 매개변수: sql --> sql 문에 어떤 명령어를 넣을건지, (err, row) --> 실패했을 때와 성공했을 때의 값
        if(!err) { // err에 값이 안 들어있다면 (성공했다면)
            console.log("입력 성공 : " + row);
            response.redirect("http://127.0.0.1:3000/Main");
        } else {
            console.log("입력 실패 : " + err);
        }
    }) 
});

DBrouter.get("/Delete", (request, response) => {
    let id = request.query.id;

    let sql = "DELETE FROM member WHERE id=?"

    conn.query(sql, [id], (err, row) => {
        if(err) {
            console.log("삭제 실패(Syntax Error) : " + err)
        } else if (row.affectedRows == 0) {
            console.log("삭제된 값이 없습니다.");
        } else { // 이거 좀 이상한거같은데
            console.log("명령에 성공한 수 : " + row.affectedRows); // sql문은 syntax error 가 없기 때문에 삭제될 값이 없어도 삭제 성공이 나온다.
            response.redirect("http://127.0.0.1:3000/Main");
        }
    })
});

DBrouter.post("/Update", (request, response) => {

    // 사용자가 입력한 id의 pw를 변경하고
    // 성공 후 Main.html 페이지로 이동하시오.
    let id = request.body.id;
    let data = request.body.data;
    let updateType = request.body.updateType;

    let sql = `UPDATE member SET ${updateType} = ? WHERE id=?`; // 컬럼 값은 고정된 값이여서 ?로 입력 불가능

    conn.query(sql, [data, id], (err, row) => {
        if(err) {
            console.log("변경 실패(Syntax Error) : " + err)
        } else if (row.affectedRows == 0) {
            console.log("변경된 값이 없습니다.");
        } else {
            console.log("변경에 성공한 수 : " + row.affectedRows);
            response.redirect("http://127.0.0.1:3000/Main")
        }
    });

    // conn.query(sql, [id], (err, row) => {
    //     if(err) {
    //         console.log("삭제 실패(Syntax Error) : " + err)
    //     } else if (row.affectedRows == 0) {
    //         console.log("삭제된 값이 없습니다.");
    //     } else {
    //         console.log("명령에 성공한 수 : " + row.affectedRows); // sql문은 syntax error 가 없기 때문에 삭제될 값이 없어도 삭제 성공이 나온다.
    //         response.redirect("http://127.0.0.1:5500/public/ex06Main.html");
    //     }
    // })
});

DBrouter.get("/SelectAll", (request, response) => {

    let sql = "SELECT * FROM member"; // 세미콜론 넣으면 안됨

    conn.query(sql, (err, row) => {
        if(err) {
            console.log("검색 실패 :" + err);
        }else if(row.length >0) {
            console.log('검색된 데이터의 수 : ' + row.length);

            response.render("SelectAll", {
                row_names : row
            })

            // for(let i = 0; i < row.length; i++) {
            //     console.log(row[i].id, row[i].pw, row[i].nick);
            // }
        }else if(row.length == 0) {
            console.log('검색된 데이터가 없습니다.')
        }

        // response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        // response.write("<html>");
        // response.write("<body>");
        // response.write("<table border=1;>");
        // response.write("<tr>");
        // response.write("<th>ID</th>");
        // response.write("<th>PW</th>");
        // response.write("<th>NICK</th>");
        // response.write("</tr>");
        // for (let i = 0; i < row.length; i++){
        //     response.write("<tr>");
        //     response.write("<td>" + row[i].id + "</td>");
        //     response.write("<td>" + row[i].pw + "</td>");
        //     response.write("<td>" + row[i].nick + "</td>");
        //     response.write("<td><a href='http://127.0.0.1:3000/SelectDelete?id="+row[i].id+"'>삭제</a></td>");
        //     response.write("</tr>");
        // }
    
        // response.write("</body>");
        // response.write("</html>");
        // response.end();
    })
    

});

DBrouter.get("/SelectOne", (request, response) => {
    let id = request.query.id;

    let sql = "SELECT * FROM member WHERE id = ?"

    conn.query(sql, [id], (err, row) => {
        console.log(row);
        if(err) {
            console.log("검색 실패(Syntax Error) : " + err)
        } else if (row.length== 0) {
            console.log("검색된 데이터의 수 : " + row.length);
        } else {
            console.log("검색된 회원 수 : " + row.length); // sql문은 syntax error 가 없기 때문에 삭제될 값이 없어도 삭제 성공이 나온다.
            console.log(row);
            response.render("SelectOne",{
                row_name : row
                // row_name 은 key, row 는 value
            });
        }
        // response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        // response.write("<html>");
        // response.write("<body>");
        // response.write("<table border=1;>");
        // response.write("<tr>");
        // response.write("<th>ID</th>");
        // response.write("<th>PW</th>");
        // response.write("<th>NICK</th>");
        // response.write("</tr>");
        // response.write("<tr>");
        // for (let i = 0; i < row.length; i++){
        //     response.write("<tr>");
        //     response.write("<td>" + row[i].id + "</td>");
        //     response.write("<td>" + row[i].pw + "</td>");
        //     response.write("<td>" + row[i].nick + "</td>");
        //     response.write("</tr>");
        // }            
        // response.write("</tr>");
        // response.write("</body>");
        // response.write("</html>");
        // response.end();
    })
});

DBrouter.get("/SelectDelete", (request, response) => {
    let id = request.query.id;

    let sql = "DELETE FROM member WHERE id=?"

    conn.query(sql, [id], (err, row) => {
        if(err) {
            console.log("삭제 실패(Syntax Error) : " + err)
        } else if (row.affectedRows == 0) {
            console.log("삭제된 값이 없습니다.");
        } else { // 이거 좀 이상한거같은데
            console.log("명령에 성공한 수 : " + row.affectedRows); // sql문은 syntax error 가 없기 때문에 삭제될 값이 없어도 삭제 성공이 나온다.
            response.redirect("http://127.0.0.1:3000/SelectAll");
        }
    })
});

DBrouter.post("/Login", (request, response) => {
    // dbId = 'smart';
    // dbPw = '123';
    // let id = request.body.id;
    // let pw = request.body.pw;

    // if (dbId == id && dbPw == pw) {
    //     response.redirect('http://127.0.0.1:5500/mynodejs/public/ex05loginS.html'); // 파일명만 쓰면 app과 파일 위치가 다를경우 불러오지 못한다.
    // } else {
    //     response.redirect('http://127.0.0.1:5500/mynodejs/public/ex05loginF.html')
    // }

    let id = request.body.id;
    let pw = request.body.pw;

    let sql = "SELECT * FROM member WHERE id = ? and pw = ?";

    conn.query(sql, [id, pw], (err, row) => {
        if(err) {
            console.log("검색 실패(Syntax Error) : " + err)
        } else if (row.length > 0) {
            // response.redirect("http://127.0.0.1:5500/mynodejs/public/ex05loginS.html")
            
            request.session.user = id;

            console.log("session 영역에 id 저장 성공" + request.session.user);
            
            response.render('LoginS', {
                id_name : id
            });
            console.log("로그인 성공")
        } else {
            response.redirect("http://127.0.0.1:5500/public/ex05loginF.html")
            console.log("로그인 실패")
        }
    })

});

DBrouter.get("/Main", (request, response) => { // ejs는 단독으로 있을 수 없으며, 이렇게 라우터가 있어야 한다.
    response.render("Main", {
        id : request.session.user // 이 Main 라우터에서 Main.ejs 로 request.session.id 를 id로 보내준다.
    });
});

DBrouter.get("/Logout", (request, response) => {
    delete request.session.user;

    response.render("Main", {
        id : request.session.user
    })
})

module.exports = DBrouter;