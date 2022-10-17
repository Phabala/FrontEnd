import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 외부 css 파일 import
import App from './App'; // .js 생략, import App -> <App /> 로 보냄
// App.js 에서 사용자 정의 태그(컴포넌트)를 불러와서 사용하겠다
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // ReactDOM 이 알아서 index.html 과 연결해준다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();