import logo from './logo.svg';
import './App.css';
import App2 from './App2'
import Compo1 from './compo/compo1'
import Compo2 from './compo/compo2'
import './test.css'; // 외부 css 파일 import

function App() {

  const name = "승환";
  const data = "ex01";

  // return 안에 사용자 정의 태그 구조를 작성할 수 있다.
  return ( // return 안이 모두 사용자 정의 태그를 만드는 공간
  // JSX 문법 (자바스크립트와 html을 같이 사용할 수 있는 문법)

  // 규칙1: 꼭 html 구조는 한가지 태그로 묶여있어야 한다.
  // 규칙2: 모든 태그는 여는 태그와 닫는 태그가 둘다 존재하여야 한다.
  // 규칙3: JSX 문법 안에서는 사용할 수 있는 JS 문법이 제한되어 있지만 삼항연산자는 가능하다.
  // 규칙4: class를 지정해줄 때는 className 이라는 키워드를 사용한다!

  // 빈 태그(Fragment) 로도 묶어서 사용이 가능하다.

  // style은 객체형식으로 지정해줘야 한다. (key, value)
  <>
    <h1 className = 'first'>HELLO REACT</h1>
    <h1 style={{color:'red'}} id='test'>월요일 파이팅!</h1>
    {/* 변수를 사용할 때는 {변수명} 으로 사용한다.
    html 구조 안에서는 '//'로는 주석을 달 수 없다. 
    JSX 문법 안에서는 사용할 수 있는 Javascript 문법이 제한 되어있다.
    삼항 연산자는 가능하다.
    name에 있는 값이 '승환' -> 나의 이름은 승환
    */}
    <h1>나의 이름은 {name == '승환' ? name : '영표'}</h1>
    <App2></App2>
    {data == 'ex01' ? <Compo1 /> : <Compo2 />}
    {/* <Compo1 /> */}
    {/* <Compo2 /> */}
  </>
  );
}

// 위에서 만들어놓은 사용자 정의태그를 내보내겠다
export default App; // 위에서 만들어 놓은 사용자 정의 컴포넌트를 내보내겠다.