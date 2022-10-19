// app.js 에 있는 router 선언하는 부분을 여기에서 관리 하겠다.
const express = require("express");
const router = express.Router(); // express 갖고 있는 기능 중 router 기능 사용

const conn = require("../config/DBConfig.js") // 진짜로 오른쪽부터 입력하시는게 신기하네
// 원래는 conn과 DB 데이터를 여기에 넣었지만, 이걸 DBConfig 안에 넣어서 require 과 module.exports 로 conn을 만들어줬다.

router.get("/plus", function(request, response) { // /plus 라우터 기능 정의 및 등록
    console.log("/plus 라우터호출");
    console.log(request.query.num1);
    console.log(request.query.num2);
    console.log(parseInt(request.query.num1) + parseInt(request.query.num2))

    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"}); // 사용자에게 응답할 파일을 writeHead로 지정해줌.
    response.write("<html>");
    response.write("<body>");
    response.write("응답 성공<br>");
    response.write("결과값 : " + (parseInt(request.query.num1) + parseInt(request.query.num2)));
    response.write("</body>");
    response.write("</html>");
    response.end(); // 응답이 다 끝났으니 사용제에게 보내주겠다.
});

router.get("/cal", (request, response) => { // /cal 라우터 기능 정의 및 등록
    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);
    let cal = request.query.cal;

    console.log(num1 + cal + num2);

    // 사용자가 입력한 기호에 맞는 연산결과값을 브라우저에 출력하시오.
    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    response.write("<html>");
    response.write("<body>");

    if (cal == "+") {
        response.write("결과값 : " + (parseInt(num1) + parseInt(num2)));
    } else if (cal == "-") {
        response.write("결과값 : " + (parseInt(num1) - parseInt(num2)));
    } else if (cal == "/") {
        response.write("결과값 : " + (parseInt(num1) / parseInt(num2)));
    } else if (cal == "*") {
        response.write("결과값 : " + (parseInt(num1) * parseInt(num2)));
    }

    response.write("</body>");
    response.write("</html>");
    response.end();
});

router.post("/Grade", (request, response) => {

    console.log("이름 : " + request.body.name); // query가 아닌 body
    console.log("자바 : " + request.body.java);
    console.log("웹 : " + request.body.web);
    console.log("IoT : " + request.body.iot);
    console.log("안드로이드 : " + request.body.android);

    let java = parseInt(request.body.java);
    let web = parseInt(request.body.web);
    let iot = parseInt(request.body.iot);
    let android = parseInt(request.body.android);
    let avg = (java + web + iot + android)/4

    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write("name: " + request.body.name);
    response.write("<br>java: " + java);
    response.write("<br>web: " + web);
    response.write("<br>iot: " + iot);
    response.write("<br>android: " + android + "<br>");

    if (avg >= 95) {
        response.write("avg : " + "A+");
    } else if (avg >= 90) {
        response.write("avg : " + "A");
    } else if (avg >= 85) {
        response.write("avg : " + "B+");
    } else if (avg >= 80) {
        response.write("avg : " + "B");
    } else if (avg >= 75) {
        response.write("avg : " + "C");
    } else {
        response.write("avg : " + "F");
    }

    response.write("</body>");
    response.write("</html>");
    response.end();
});

router.post("/Join", (request, response) => {
    let id = request.body.id;
    let pw = request.body.pw;
    let name = request.body.name;
    let email = request.body.email;
    let tel = request.body.tel;
    let gender = request.body.gender;
    let hobby = request.body.hobby;
    let birth = request.body.birth;
    let color = request.body.color;
    let country = request.body.country;
    let talk = request.body.talk;

    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    response.write("<html>");
    response.write("<body>");

    response.write("ID : " + id);
    response.write("<br>NAME : " + name);
    response.write("<br>EMAIL : " + email);
    response.write("<br>TEL : " + tel);
    response.write("<br>GENDER : " + gender);
    response.write("<br>COUNTRY : " + country);
    response.write("<br>BIRTH : " + birth);
    response.write("<br>COLOR : " + color);
    response.write("<br>HOBBY : " + hobby);
    response.write("<br>TALK : " + talk);

    response.write("</body>");
    response.write("</html>");
    response.end();
});



router.post("/JoinDB", (request, response) => {
    let id = request.body.id;
    let pw = request.body.pw;
    let nick = request.body.nick;

    let sql = "insert into member values(?, ?, ?);";

    conn.query(sql, [id, pw, nick], (err, row) => { // 명령된 변수에 명령어를 보내는 메소드: query
    // 두가지 매개변수: sql --> sql 문에 어떤 명령어를 넣을건지, (err, row) --> 실패했을 때와 성공했을 때의 값
        if(!err) { // err에 값이 안 들어있다면 (성공했다면)
            console.log("입력 성공 : " + row);
            response.redirect("http://127.0.0.1:5500/mynodejs/public/ex06Main.html");
        } else {
            console.log("입력 실패 : " + err);
        }
    }) 
});

router.get("/Delete", (request, response) => {
    let id = request.query.id;

    let sql = "DELETE FROM member WHERE id=?"

    conn.query(sql, [id], (err, row) => {
        if(err) {
            console.log("삭제 실패(Syntax Error) : " + err)
        } else if (row.affectedRows == 0) {
            console.log("삭제된 값이 없습니다.");
        } else { // 이거 좀 이상한거같은데
            console.log("명령에 성공한 수 : " + row.affectedRows); // sql문은 syntax error 가 없기 때문에 삭제될 값이 없어도 삭제 성공이 나온다.
            response.redirect("http://127.0.0.1:5500/mynodejs/public/ex06Main.html");
        }
    })
});

router.post("/Update", (request, response) => {

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
            response.redirect("http://127.0.0.1:5500/mynodejs/public/ex06Main.html")
        }
    });

    // conn.query(sql, [id], (err, row) => {
    //     if(err) {
    //         console.log("삭제 실패(Syntax Error) : " + err)
    //     } else if (row.affectedRows == 0) {
    //         console.log("삭제된 값이 없습니다.");
    //     } else {
    //         console.log("명령에 성공한 수 : " + row.affectedRows); // sql문은 syntax error 가 없기 때문에 삭제될 값이 없어도 삭제 성공이 나온다.
    //         response.redirect("http://127.0.0.1:5500/mynodejs/public/ex06Main.html");
    //     }
    // })
});

router.get("/SelectAll", (request, response) => {

    let sql = "SELECT * FROM member"; // 세미콜론 넣으면 안됨

    conn.query(sql, (err, row) => {
        if(err) {
            console.log("검색 실패 :" + err);
        }else if(row.length >0) {
            console.log('검색된 데이터의 수 : ' + row.length);
            for(let i = 0; i < row.length; i++) {
                console.log(row[i].id, row[i].pw, row[i].nick);
            }
        }else if(row.length == 0) {
            console.log('검색된 데이터가 없습니다.')
        }
        response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        response.write("<html>");
        response.write("<body>");
        response.write("<table border=1;>");
        response.write("<tr>");
        response.write("<th>ID</th>");
        response.write("<th>PW</th>");
        response.write("<th>NICK</th>");
        response.write("</tr>");
        for (let i = 0; i < row.length; i++){
            response.write("<tr>");
            response.write("<td>" + row[i].id + "</td>");
            response.write("<td>" + row[i].pw + "</td>");
            response.write("<td>" + row[i].nick + "</td>");
            response.write("</tr>");
        }
    
        response.write("</body>");
        response.write("</html>");
        response.end();
    })
    

});

router.get("/SelectOne", (request, response) => {
    let id = request.query.id;

    let sql = "SELECT * FROM member WHERE id = ?"

    conn.query(sql, [id], (err, row) => {
        console.log(row);
        if(err) {
            console.log("검색 실패(Syntax Error) : " + err)
        } else if (row.length== 0) {
            console.log("검색된 값이 없습니다.");
        } else {
            console.log("검색된 회원 수 : " + row.length); // sql문은 syntax error 가 없기 때문에 삭제될 값이 없어도 삭제 성공이 나온다.
        }
        response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        response.write("<html>");
        response.write("<body>");
        response.write("<table border=1;>");
        response.write("<tr>");
        response.write("<th>ID</th>");
        response.write("<th>PW</th>");
        response.write("<th>NICK</th>");
        response.write("</tr>");
        response.write("<tr>");
        for (let i = 0; i < row.length; i++){
            response.write("<tr>");
            response.write("<td>" + row[i].id + "</td>");
            response.write("<td>" + row[i].pw + "</td>");
            response.write("<td>" + row[i].nick + "</td>");
            response.write("</tr>");
        }            
        response.write("</tr>");
        response.write("</body>");
        response.write("</html>");
        response.end();
    })
});

router.post("/Login", (request, response) => {
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
            response.redirect("http://127.0.0.1:5500/mynodejs/public/ex05LoginS.html")
            console.log("로그인 성공")
        } else {
            response.redirect("http://127.0.0.1:5500/mynodejs/public/ex05loginF.html")
            console.log("로그인 실패")
        }
    })

});

module.exports = router; // router를 외부(app.js)에서 사용할 수 있게 만듦