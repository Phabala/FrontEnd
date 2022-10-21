import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Ex04(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputNick, setInputNick] = useState('');

    const nav = useNavigate();
    // useNavigate --> 주소 경로를 입력받아 요청해줄 수 있는 Hook

    // let inputId = "";
    // let inputPw = "";
    // 일반 변수는 화면이 렌더링 될 때 --> 다시 맨처음 초기값으로 돌아간다. 
    // 화면이 다시 렌더링 된다 ==> 상태값이 바뀔 때!
    
    const [result , setResult] = useState('로그인 실패')
    function getId(e){
        setInputId(e.target.value)
     
        // console.log(e);
        //inputId = e.target.value;  // 일반변수로만 하면 렌더링할 때 다시 처음부터 시작하기 때문에 초기값으로 시작됨
        // 그래서 getId와 getPw가 다시 작성되어야 원하는 값이 나옴 
        //setInputId(e.target.value); // target : 이벤트가 일어난 태그 (여기선 input)
    } // input의 value는 사용자가 작성한 값이다 
    function getPw(e){

        //inputPw = e.target.value;
        setInputPw(e.target.value);
      
    }
    function chResult(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
        }
       else{ 
        setResult("다시 입력해주세요")
       }
    }

    // ** (추가) useEffect -> 로그인 버튼 없이도 로그인하기 
    useEffect(function () {
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
            //nav("/")  // useNavigate 활용해서 로그인에 성공하면 바로 Home으로 돌아가기 
            nav("/about?id=smhrd&nick="+inputNick); // 로그인 성공하면 about 페이지로 이동하면서 주소에 해당 내용 적힘 
        }
       else{ 
        setResult("다시 입력해주세요")
       }
    }, [inputNick])
    // 1. const로 ID, PW 상태값을 수 있게 선언 
    // 2. getId, getPw 함수로 input에 입력하는 값으로 inputId, inputPw가 바뀔 수 있게 작성
    // 3. useEffect에 if문을 통해 조건 주기 
    // 4. 실제 입력해서 맞게 입력하면 로그인 성공!  
    // (추가) [inputNick]를 추가하면 Nickname을 입력할 때만 실행시켜주세요
     
    return(
        <>
            ID : <input onChange={getId}></input>
            {/* onChange : input에 입력될 때마다 {getID}를 실행해주세요. */}
            <br></br>
            PW : <input onChange={getPw}></input>
            <br></br>
            Nick : <input onChange={(e)=> setInputNick(e.target.value)}></input>  {/* 닉네임 입력할 input 태그 */}
            {/* Nick의 input태그의 내용이 바뀔 때 setInputNick이 실행됨 */}
            
            {/* <button onClick={chResult}>로그인</button> */}
            <h1>{result}</h1>
            <br></br>
            <Link to='/'>메인 페이지로 이동</Link>
        </>
    )
}
export default Ex04;