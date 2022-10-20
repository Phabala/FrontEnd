import {Link} from 'react-router-dom'
import React from 'react';

function Home () {
    return(
        <>
            <h1>Home</h1>
            <p>Main Page</p>
            {/* React에서 라우터를 통한 페이지 이동을 할 때는 a태그보다 Link 태그를 사용하자 */}
            <a href="./login">로그인 페이지로 이동</a>
            <br></br>
            <Link to="./login">로그인 페이지로 이동2</Link>
            <br></br>
            <Link to="./about">소개페이지로 이동</Link>
        </>
    )
}
export default Home;