import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';

function Login() {
    const joinId = useSelector((state)=>state.id); // 괄호 안의 state : 컴포넌트에서 공유되고 있는 store 안의 객체를 가져오라는 말(store 객체를 의미한다.)
    const joinPw = useSelector((state)=>state.pw);
    const joinNick = useSelector((state)=>state.nick);

    const nav = useNavigate();
    const location = useLocation();
    const user = location.state.user;
    const [loginInput, setLoginInput] = useState({
        id : "",
        pw : ""
    });

    const [loginState, setLoginState] = useState(0);
    const [clickButton, setClickButton] = useState(0);

    function goHome() {
            nav("../Home", {state:{user:user}})
    }

    useEffect(() => {
        if (loginState === 1 && clickButton === 1) {
            goHome();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginState, clickButton])

    function ckState(e) {
        if (user.ID === loginInput.id && user.PW === loginInput.pw) {
            setLoginState(1)
        } else {
            setLoginState(0)
        }
    }

    function click(e) {
        setClickButton(1);
    }

    function onChangeInput(e) {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value });
    }

    function tryLogin() {
        if(joinId == loginInput.id && joinPw == loginInput.pw) {
            console.log("성공")
            nav("Home>nick="+joinNick)
        } else {
            console.log("실패")
        }
    }
    return (
        <>
            <h1>Login 페이지</h1>
            <form action = "/Home">
            ID: <input
                type="text"
                name="id"
                value={loginInput.id}
                onChange={onChangeInput}/><br/>

            PW: <input
                type="password"
                name="pw"
                value={loginInput.pw}
                onChange={onChangeInput}/><br/>

            <button onClick={() => {ckState(); click();}}>로그인 시도</button><br/>
            <p>{user.ID} {user.PW}</p>
            <p>{loginInput.id} {loginInput.pw}</p>
            <p>clickButton : {clickButton}</p>
            {(clickButton) && (loginState === 1 ? <h2>로그인 성공</h2> : <h2>로그인 실패</h2>)}
            {goHome}
            {/* 아 이거 어떻게 하더라, 버튼 누를 때만 h2 태그 나오는거 , 왜 되지*/}
            </form>
        </>
    )
}
// 1. Join 을 누르면 Login 페이지로 이동
// 2. 회원가입 데이터를 다음 페이지에 전송
export default Login;