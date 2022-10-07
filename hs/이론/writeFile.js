const fs = require('fs').promises;
fs.writeFile('./writeme.txt', '글이 입력됩니다.')

/*fs.writeFile('./writeme.txt', '글이 입력됩니다.')
    .then(() => { // 얘 결과값도 fallthfough 로 들어가는듯
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });*/