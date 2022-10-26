import {useDispatch} from 'react-redux';
//useDispatch : store에 연결 되어있는 reducer를 실행시켜주세요

function Right2(){
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Right2</h1>
            <button onClick={()=>dispatch({type:'plus'})}>+</button>
        </div>
    )
}
export default Right2;