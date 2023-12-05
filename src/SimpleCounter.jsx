import { useState, useEffect } from "react";

export default function SimpleCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(function myEffect() {
            console.log('myEffect called');
        }, 
        [count]
    );
    const increment = () => {
        setCount(c => c + 1);
    };
    const handleChange = (e) => {
        setName(e.target.value);
    };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+1</button>
            <input onChange={handleChange} type="text" value={name} />
        </div>
    );
}
