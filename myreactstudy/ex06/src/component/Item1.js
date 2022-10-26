import {useSelector} from 'react-redux';
import Item2 from "./Item2";

function Item1(props){ // props 말고 아무 영어나 써줘도 되나?
    const name = useSelector((state)=>state.name);
    return(
        <div>
            <h1>Item1 : {name}</h1>
            <Item2/>
        </div>
    )
}
export default Item1;