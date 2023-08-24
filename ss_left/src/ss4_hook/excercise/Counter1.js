import { useIncreasement } from "./useIncreasement";
function Counter1() {
    let [count, increase] = useIncreasement(0);
    return (
        <div>
            Count:{count}<br />
            <button onClick={()=>increase(1)}>Add 1</button>
            <br />
        </div>
    );
}
export default Counter1;