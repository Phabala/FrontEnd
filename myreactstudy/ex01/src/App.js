import logo from './logo.svg';
import './App.css';
import Ex01 from './component/Ex01';
import Ex02 from './component/Ex02';
import Ex03 from './component/Ex03';
import Ex04 from './component/Ex04';
import Home from './component/Home';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import About from './component/About';
import Header from './component/Header';
// Routes : 여러개의 페이지(컴포넌트)에 대한 정보를 가지고 있는 태그
// Route : 페이지(컴포넌트)에 경로(주소)를 부여해 줄 수 있는 역할


function App() {

  return (
  //  <Ex01 name={name} ttt="123" color={myColor}/> // 얘는 또 희한하게 대문자가 앞에 있어야하네
  // <Ex02/>
  <>
  <Header/> {/* 어느 페이지에 가던 보인다. 라우터 설정을 안해놨기 때문. */}
  <Routes>
    <Route path='/login' element={<Ex04/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
  </Routes>
  </>
   );
  }
  
 export default App;
  
// App은 Ex01의 부모 컴포넌트
// Ex01은 App 의 자식 컴포넌트

// props : 속성값 전달 (부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달할 때 사용)