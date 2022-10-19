function Ex01(props) {
    console.log(props)
    return (
        <>
            <h1 style={{color:props.color}}>첫번째 컴포</h1>
            <h1>저의 이름은 {props.name}</h1>
            <h1>두번째 데이터 {props.ttt}</h1>
        </>
    );
}

export default Ex01;
// props라는 매개변수로 받아주면 부모컴포넌트에서 속성값으로 넘긴 데이터를 전부 가져올 수 있다