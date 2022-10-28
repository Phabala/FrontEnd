import React, {useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { applyMiddleware } from 'redux';
// useRef : 컴포넌트 안의 특정DOM(요소) 선택을 도와주는 기능
// useNavigate : 특정 주소값으로 화면을 전활 할 수 있는 역할

function Join() {

    const test = useSelector((state)=>state.id);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const useId = useRef();
    const [user, setUser] = useState({
        ID: "",
        PW: "",
        NICK : ""
    });

    // action에 있는 값을 (message)를 가져와서 State 변경 로직

    const {ID, PW, NICK} = user; // 굳이 객체 비구조화 할당을 써야할까? user = user 하면 안되나?

    /*
    function tryJoin() {
        nav("/Login?id="+id+"&pw="+pw+"&nick="+nick);
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

    function tryJoin() {
        dispatch({
            type:'join',
            id:ID,
            pw:PW,
            nick:NICK
        });
        navigate("/Login");
    };

    

    return (
        <>
            <h1>회원가입 페이지 입니다</h1>
            <form action="/Login" method='post'>
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
            <button onClick={dispatch({
                type:'join',
                id : ID,
                pw : PW,
                nick : NICK
            })} type="button">Join</button> {/* submit이 아니라 button 타입이어야 한다. submit 이면 form으로 보내기 때문. */}
            <button onClick={()=>{navigate("./Login", {state:{user:user}})}}>Join</button><button onClick={onReset} type="button">초기화</button>
            </form>
            {/* 초기화 버튼 누르면 input 안의 값들 사라지게 하고, 포커스가 ID에 맞춰지게 하기 */}
            {/* <button onClick={tryJoin}>Join</button> */}
            {/* form 태그 안에 있는 버튼은 기본적으로 submit, 그래서 form 태그 밖에 빼주거나 type을 "button"으로 해준다. (form 태그 안의 type 기본값: submit) */}
            {/* submit 하면 기본적으로 쿼리로 들어가네? */}
        </>
    )
}

export default Join;