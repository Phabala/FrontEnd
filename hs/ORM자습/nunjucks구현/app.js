const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nunjucks = require('nunjucks')

// Nunjucks 뷰엔진
nunjucks.configure('template', {
    autoscape : true,
    express : app
});

// admin.js
const express = require('express');
const router = express.Router();

router.get('/product', (req, res) => {
    // 텍스트를 출력할 때
    // res.send('admin 이후 프로덕트 URL');
    // 템플릿 문서 출력 (template/admin/product.html 파일을 템플릿 문서로 지정)
    res.render('admin/products.html', {
        name : '나이키 농구화' // name 변수로 데이터를 전달
    })
});
module.exports = router;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
