// 앞에 대문자로 안해주면 기존의 기능과 겹친다.
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to='./join'><button>회원가입</button></Link>
        <Link to='./login'><button>로그인</button></Link>
        <Link to='./main'><button>메인</button></Link>
    </div>
  )
}

export default Navbar

