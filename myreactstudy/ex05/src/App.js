import './App.css';
import {Routes, Route} from "react-router-dom";
import Join from './component/Join'
import Login from './component/Login'
import Home from './component/Home'

// redux 재료 import
import {createStore} from 'redux';
import {Provider} from 'react-redux';



// reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.
function reducer(currentState, action) { // currentState : 현재 state값, action : 컴포넌트에서 넘긴 메세지

  // currentState 기본값 설정
  if(currentState === undefined) {
    return {
      id:'Test',
      pw:'',
      nick:''
    }

    if (action.type == "join") {
    currentState.id = action.id;
    currentState.pw = action.pw;
    currentState.nick = action.nick;
    }
  }
  // action 에 있는 값(message)을 가져와서 State 변경 로직
  // 변경 후 -> 반환
  return {...currentState}
}
const store = createStore(reducer);

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Join/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Provider>
    </>
  );
}

export default App;