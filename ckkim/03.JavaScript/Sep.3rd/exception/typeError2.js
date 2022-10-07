function callTenTimes(callback) {
    if (typeof(callback) == 'function') {
        for (let i = 0; i < 10; i++) {
            callback();
        }
    } else {
        console.log('매개변수 callback을 함수로 지정해주세요.')
    }
}
// 정상 실행
callTenTimes(function() {console.log('안녕하세요')})

// 예외 실행
callTenTimes(); // TypeError: callback is not a function