import logo from './logo.svg';
import './App.css';
import Ex01 from './component/Ex01';
import Ex02 from './component/Ex02';
import Ex03 from './component/Ex03';
import Ex04 from './component/Ex04';


function App() {
  const name = "승환";
  const myColor = "red";
  return (
  //  <Ex01 name={name} ttt="123" color={myColor}/> // 얘는 또 희한하게 대문자가 앞에 있어야하네
  // <Ex02/>
  <Ex04/>
   );
  }
  
  export default App;
  
// App은 Ex01의 부모 컴포넌트
// Ex01은 App 의 자식 컴포넌트

// props : 속성값 전달 (부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달할 때 사용)