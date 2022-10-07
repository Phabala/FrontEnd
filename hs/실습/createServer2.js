const http = require('http');
const fs = require('fs').promises; // promises를 안달면 promise패턴을 안달게 되기 때문에 뒤에 에러가 나면 에러처리하는걸 넣어줘야 했다. 그런데 promises 넣으면 반환하는 객체 자체가 promise 인스턴스가 되서 . 을 사용할 수 있는 객체가 된다.

const server = http.createServer( async (req, res) => { // 콜백함수의 파라미터 명이 res
    try {
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {
            'Content-Type': 'text/html; charset-utf-80000'}); // http헤드를 작성하겠다. 중괄호는 Json 포맷
        res.end(data);
    } catch(err) {
        console.log(err);
        res.writeHead(500, {
            'Content-Type': 'text/html; charset-utf-80000'}); // 500으로 시작하면 서버문제
        res.end(err.message);
    }
});

server.listen(8080);
server.on('listening', ()=>{console.log("8080리스닝중");});
server.on('error', (error) => {console.log(error);});
