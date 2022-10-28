// 상태에 어떠한 변화가 필요하면 action 이란 것이 발생한다. 이는 하나의 객체로 표현된다. 액션 객체는 다음과 같은 형식으로 이루어져 있다.
// action 객체는 type 필드를 반드시 갖고 있어야 한다. 이 값을 액션의 이름이라고 생각하면 된다. 그리고 그 외의 값들은 나중에 상태 업데이트를 할 때 참고해야 할 값이며, 작성자 마음대로 넣을 수 있다.
// 예시 액션들 :

let action1 = {
    type: 'TOGGLE_VALUE'
}

let action2 = {
    type: 'ADD_TOTO',
    data: {
        id : 1,
        text: '리덕스 배우기'
    }
}

let action3 = {
    type: 'CHANGE_INPUT',
    text: '안녕하세요'
}

// 액션 생성 함수 : 
// 액션 생성 함수(action creator)는 액션 객체를 만들어 주는 함수다.

function addTodo(data) {
    return {
        type : 'ADD_TODO',
        data
    };
} // 화살표 함수로도 만들 수 있다.

const changeInput = text => ({
    type: 'CHANGE_INPUT',
    text
});

addTodo('testData'); // {type:'ADD_TODO', 'testData'}
changeInput('testText'); // {type:'CHANGE_INPUT', 'testText'}

// 어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션 객체를 직접 작성하기 번거로울 수 있고, 만드는 과정에서 실수로 정보를 놓칠 수도 있다.
// 이러한 일을 방지하기 위해 이를 함수로 만들어서 관리한다.