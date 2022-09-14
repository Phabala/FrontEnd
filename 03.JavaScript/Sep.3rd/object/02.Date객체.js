const today = new Date();
console.log(today.toDateString()); // 날짜, 요일
console.log(today.toLocaleString()); // Timezone 반영한 현재 시간

function myLocalTimeFormat(date) {
    let result = '';
    let year = String(date.getFullYear()).substring(2); // 2022 -> 22만 추출
    let month = date.getMonth() + 1;                    // 9월 -> 09
    month = month.length == 1 ? '0' + month : month;
    let day = `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`;
    let hour = date.getHours() < 10 ? '0'+date.getHours() : date.getHours(); // 백쿼트 안해도 돌아간다.
    let minute = `${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`
    let sec = `${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`
    return `${year}-${month}-${day} ${hour}:${minute}:${sec}`
}

console.log(myLocalTimeFormat(today))

// Unix Time
const unixDate = new Date(1.67e12);
console.log(unixDate.toLocaleString());

// 문자열로 생성
const strDate = new Date('2022-09-14 09:50');
console.log(myLocalTimeFormat(strDate));

// 시간 요소로 생성
const elementDate = new Date(2022, 9-1, 14, 9, 50); // 월은 1을 빼 주어야 함
console.log(myLocalTimeFormat(elementDate));

// 시간 더하고 빼기
today.setDate(today.getDate()+100);
console.log(myLocalTimeFormat(today));