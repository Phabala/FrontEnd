import {Routes, Route} from "react-router-dom";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Join from "./page/Join";
import Login from "./page/Login";
import Main from "./page/Main";

function App() {
  // 1. 고정되어 있는 Header 하나 만들기 --> App import 해와서 라우터 위에 얹기
  //  => JS(B) 이라는 내용의 h3 태그
  //  => 클릭 시, 메인 창으로 이동

  // 2. 고정되어 있는 NavBar에 버튼 두개, 로그인과 회원과입
  //  => 버튼 2개 (로그인, 회원가입)
  //  => 클릭시 각각 페이지로 이동
  return (
    // 브라우저 라우터 (BrowserRouter)
    // 라우터 (Routes)
    // Route : 라우터(Routes)가 건내주는 대상
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

// 