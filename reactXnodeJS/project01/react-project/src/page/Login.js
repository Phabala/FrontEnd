import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();

  const handleJoin = (event) => {
    console.log('handleJoin');
    event.preventDefault();
    console.log(idRef.current.value);
    console.log(pwRef.current.value);

    let userData = {
      id : idRef.current.value,
      pw : pwRef.current.value
    }
    axios.post('http://127.0.0.1:3001/loginData', {
      userData : userData
    })
    .then((res) => {
      console.log('데이터 전송 성공', res.data.result);
      // then 안에 if 문 넣어서 로그인 성공 실패 여부 할것


      alert('로그인 성공');
      navigate('/');
    })
    .catch((res)=> {console.log('데이터 전송 실패', res.data.result)});
  }

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleJoin}>
        <input type="text" ref={idRef} name="ID" placeholder="ID를 입력하시오"></input>
        <input type="password" ref={pwRef} name="PW" placeholder="PW를 입력하시오"></input>
        <input type="submit" value="로그인"></input>
      </form>
    </div>
  )
}

export default Login
