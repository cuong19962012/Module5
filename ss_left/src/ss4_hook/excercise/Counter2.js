
import { useHook } from "./useHook";
function Counter2() {
    let [count, increase] = useHook(2);
    return (
        <div>
            Count:{count}<br />
            <button onClick={increase}>Add 2</button>
            <br />
        </div>
    );
}
export default Counter2;