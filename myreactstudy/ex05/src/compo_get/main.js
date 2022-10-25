import {useState, useRef} from 'react' //useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있도록 도와주는 기능
import { useSearchParams,useNavigate } from 'react-router-dom'

function Main(){
    const [searchParams, setSearchParams] = useSearchParams("");
    const nick = searchParams.get('nick');

    return (
        <>
        <h1>Home</h1>
        <h1>{nick}님 환영합니다</h1>
        </>
    )
}

export default Main;