import {Link} from 'react-router-dom'
import React from 'react';

function Header() {
    return(
        <>
            <h1>머릿글</h1>
            <Link to="/">메인페이지 이동</Link>
            <br/>
        </>
    )
}
export default Header;