import { useDispatch, useSelector } from "react-redux";
import { decrement,increment } from "../../../../config/redux/main/action";
import { counterSelector } from "../../../../config/redux/main/selector";
const Landing = () => {
    const counter = useSelector(counterSelector);
    const dispatch = useDispatch();
    return ( 
        <div>
            <div>total {counter}</div>
            <button onClick={() => {
                dispatch(increment(20));
            }}>Increment</button>
            <button onClick={() => {
                dispatch(decrement(20));
            }}>Decrement</button>
            
        </div>
     );
}
 
export default Landing;