import MyComponent from "./MyComponent";

const App = () => {
    return <MyComponent favoriteNumber = {1}>리액트</MyComponent>; // 왜 1만 넣으면 안되고 중괄호로 감싸야되지?
};

export default App;
// props.children : 컴포넌트 태그 사이의 내용을 보여주는 props
