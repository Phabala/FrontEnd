import {useState} from 'react';

function Ex02ans() {
    const [todoArray, setTodoArray] = useState([]);
    const [inputData, setInputData] = useState([]);

    function getText(e) {
        setInputData(e.target.value);
    }

    function setTodo() {
        // todoArray 에 inputData 추가
        // 리액트에서 배열에 값을 추가할때는, push가 아니라 concat을 사용

        // 불변성 유지 : 상태값을 업데이트 할 때는 기존 상태를 그대로 두면서 새로운 값으로 상태를 업데이트 해줘야함
        setTodoArray(todoArray.concat(inputData));
    }

    function deleteData(e) {
        setTodoArray(todoArray.filter(function(data, index) {
            return index != e.target.value;
        }));
    }

    return(
        <>
            <h1>Todo List</h1>
            <input onChange={getText}></input>
            <button onClick={setTodo}>추가</button>
            {todoArray.map(function(data, index) {
                return <h1 key={index}>{data}<button value={index} onClick={deleteData}>삭제</button></h1>
            })}
        </>
    )
}
export default Ex02ans;