// 리듀서는 변화를 일으키는 함수다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다. 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해준다.
// 리듀서 코드는 다음과 같은 형태로 이루어져 있다.

const initialState = {
    counter : 1
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
            default:
                return state;
    }
} // 아직은 이걸 어떻게 써야할지 잘 모르겠다.