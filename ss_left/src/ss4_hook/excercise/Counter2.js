
import { useIncreasement } from "./useIncreasement";
function Counter2() {
    let [count, increase] = useIncreasement(0);
    return (
        <div>
            Count:{count}<br />
            <button onClick={() => increase(2)}>Add 2</button>
            <br />
        </div>
    );
}
export default Counter2;