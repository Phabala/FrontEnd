const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000); // || --> 앞에 것이 true면 그 값을 활용, false면 그 뒷값(3000번)을 활용

app.use(
    (res, req, next) => {
        console.log("모든 요청에 다 실행됩니다.");
        next();
    }
)

app.get('/', 
    (req, res, next) => { 
        // res.send('hello Express');
        // res.sendFile(path.join(__dirname, '/index.html));
        console.log("GET / 요청에서만 실행됩니다.");
        next();
        },
    (req, res) => {
        throw new Error("에러는 에러 처리 미들웨어로 갑니다.")
    }
);

app.use(
    (err, req, res, next) => {
        console.error(err);
        res.status(500).send(err.message);
    }
);

app.listen(
    app.get('port'),
    () => {
        console.log(app.get('port'), '번 포트에서 대기 중');
    }
)