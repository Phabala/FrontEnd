const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');

let conn = mysql.createConnection({
    host : "127.0.0.1",
    user : "gisuser",
    password : "gispass",
    port : "3306",
    database : "mynodejs_db"
});

router.post('/joinData', (req, res) => {
    console.log('joinData 라우터');
    console.log(req.body.user);

    let sql = 'insert into member values (?, ?, 3)';

    conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows) => {
        if(rows) {
            console.log('회원가입 성공!');
            // json 파일을 응답해준다.
            res.json({result: 'joinSuccess'});
        } else {
            console.log('회원가입 실패');
            res.json({result: 'joinFail'});
        }
        res.end(); // 성공하던 실패하던 라우터를 끝내준다.
    });
});

router.post('/loginData', (req, res) => {
    console.log('loginData 라우터');
    console.log(req.body.userData);

    let sql = 'SELECT * FROM member WHERE id=? AND pw=?';

    conn.query(sql, [req.body.userData.id, req.body.userData.pw], (err, row) => {
        if(row.length > 0) {
            console.log('라우터 로그인 성공');
            res.json({result : 'loginSuccess'});
        } else {
            console.log('라우터 로그인 실패');
            res.json({result : 'loginFail'});
        }
    })
})

router.get('*', (req, res)=>{
    console.log('happy hacking!');
    res.sendFile(path.join(__dirname, '..', 'react-project', 'build', 'index.html'));
});

module.exports = router;