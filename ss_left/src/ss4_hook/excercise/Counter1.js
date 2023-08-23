
import { useHook } from "./useHook";
function Counter1() {
    let [count, increase] = useHook(1);
    return (
        <div>
            Count:{count}<br />
            <button onClick={increase}>Add 1</button>
            <br />
        </div>
    );
}
export default Counter1;