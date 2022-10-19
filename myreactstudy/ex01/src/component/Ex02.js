import {useState} from 'react'
// useState : 리액트에서 기본적으로 제공하는 기능(Hooks) --> 상태값을 만들 수 있는 기능을 제공
// 상태값 : 화면이 보인 후에도 값이 바뀌면 화면도 바뀔 수 있는 값

function Ex02() {
    let result = "야근"; // result는 일반변수, 일반변수는 페이지가 한번 보여지고 난 후에는 그 값을 보여줄 수 없다. --> 화면이 렌더링 됬을 때
    // 화면이 렌더링 된 후에 데이터가 바뀐다면 일반변수는 그 데이터가 보여지지 않는다.

    const [result2, setResult2] = useState("일단 야근"); // 변수를 두개 만들어 놓은 상태, useState로 하여금 데이터를 담아줌. () 안에 초기값
    // 앞에 오는 변수(result2)는 상태값을 나타낼 수 있는 값
    // 뒤에 오는 변수(setResult2)는 (const로 만들었지만) 상태값을 바꿀 수 있는 함수
    // 비구조 할당 방법

    function chResult(){
        result="칼퇴!!!!";
        console.log(" 1 :" + result);

        setResult2("칼퇴"); // result2의 데이터가 "칼퇴"로 바뀜, setResult2는 chResult()에서 제일 마지막 순서로 실행된다.
        /* if(result2 == "칼퇴") {
            console.log("Test"); // --> 그래서 제대로 안 돌아감
        } */
        console.log(" 2 :" + result2);
    }

    return(
        <>
            <h1>두번째 컴포 useState</h1>
            <h1>오늘은 {result}</h1>
            <h1>오늘은2 {result2}</h1>
            <button onClick={chResult}>바꾸기</button>
            {/* 여기서 온클릭 쓸 때는 js와 다르게 jsx 방식으로 (중괄호 씌워서) */}
        </>
    )
}

export default Ex02;