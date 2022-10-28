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