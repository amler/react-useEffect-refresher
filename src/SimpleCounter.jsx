import { useState, useEffect } from "react";

export default function SimpleCounter() {
    const [count, setCount] = useState(0);
    useEffect(function myEffect() {
        console.log('myEffect called');
    });
    const increment = () => {
        setCount(c => c + 1);
    };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    );
}
