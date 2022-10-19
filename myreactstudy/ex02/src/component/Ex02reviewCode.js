import {useState} from 'react';

function Ex02review() {
    const [todoArray, setTodoArray] = useState([]);
    const [inputData, setInputData] = useState([]); // 일단 여기까지는 그냥 뇌 없이 하는게 좋은 것 같다. 그냥 변수 선언 하듯이 배열이랑 인풋값 선언하고, 앞에 set만 붙여주고

    function getText(e) {
        setInputData(e.target.value);
    }

    function setTodo() {
        setTodoArray(todoArray.concat(inputData));
    }

    function deleteData(e) {
        setTodoArray(todoArray.filter(function(data, index) {
            return index != e.target.value;
        }))
    }

}