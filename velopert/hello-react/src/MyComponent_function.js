import React from 'react';
import PropTypes from 'prop-types'; // 컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때 사용

const MyComponent = ({name, favoriteNumber, children}) => { // props가 들어갈 자리(파라미터)부분에 비구조화 할당 문법을 사용해 응용하였다.
    // 비구조화 할당 = 객체에서 값을 추출하는 문법
    // const {name, children} = props; // name = props.name, children = props.children
    return (
        <div>
            안녕하세요, 제 이름은 '{name}'입니다. <br/>
            children 값은 '{children}'입니다. <br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.            
        </div>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
};

MyComponent.propTypes = {
    name : PropTypes.string, // prop의 name은 무조건 string 형태로 전달해야 한다는 것을 의미
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;