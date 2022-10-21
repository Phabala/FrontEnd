import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'

function Ex04() {
    const nav = useNavigate(); //주소 경로를 입력받아 요청해줄 수 있는 Hook

        const [inputId, setInputId] = useState('');
        const [inputPw, setInputPw] = useState('');
        const [inputNick, setInputNick] = useState('');

    useEffect(function() {
        if(inputId == 'smhrd' && inputPw == '123') {
            setResult("smhrd님 환영합니다");
            nav("/about?id=smhrd");
        } else {
            setResult("다시 입력해주세요")
        }
    },[inputPw])

    function getId(e) {
        id = e.target.value;
        setInputId(id);
    }
    function click() {
        if(inputId == "smhrd" && inputPw == 123) {
            setInputData("SMHRD님 환영합니다")
            nav("/about?id=smhrd")
        } else {
            setInputData("로그인실패")
        }
    }
    // function chId(){
    //     setInputId(id);
    // }
    function getPw(e) {
        pw = e.target.value;
        setPw(pw);
    }
    // function chPw(){
    //     setPw(pw);
    // }
    return (
        <>
        ID : <input onChange={getId}></input>
        <br></br>
        PW : <input onChange={getPw}></input>
        <br></br>
        Nick : <input></input> {/* 닉네임 입력할 input */}
        {/* <button onClick={() => {
            chPw()
            chId()}}>로그인</button> 
            <h1>{(inputId == 'smhrd' && inputPw == '123') ? 'SMHRD님 환영합니다':'로그인실패'}</h1> */}
        <br></br>
        <Link to="/">메인 페이지로 이동</Link>
        </>
    )
}
export default Ex04;