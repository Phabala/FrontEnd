const http = require('http');
/* http.createServer((req, res) => { // 콜백함수의 파라미터 명이 res
    res.writeHead(200, {'Content-Type': 'text/html; charset-utf-80000'}) // http헤드를 작성하겠다. 중괄호는 Json 포맷
    res.write(`<h1>Hello Phabala<h1>`)
    res.end('<p>Bye</p>')
}).listen(8080, ()=>{console.log("8080 대기중")})
.on
; */ // server. 는 위의 것을 바인딩 한 것

const server = http.createServer((req, res) => { // 콜백함수의 파라미터 명이 res
    res.writeHead(200, {'Content-Type': 'text/html; charset-utf-80000'}) // http헤드를 작성하겠다. 중괄호는 Json 포맷
    res.write(`<h1>Hello Phabala<h1>`)
    res.end('<p>Bye</p>')
});

server.listen(8080);
server.on('listening', ()=>{console.log("8080리스닝중");});
server.on('error', (error) => {console.log(error);});

/*
const server2 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset-utf-80000'})
    res.write(`<h1>Hello Phabala<h1>`)
    res.end('<p>Bye</p>')
});

server2.listen(8081);
server2.on('listening', ()=>{console.log("8081리스닝중");});
server2.on('error', (error) => {console.log(error);});
*/ //서버 두개 만들기 가능 