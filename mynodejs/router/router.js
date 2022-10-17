// app.js 에 있는 router 선언하는 부분을 여기에서 관리 하겠다.
const express = require("express");
const router = express.Router(); // express 갖고 있는 기능 중 router 기능 사용

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

module.exports = router; // router를 외부(app.js)에서 사용할 수 있게 만듦