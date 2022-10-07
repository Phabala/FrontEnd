// StepOver: 같은 레벨에서 진행
// StepInto: 안으로 파고 들어감 (func()에서 StepInto를 해보자.)
// 여기에 func 호이스팅됨.(console.log위에인가 아래인가)

// function 함수의 this: 자신의 바로 윗 단계를 가리킴
// 화살표 함수의 this: 최상단 함수를 가리킴
console.log("start");

class Human{
    constructor(param1){
        this.type = param1;
    }

    static isHuman(param1){
        let tempVar = param1 instanceof Human;
        return tempVar;
    }

    breath() {
        alert(h-a-a-a-m);
    }
}

class Zero extends Human {
    constructor(param1, param2, param3){
        super(param1);
        this.firstname = param2;
        this.lastname = param3;
    }
    sayName() {
        super.breath();
        alert(`${this.firstname} ${this.lastname}`)
    }
}
const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero);

function wrapper() {
    let varLet5 = 1;
    const varConst5 = 2;
    var varVar5 = 3;
    varNone5 = 4;
    function inner() {
        let varLet6 = 1;
        const varConst6 = 2;
        var varVar6 = 3;
        varNone6 = 4;
    }
    inner();
}
wrapper();

console.log("start here");
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(
            function (param1) {console.log(that.name, param1)}
        )
    }
}
relationship1.logFriends();

console.log("start here");
var relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(
            (param1) => {console.log(that.name, param1)}
        )
    }
}
relationship2.logFriends();

let varLet1 = 1; // this 가 현재의 object가 있으면 가리킨다는게 무슨 말일까?
var varVar1 = 2;

{
    // 여기에 varLet과 varVar를 끌어올림 (자기 스코프에서 최상단으로 끌어올림) 그래도 이왕이면 변수는 최상단에 적어주자.
    {
        console.log(1);
        let varLet2 = 1;
        var varVar2 = 2;
    }    
    let varLet3 = 1;
    var varVar3 = 2;
}

console.log("bk");
function func() {
    // function의 this 는 global이다..? 여기서 this 를 쓰면 인스턴스를 가리키는게 아니다.
    let varLet4 = 1;
    var varVar4 = 2;
}

func();

// console.log("var:", varVar);
// console.log("let:", varLet);

console.log("var:", varVar1);
console.log("let:", varLet1);