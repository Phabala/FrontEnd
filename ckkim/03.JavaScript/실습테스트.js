// 문제 1번
let ans1 = function (num1, num2) {
    let smallNum = 0
    let bigNum = 0

    if (num1 > num2) {
        smallNum = num2;
        bigNum = num1;
    } else {
        smallNum = num1;
        bigNum = num2;
    }

    let arr = [smallNum]

    while ((arr[arr.length - 1]+3) <= bigNum) {
        arr.push(arr[arr.length - 1] + 3)
    }

    return arr;
}
console.log('-----문제1-----')
console.log(ans1(2, 10))
console.log(ans1(12, 3))
console.log()



// 문제 2번
let ans2 = function(birthday) {
    let year = parseInt(birthday.substr(0, 2));
    let month = parseInt(birthday.substr(2, 2));
    let day = parseInt(birthday.substr(4, 2));
    
    if (year<=22) {
        year += 2000;
    } else {
        year += 1900;
    }

    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth() + 1;
    let thisDay = today.getDate(); 
    
    let age = thisYear - year;
    
    if (month < thisMonth) {
        console.log(age);
        return age;
    } else if (month > thisMonth) {
        console.log(age - 1);
        return age - 1;
    } else {
        if (day <= thisDay) {
            console.log(age);
            return age;
        } else {
            console.log(age - 1);
            return age - 1;
        }
    }
}

console.log('-----문제2-----')
ans2('991003')
ans2('000919')
console.log()

// 문제 3번
let ans3 = function(num) {
    for (let i = 0, j = 0; i < num; i++) {
        for (let k = 0; k < (num - j); k++) {
            process.stdout.write((k<j)?" ":"*" + "");
        }
        if (i+1<(num/2)) {
            j++;
        } else {
            j--;
        }
        console.log();
    }
}

console.log('-----문제3-----')
ans3(5)
console.log()
ans3(9)
console.log()

// 문제 4
let ans4 = function (str) {
    let arr = str.split(';');
    const toNumbers = array => array.map(Number);
    arr = toNumbers(arr)
    arr = arr.sort(function(a, b) {return b-a})
    console.log(arr)
}

console.log('-----문제4-----')
ans4('51900;83000;158000;367500;250000;59200;128500;1304000')
console.log()

// 문제 5
class Member {
    constructor (id, name, phone, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    toString() {
        console.log(`id = ${this.id}, 이름 = ${this.name}, 전화번호 = ${this.phone}, 이메일 = ${this.email}`);
    }
}

let james = new Member(12345, 'james', '01012345678', 'anyemail@gmail.com')
let maria = new Member(54321, 'maria', '01098765432', 'email2@naver.com')

console.log('-----문제5-----')
james.toString();
maria.toString();