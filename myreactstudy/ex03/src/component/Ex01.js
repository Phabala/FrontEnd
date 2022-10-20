import {useEffect, useState} from 'react'; // 이렇게 하면 두개를 가져올 수 있구나

function Ex01() {
    // useEffect : 렌더링 되자마자 이거부터 실행해 주세요!

    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);
    

    // function increase() {
    //     setData(++data); // const data 를 전위, 후위 연산자로는 못해준다. 그런데 data 안에 값을 넣어주므로 const setData(data+1) 은 가능하다.
    // }

    function increase() {
        setData(data+1); // 아 그러니까, 괄호 안의 값을 data 안에 넣는거구나. expression 이 아니라 statement
    }

    // function decrease() {
    //     setData(--data);
    // }

    function decrease() {
        setData(data-1);
    }

    function increase1() {
        setData1(data1+1);
    }

    function decrease1() {
        setData1(data1-1);
    }


    useEffect(function() {
        // useEffect : 렌더링 되자마자 이것부터 실행한다 --> 상태값이 바뀔 때(다시 렌더링될 때)마다 다시 실행시킨다.
        console.log("Text");
    }, [data]) // data가 바뀔때만 실행됨

    return(
        <>
            <h1>useEffect 첫번째</h1>
            <button onClick={increase}>+</button>
            <span>{data}</span>
            <button onClick={decrease}>-</button><br></br>
            <button onClick={increase1}>+</button>
            <span>{data1}</span>
            <button onClick={decrease1}>-</button>
        </>
    )
}
export default Ex01;