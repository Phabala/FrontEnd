import {useState} from 'react';

function Ex03() {

    const [inputData, setInputData] = useState("");
    let data = "";

    function getData(e) { // 이벤트 객체
        // e --> 이벤트 객체: 이벤트가 일어나는 전반적인 정보를 갖고 있음
        // e.target --> 이벤트를 실행시킨 주체를 가져옴 (input)
        console.log(e.target.value); // e.target을 적어주는 순간 input 태그 그 자체를 의미한다. value를 가져와 주세요 라는 말.
        // 이벤트 객체와 이벤트 객체의 메소드, input 태그에 있는 onChange 같은건 개인적으로 해봐야겠다.
        data = e.target.value;
        setInputData(e.target.value);
    }

    function chData() {
        setInputData(data);
    }

    return(
        <>
            <input onChange={getData}></input>
            <button onClick={chData}>상태값 바꾸기</button>
            <h1>{inputData}</h1>
            {/* 버튼을 넣는게 완벽한 예제는 아니니 참고하자 */}
        </>
    )
}
export default Ex03;