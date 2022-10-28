const express = require('express');
const app = express();
const router = require('./router/router');

// 1) 경로 처리를 하는 모듈 (path)
// 여러 환경 (윈도우, 맥, 리눅스)때문에 경로를 단순히 문자열로 접근하면 프로그램이 특정 운영체제에서만 돌아간다.
// 이런 위험을 방지해주는 모듈 => path
const path = require('path');

// 2) 외부에 있는 정보들을 요청할 때 사용하는 모듈 : cors
// 데이터를 주고받을 때 필수적으로 등록할 것
const cors = require('cors');

// 이 폴더 안에 있는 static 파일을 사용한다.
app.use(express.static(path.join(__dirname))); // 현재 디렉토리(__dirname) 기준으로 환경에 맞는 경로로 묶어라

// 값을 주고받을 때 필요함
app.use(cors());
app.use(express.json());

app.use(router);
app.listen(3001);