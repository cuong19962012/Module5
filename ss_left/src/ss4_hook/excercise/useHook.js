import { useState } from "react";

export function useHook(props) {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(
            prev => prev + props
        )
    };
    return [count, increase];
}