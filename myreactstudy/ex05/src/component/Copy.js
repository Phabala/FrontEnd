import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
//useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있도록 도와주는 기능

function Copy(){
    //params : 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 가지고 있음
    const [inputId, setId] = useState("");
    const [inputPw, setPw] = useState("");
    const [result, setResult] = useState("");
    const [searchParams, setSearchParams] = useSearchParams("");
    //useSearchParams : 주소값이 있는 쿼리스트링 데이터를 꺼내올 수 있게 만들어줌
    //searchParams.get 메소드로 쿼리스트링 키 값으로 쿼리스트링 데이터 꺼내오기 가능
    const id = searchParams.get('id');
    const pw = searchParams.get('pw');

    // const deleteValue = (e) => {
    //     setId("");
    //     setPw("");
    //     setNick("");
    // }

//useSearchParams : 파라미터 가져옴
    function getId(e) {
        setId(e.target.value);
    } 
    function getPw(e) {
        setPw(e.target.value);
    }
    function alterResult() {
        setResult("로그인 실패")
    }
    function login() {
        if (inputId == id && inputPw == pw) {
            console.log("로그인 성공")
        } else {
            alterResult()
            console.log("로그인 실패")
        }
    }

    return (
        <>
        <h1>로그인 페이지 입니디</h1>
        ID :<input onChange={getId} value={inputId}></input>
        <br></br>
        PW :<input onChange={getPw} value={inputPw}></input>
        <br></br>
        <button onClick={login}>로그인 시도</button>
        <h1 value={result}></h1>
        </>
    )
}

export default Copy;