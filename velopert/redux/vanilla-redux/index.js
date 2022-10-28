import {createStore} from 'redux';

// 16.2.3 DOM 레퍼런스 (이번 프로젝트에서만 이렇게 한다. UI 관리할 때 별도의 라이브러리를 사용하지 않기 때문.)
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 16.2.4 액션 타입과 액션 생성 함수 정의
// 액션 : 프로젝트의 상태에 변화를 일으키는 것

// 다음 단락은 액션에 이름을 정의해 준 것이다.
// 액션 이름은 문자열 형태로, 주로 대문자로 작성하며 액션 이름은 고유해야 한다. 이름이 중복되면 의도하지 않은 결과가 발생할 수 있다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 위의 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성해 준다.
// 액션 객체는 type 값을 반드시 갖고 있어야 하며, 그 외에 추후 상태를 업데이트 할 때 참고하고 싶은 값은 내 맘대로 넣을 수 있다.
const toggleSwitch = () => ({type : TOGGLE_SWITCH});
const increase = difference => ({type : INCREASE, difference});
const decrease = () => ({type : DECREASE});

const initialState = {
    toggle : false,
    counter : 0
};

// 리듀서 함수 정의: 리듀서는 변화를 일으키는 함수다. 함수의 파라미터로는 state와 action값을 받아온다.

// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) { // 리듀서 함수가 맨 처음 호출될 때는 state값이 undefined다. 초기화됐을 때 undefined를 방지하기 위해 함수의 파라미터에 기본값이 설정되어 있음.
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성을 유지해주어야 한다. --> 왜? 불변성을 떠나서, 이건 왜 return 해줘야하지? 애초에 불변성이 뭘까
                toggle: !state.toggle // 
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    if (state.toggle) {
        divToggle.classList.add('active');
    }
}