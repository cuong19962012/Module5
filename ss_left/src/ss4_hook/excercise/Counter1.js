import { useState } from "react";
function Counter1() {
    let [count, setCount] = useState(0);
    let increament = () => {
        setCount(count + 1);
    };
    return (
        <div>
            Count:{count}<br />
            <button onClick={increament}>Add 1</button>
            <br />
        </div>
    );
}
export default Counter1;