import { useState } from "react";

export function useIncreasement(props) {
    const [count, setCount] = useState(props);
    const increase = (numberIncreament) => {
        setCount(
            prev => prev + numberIncreament
        )
    };
    return [count, increase];
}