import React from 'react';
import {Link} from 'react-router-dom'

function About() {
    return (
    <>
        <h1>소개 페이지 입니다.</h1>
        <Link to="/">메인 페이지로 이동</Link>
    </>
    )
}

export default About;