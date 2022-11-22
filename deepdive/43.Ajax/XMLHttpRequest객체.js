// XMLHttpRequest 객체의 생성
const xhr = new XMLHttpRequest(); // Web API이므로 브라우저 환경에서만 정상적으로 실행
const prototypeProperty = {
    readyState : "HTTP 요청의 현재 상태를 나타내는 정수",
    status : "HTTP 요청에 대한 응답상태(HTTP 상태 코드)를 나타내는 정수",
    statusText : "HTTP 요청에 대한 응답 메시지를 나타내는 문자열",
    responseType : "HTTP 응답 타입 (예: document, json, text, blob, arraybuffer)",
    response : "HTTP 요청에 대한 응답 몸체(response body). responseType에 따라 타입이 다르다.",
    responseText : "서버가 전송한 HHTTP 요청에 대한 응답 문자열"
}

const eventHandlerProperty = {
    onreadystatechange : "readyState 프로퍼티 값이 변경된 경우",
    onloadstart : "HTTP 요청에 대한 응답을 받기 시작한 경우",
    onprogress : "HTTP 요청에 대한 응답을 받는 도중 주기적으로 발생",
    onabort : "abort 메서드에 의해 HTTP 요청이 중단된 경우",
    onerror : "HTTP 요청에 에러가 발생한 경우",
    onload : "HTTP 요청이 성공적으로 완료한 경우",
    ontimeout : "HTTP 요청이 시간이 초과한 경우",
    onloadend : "HTTP 요청이 완료한 경우, HTTP 요청이 성공 또는 실패하면 발생"   
}

const XMLHttpRequestMethod = {
    open : "HTTP 요청 초기화",
    send : "HTTP 요청 전송",
    abort : "이미 전송된 HTTP 요청 중단",
    setRequestHeader : "특정 HTTP 요청 헤더의 값을 설정",
    getResponseHeader : "특정 HTTP 요청 헤더의 값을 문자열로 변환"
}

const XMLHttpRequestProperty = {
    UNSENT : [0, "open 메서드 호출 이전"],
    OPENED : [1, "open 메서드 호출 이후"],
    HEADERS_RECEIVED : [2, "send 메서드 호출 이후"],
    LOADING : [3, "서버 응답 중(응답 데이터 미완성 상태)"],
    DONE : [4, "서버 응답 완료"]
}