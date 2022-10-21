import React from 'react';
import {Link, useSearchParams} from 'react-router-dom'

function About() {

    const [paramsId, setParams] = useSearchParams();
    const [paramsNick, setParamsNick] = useSearchParams();
    // 쿼리스트링으로 넘긴 데이터는 paramsId에 저장 되어있다
    const id = paramsId.get("id");
    const nick = paramsNick.get("nick"); // useSearchParams가 paramsId랑 paramsNick 에 둘 다 걸려 있으므로, paramsId.get("nick"); 으로 해도 된다.

    return (
    <>
        <h1>{id}소개 페이지 입니다.</h1>
        <h1>별명은 {nick} 입니다.</h1>
        <Link to="/">메인 페이지로 이동</Link>
    </>
    )
}

export default About;