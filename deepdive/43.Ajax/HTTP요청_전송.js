/* 
    HTTP 요청을 전송하는 경우 다음 순서를 따른다.
    1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
    2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정한다.
    3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.
*/

// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('GET', '/users');

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송
xhr.send();

// XMLHttpRequest.prototype.open
// open 메서드는 서버에 전송할 HTTP 요청을 초기화한다. open 메서드를 호출하는 방법은 다음과 같다.

// xhr.open(method, url[, async])
// 매개변수, 설명
const xhrOpenParameter = {
    method : "HTTP 요청 메서드 (GET, POST, PUT, DELETE 등)",
    url : "HTTP 요청을 전송할 URL",
    async : "비동기 요청 여부. 옵션으로 기본값은 true이며, 비동기 방식으로 동작한다."
}

const HTTPRequestMethod = {
    column : ["종류", "목적", "페이로드"],
    GET : ["index/retrieve", "모든/특정 리소스 취득", "X"],
    POST : ["create", "리소스 생성", "O"],
    PUT : ["replace", "리소스 전체 교체", "O"],
    PATCH : ["modify", "리소스의 일부 수정", "O"],
    DELETE : ["delete", "모든/특정 리소스 삭제", "X"]
}