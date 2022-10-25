import axios from 'axios'
import {useState, useRef} from 'react' //useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있도록 도와주는 기능
//import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';


function Join(){
    const useId = useRef();
    const [inputId, setId] = useState("");
    const [inputPw, setPw] = useState("");
    const [inputNick, setNick] = useState("");
    //useNavigate : 주소값을 입력받아 해당하는 주소로 페이지 전환 가능
    //const nav = useNavigate();

    function deleteValue(e){
        setId("");
        setPw("");
        setNick("");
        //ref.current -> ref가 적용된 태그를 의미
        useId.current.focus(); //useId가 가져온 내용에 focus 하라는 의미
        //document.getElementById("test").focus(); //위와 같은 기능 //하지만 위 코드를 권장함
    }
    // function navigateTopage(){
    //     nav("./Login?id="+inputId+"&pw="+inputPw+"&nick="+inputNick);
    // }
    function getId(e) {
        setId(e.target.value);
    } 
    function getPw(e) {
        setPw(e.target.value);
    }
    function getNick(e) {
        setNick(e.target.value);
    }

    //form : 주소값으로 이동하면서 form 태그 안에 있는 내용도 같이 전달
    return (
        //input 태그에 적은 값이 자동으로 key : name, value : 입력값으로 전달가능
        //form tag 안의 모든 button은 기본적으로 type이 submit이라 action으로 이동
        //button의 type을 따로 지정해주면 누르더라도 action으로 이동하지 않음
        <>
            <h1>회원가입 페이지 입니디</h1>
            <form action='/Login'>
                ID :<input name="id" onChange={getId} value={inputId} ref={useId}></input>
                <br></br>
                PW :<input name="pw" onChange={getPw} value={inputPw}></input>
                <br></br>
                NICK :<input name="nick" onChange={getNick} value={inputNick}></input>
                <br></br>
                <button>Join</button>
                <button onClick = {deleteValue} type="button">초기화</button>
            </form>
        </>
    )
}

export default Join;