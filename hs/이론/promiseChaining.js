const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => { // message2에 첫번째 .then 에서 resolve가 끝난 message '성공'이 들어간다.
        console.log(message2);
        return new Promise((resolve, reject) => {
            reject(message2); // reject가 다음으로 넘어가기 때문에 console.error(error) 에서 (error)값이 성공으로 출력된다.
        });    
    })
    .then((message3) => {
       console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    });