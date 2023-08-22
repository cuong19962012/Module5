import { useState } from "react";
function Counter2() {
    let [count, setCount] = useState(0);
    let increament = () => {
        setCount(count + 2);
    };
    return (
        <div>
            Count:{count}<br />
            <button onClick={increament}>Add 2</button>
            <br />
        </div>
    );
}
export default Counter2;