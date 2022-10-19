import {useState} from 'react';

function Ex01() {

    // const array = ['눈', '바람', '비', '해'];
    const [array, setArray] = useState(['눈', '바람', '비', '해']);

    function deleteData(e) {
        // e.target.value
        setArray(array.filter(function(data, index){
            return index != e.target.value;
        }));
    }

    return (
        <>
            <ul>
                {array.map(function(data, index){
                    return <li key={index}>{data}<button value={index} onClick={deleteData}>삭제</button></li>
                })}
            </ul>
        </>
    )
}

export default Ex01;