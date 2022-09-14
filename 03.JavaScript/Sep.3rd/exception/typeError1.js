// TypeError 기본 예외 처리

function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback();
    }
}

// 정상 실행
callThreeTimes(function() {console.log('안녕하세요')})

// 예외 실행
callThreeTimes(); // TypeError: callback is not a function