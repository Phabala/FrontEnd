import './App.css';

function App() {
  const name = '리액트';
  return <div className = "react">{name}</div>; // JSX에서는 괄호 없어도 된다.

  // className 만 설정해주면, 태그 안의 속성은 자동으로 CSS 파일과 연결이 되나?
}

export default App;