import axios from 'axios'
import { useState } from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'
//useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있도록 도와주는 기능

function Login(){
    //params : 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 가지고 있음
    const [inputId, setId] = useState("id를 입력하세요");
    const [inputPw, setPw] = useState("pw를 입력하세요");
    const [result, setResult] = useState("");
    const [searchParams, setSearchParams] = useSearchParams(""); //useSearchParams : 주소값이 있는 쿼리스트링 데이터를 꺼내올 수 있게 만들어줌
    const nav = useNavigate();
    //searchParams.get 메소드로 쿼리스트링 키 값으로 쿼리스트링 데이터 꺼내오기 가능
    const id = searchParams.get('id');
    const pw = searchParams.get('pw');
    const nick = searchParams.get('nick');


    function getId(e) {
        setId(e.target.value);
    } 
    function getPw(e) {
        setPw(e.target.value);
    }
    function resetId(e) {
        setId("")
    }
    function resetPw(e) {
        setPw("")
    }
    function navigateTopage(){
        nav("../Main?nick="+nick);
    }
    function alterResult() {
        setResult("로그인 실패")
    }
    function login() {
        if (inputId == id && inputPw == pw) {
            navigateTopage()
            console.log("로그인 성공")
        } else {
            alterResult()
            console.log("로그인 실패")
        }
    }

    return (
        //id, pw값만 받아오려면 value={inputId}로 지정해주지 않아도 되나 초기값을 지정해주려면 지정해줘야함
        <>
        <form action={'/Main?nick='+nick}>
        <h1>로그인 페이지 입니디</h1>
        ID :<input name="id" onChange={getId} onClick={resetId} value={inputId}></input>
        <br></br>
        PW :<input name="pw" onChange={getPw} onClick={resetPw} value={inputPw}></input>
        <br></br>
        <input value={nick} style={{display:'none'}} name="nick"></input>
        <button>로그인 시도</button>
        <h1>{result}</h1>
        </form>
        </>
    )
}

export default Login;