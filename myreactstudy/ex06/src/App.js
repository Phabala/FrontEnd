import './App.css';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import Item3 from './component/Item3';
import Right1 from './component/Right1';
import {useState} from 'react';

// 리덕스 재료 준비
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// createStore : state 값을 저장시키는 역할
// Provider : state값을 어떤 컴포넌트와 공유, 제공 할건지를 정의
// reducer : store에 접근해서 state에 관련된 작업을 처리할 기능
// --> 현재의 상태값, 작업(action)

function reducer(currentState, action) {


  if(currentState===undefined){
    return{
      number:1
    }
  }

  // reducer가 처음 store에 적용 될 때 default 상태값을 만드는 부분
  if(action.type =='plus') {
    currentState.number++; // --> 다른 컴포넌트에서 사용가능한 상태값
  } else if(action.type == 'name') {
    currentState.name="승환"; // 사용하고 있는 
  }
  return {...currentState}; // ... 은 안의 내용을 전부 꺼내서 리턴해준다. (객체에 대한 모든 정보를 가져온다.)
}

const store = createStore(reducer); // state값을 저장시킬 저장소 생성

function App() {

  const [number, setNumber] = useState(3);

  return (
    <div id="container">
      <h1>Root :{number}</h1>
      <div id="grid"></div>
      <Provider store={store}> 
      {/* 위에서 만들어 놓은 store와 연결시킨뒤 해당 내용을 하위 컴포넌트(Item1)에 제공 하겠다. 
      또한 하위 컴포넌트가 사용하고 있는 다른 컴포넌트에도 제공한다.*/}
      <Item1 num={number}/>
      <Right1/>
      </Provider>
    </div>
  );
}

export default App;
