import { useState } from "react";

export const useCounter = ( initialState = 10) => {
    const [count, setCount] = useState(initialState);
    
    const increment = (value = 1) => setCount((current) => current + value)
    const decrement = (value = 1) => setCount((current) => current -  value)
    const reset = () => setCount(initialState) 

    return {
        count,
        increment,
        decrement,
        reset
    }
}
