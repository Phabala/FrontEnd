import React, {useState} from 'react'
function Ex04(){
    // const [inputId, setInputId] = useState('');
    // const [inputPw, setInputPw] = useState('');
    let inputId = ""; // 로그인 누르면 다시 초기값으로 돌아감, Ex04 전체가 다시 실행되서. 그래서 초기값만 만들어진 상태라면 밑에 function 들이 다시 실행되지 않는 상태다.
    // 상태값은 렌더링이 되더라도 값을 계속 기억하고 있다. 하지만 렌더링 됐다 함은 일반변수가 초기값으로 되돌아간다.

    // 일반 변수는 화면이 렌더링 될 때 --> 다시 맨 처음 초기값으로 돌아간다.
    // 화면이 다시 렌더링 된다 --> 상태 값이 바뀔 때를 의미한다.
    // 화면이 렌더링 된다는 것은 상태 값이 바뀌는 것과 기준이 같다.

    let inputPw = "";
    const [result , setResult] = useState('로그인 실패')
    function getId(e){
        // setInputId(e.target.value);
        inputId = e.target.value;
    }
    function getPw(e){
        // setInputPw(e.target.value);
        inputPw = e.target.value;
    }
    function chResult(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
        }
       else{
        setResult("다시 입력해주세요")
       }
    }
    return(
        <>
            <input onChange={getId}></input>
            <br></br>
            <input onChange={getPw}></input>
            <button onClick={chResult}>로그인</button>
            <h1>{result}</h1>
        </>
    )
}
export default Ex04;