import {useState} from 'react';

function Ex04() {

    const idData = 'smhrd';
    const pwData = '123'
    let inputId = "";
    let inputPassword = "";

    const [showLog, setShowData] = useState("");
    const [resultLog, setInputData] = useState(""); // setInputData가 실행될 때 inputData의 상태값이 바뀌고, 상태값의 초기값은 ""다.

    function getId(e) { // getData(e)가 왜 필요한거지? --> e를 취하기 위함.
        inputId = e.target.value;
        if (idData === inputId && pwData === inputPassword) {
            setInputData(1)
        } else {
            setInputData(0)
        }
    }

    function getPassword(e) {
        inputPassword = e.target.value;
        if (idData === inputId && pwData === inputPassword) {
            setInputData(1)
        } else {
            setInputData(0)
        }
    }

    function login() {
        if (resultLog === 1) {
            setShowData("SMHRD님 환영합니다")
        } else {
            setShowData("로그인 실패")
        }
    }

    return(
        <>
            <input onChange={getId}></input><br></br>
            <input onChange={getPassword}></input>
            <button onClick={login}>로그인</button>
            <h1>{showLog}</h1>
        </>
    )
    
    // 코드를 줄일 여지가 없나? --> 버튼 만드는게 불필요한 예제였다. (Ex03)
}

export default Ex04;