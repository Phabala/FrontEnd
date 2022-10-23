import "./App.css";

function App() {
  const name = "리액트";
  const name2 = "리액트2";

  const style = {
    backgroundColor: "black", // backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 작성됩니다.
    color: "aqua",
    fontSize: "48px", // font-size -> fontSize
    fontWeight: "bold", // font-weight -> fontWeight
    padding: 16, // 단위를 생략하면 px로 지정됩니다.
  }; // expression 뒤에 붙는 세미콜론

  return (
    <>
      <div style={style}>{name}</div> {/* 70페이지 예시 1 */}
      <div
        style={{
          // 왜 중괄호가 두개일까 -> 첫번째 중괄호는 JSX 안에서 자바스크립트 표현식을 작성하기 위한 중괄호, 두번째 중괄호는 객체를 표현하는 중괄호
          backgroundColor: "black",
          color: "aqua",
          fontSize: "48px",
          fontWeight: "bold",
          padding: 16,
        }}
      >
        {name2}
      </div>
    </>
  ); // > 가 뭐지 -> div 태그 오른쪽 꺽쇠
}

export default App;
