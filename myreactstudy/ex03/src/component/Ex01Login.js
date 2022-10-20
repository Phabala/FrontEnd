import {useState, useEffect} from 'react'
// 고칠거 많다
function Ex04(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [result , setResult] = useState('로그인 실패')

    function getId(e){
        setInputId(e.target.value);
        chResult();
    }
    function getPw(e){
        setInputPw(e.target.value);
        chResult();
    }
    function chResult(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
        }
       else{
        setResult("다시 입력해주세요")
       }
    }
    return(
        <>
            <input onChange={getId}></input>
            <br></br>
            <input onChange={getPw}></input>
            <h1>{result}</h1>
        </>
    )
}

// onClick={() => {
// 	this.Login();
//     this.setState({
//     	logged: true
// 	    });
//     }
// }

export default Ex04;