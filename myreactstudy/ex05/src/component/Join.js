import React, {useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
// useRef : 컴포넌트 안의 특정DOM(요소) 선택을 도와주는 기능
// useNavigate : 특정 주소값으로 화면을 전활 할 수 있는 역할

function Join() {

    const navigate = useNavigate();
    const useId = useRef();
    const [user, setUser] = useState({
        ID: "",
        PW: "",
        NICK : ""
    });

    const {ID, PW, NICK} = user; // 굳이 객체 비구조화 할당을 써야할까? user = user 하면 안되나?

    /*
    function tryJoin() {
        nav("/Login");
    }
    */

    function onChangeInput(e) {
        const {name, value} = e.target;
        setUser({...user, [name]:value}); // ...user로 불변성 유지와 [name]을 사용해서 현재 입력하고 있는 input의 name 상태 변경
    };

    function onReset(e) {
        setUser({ ID:"", PW:"", NICK:""});
        useId.current.focus();
    };

    return (
        <>
            <h1>회원가입 페이지 입니다</h1>
            ID: <input 
                type="text"
                name="ID"
                value={ID}
                onChange={onChangeInput}
                ref={useId}/>
            <br/>

            PW: <input
                type="password"
                name="PW"
                value={PW}
                onChange={onChangeInput}/>
            <br/>

            NICK: <input 
                type="text"
                name="NICK"
                value={NICK}
                onChange={onChangeInput}/>
            <br/>

            <button onClick={()=>{navigate("./Login", {state:{user:user}})}}>Join</button><button onClick={onReset}>초기화</button>
            {/* 초기화 버튼 누르면 input 안의 값들 사라지게 하고, 포커스가 ID에 맞춰지게 하기 */}
            {/* <button onClick={tryJoin}>Join</button> */}
        </>
    )
}

export default Join;