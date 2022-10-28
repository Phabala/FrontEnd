import {Component} from 'react';

// 클래스형 컴포넌트는 state 기능과 라이프사이클 기능 사용 가능, 임의 메서드를 정의할 수 있다는 점에서 함수 컴포넌트와 다르다.
// 함수 컴포넌트의 이 단점은 Hooks 라는 기능이 도입되면서 해결되었다.
// 리액트 공식 매뉴얼에서는 컴포넌트를 새로 작성할 때 함수 컴포넌트와 Hooks를 사용하도록 권장하고 있다.
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}
export default App;