import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={increment} style={buttonStyle}>Increment</button>
            <button onClick={decrement} style={buttonStyle}>Decrement</button>
            <button onClick={reset} style={buttonStyle}>Reset</button>
        </div>
    );
};

const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
};

export default Counter;
