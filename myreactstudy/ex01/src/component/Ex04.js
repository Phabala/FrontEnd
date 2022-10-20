import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Ex04(){
    const nav = useNavigate();
    //useNavigate --> 주소경로를 입력받아 요청해줄수 있는 Hook
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    // 일반 변수는 화면이 렌더링 될때 --> 다시 맨처음 초기값으로 돌아간다!!
    // 화면이 다시 렌더링 된다 ==> 상태값이 바뀔때!
    // let inputId = "";
    // let inputPw = "";
    //let data = 10;
    const [result , setResult] = useState('로그인 실패')
    const [data , setData]  = useState(1);
    function getId(e){
        setInputId(e.target.value);
        //inputId = e.target.value;
        data = 30;
    }
    function getPw(e){
        setInputPw(e.target.value);
        //inputPw = e.target.value;
        console.log(data);
        chData();
    }
    useEffect(function(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
            nav("/");
        }
       else{
           setResult("다시 입력해주세요")
       }
    })
    function chResult(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
        }
       else{
        setResult("다시 입력해주세요")
       }
    }
    function chData(){
        console.log("Test")
        setData(10);
    }
    return(
        <>
            <input onChange={getId}></input>
            <br></br>
            <input onChange={getPw}></input>
            {/* <button onClick={chResult}>로그인</button> */}
            {/* <h1>{(inputId =="smhrd" && inputPw=="123")? 'smhrd님 환영합니다':'로그인실패'}</h1> */}
            <button onClick={chData}>data바꾸기</button>
            <br></br>
            <Link to="/">메인 페이지로 이동</Link>
        </>
    )
}
export default Ex04;