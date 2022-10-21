const express = require("express");
const Sessionrouter = express.Router();

module.exports = Sessionrouter;

Sessionrouter.get("/sessionCreate", (request, response) => {
    // session 생성
    request.session.user = {
        "id" : "smart",
        "pw" : "123",
        "nick" : "smart"
    };
    response.end(); // 이걸 해줘야 세션이 끝난다.
});

Sessionrouter.get("/sessionSelect", (request, response) => {
    // session 검색
    console.log("세션에 있는 user 값 : " + request.session.user);
    response.end();
});

Sessionrouter.get("/sessionDelete", (request, response) => {
    // session 검색
    delete request.session.user;
    response.end();
});


// 라우터 들어갈 때 기본적으로 들어가는 세가지:

// const express = require("express");
// const router = express.Router();
// module.exports = router;